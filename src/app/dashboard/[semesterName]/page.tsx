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

	const { data: semesterData, error: semesterError } = await supabase
		.from("semesters")
		.select("id")
		.eq("user_id", user.id)
		.single();

	if (semesterError || !semesterData) {
		return <p>Semester not found. Error: {semesterError.message}</p>;
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
