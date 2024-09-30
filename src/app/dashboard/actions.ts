"use server";
import { Semester } from "@/types/custom";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function addSemester(formData: FormData) {
	const supabase = createClient();
	const text = formData.get("semester_name") as string | null;

	if (!text) {
		throw new Error("Semester name is required");
	}

	const {
		data: { user },
	} = await supabase.auth.getUser();

	if (!user) {
		throw new Error("User not found");
	}

	const { error } = await supabase.from("semesters").insert({
		semester_name: text,
		user_id: user.id,
	});

	if (error) {
		throw new Error("Error");
	}

	revalidatePath("/dashboard");
}
