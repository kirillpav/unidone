"use server";
import { Class } from "@/types/custom";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function AddClass(formData: FormData, semesterId: number) {
	const supabase = createClient();
	const text = formData.get("class_name") as string | null;
	const location = formData.get("location") as string | null;
	const professor_name = formData.get("professor_name") as string | null;

	if (!text) {
		throw new Error("Class name is required");
	}
	const {
		data: { user },
	} = await supabase.auth.getUser();

	const { data: semesterData, error: semesterError } = await supabase
		.from("semesters")
		.select("id")
		.eq("id", semesterId)
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
		semester_id: semesterData.id,
		location: location,
		professor_name: professor_name,
	});

	if (error) {
		throw new Error("Error" + error.message);
	}

	revalidatePath(`/dashboard/${semesterId}`);
}

export async function deleteClass(classId: number, semesterId: number) {
	const supabase = createClient();

	const {
		data: { user },
	} = await supabase.auth.getUser();

	if (!user) {
		throw new Error("User not found");
	}

	const { error } = await supabase
		.from("classes")
		.delete()
		.match({ id: classId, user_id: user.id });

	if (error) {
		throw new Error("Error deleting class");
	}

	revalidatePath(`/dashboard/${semesterId}`);
}
