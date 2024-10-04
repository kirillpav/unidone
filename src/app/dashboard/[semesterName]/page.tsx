import React from "react";
import { AddClassButton } from "./_components/AddClass";
import { createClient } from "@/utils/supabase/server";
import ClassList from "./_components/ClassList";

export default async function Page({
	params,
}: {
	params: { semesterName: string };
}) {
	const supabase = createClient();

	const {
		data: { user },
	} = await supabase.auth.getUser();

	if (!user) {
		return <p>Not Logged In</p>;
	}

	const { data: semesterData, error: SemesterError } = await supabase
		.from("semesters")
		.select("id")
		.eq("user_id", user.id)
		.single();

	if (SemesterError || !semesterData) {
		return <p>Semester not found</p>;
	}

	const { data: classesData, error: classesError } = await supabase
		.from("classes")
		.select("*")
		.eq("semester_id", semesterData.id);

	if (classesError) {
		return <p>Error</p>;
	}

	return (
		<div>
			<h2>{params.semesterName}</h2>
			<ClassList classes={classesData} semesterName={params.semesterId} />
		</div>
	);
}
