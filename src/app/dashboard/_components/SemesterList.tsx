import React from "react";
import { Semester } from "@/types/custom";
import { SemesterItem } from "./SemesterItem";
import { AddSemester } from "./AddSemester";

export type Action = "delete" | "update" | "create";

export default function SemesterList({
	semesters,
}: {
	semesters: Array<Semester>;
}) {
	return (
		<div className="flex flex-row gap-4 flex-wrap ">
			{semesters?.map((semester) => {
				return <SemesterItem semester={semester} key={semester.id} />;
			})}
			<AddSemester />
		</div>
	);
}
