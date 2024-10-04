"use server";
import { Class } from "@/types/custom";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function AddClass(formData: FormData, semester_name: string) {
	const supabase = createClient();
	const text = formData.get("class_name") as string | null;
	const location = formData.get("location") as string | null;
	const professor_name = formData.get("professor_name") as string | null;
	const day_of_week = formData.get("day_of_week") as string | null;

	if (!text) {
		throw new Error("Class name is required");
	}
	const {
		data: { user },
	} = await supabase.auth.getUser();

	const { data: semesterData, error: semesterError } = await supabase
		.from("semesters")
		.select("id")
		.eq("name", semester_name)
		.eq("user_id", user.id)
		.single();

	if (semesterError || !semesterData) {
		throw new Error("Semester not found");
	}

	if (!user) {
		throw new Error("User not found");
	}

	const { error } = await supabase.from("classes").insert({
		class_name: text,
		user_id: user.id,
		location: location,
		professor_name: professor_name,
	});

	if (error) {
		throw new Error("Error" + error.message);
	}

	revalidatePath(`/dashboard/${semester_name}`);
}
