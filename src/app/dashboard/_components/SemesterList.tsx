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
		<div>
			<div className="flex flex-row gap-4">
				<AddSemester />
				{semesters?.map((semester) => {
					return <SemesterItem semester={semester} key={semester.id} />;
				})}
			</div>
		</div>
	);
}
