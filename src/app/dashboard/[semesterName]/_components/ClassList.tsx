import React from "react";
import { Class } from "@/types/custom";
// import { ClassItem } from "./ClassItem";
import { AddClassButton } from "./AddClass";
import { ClassItem } from "./ClassItem";

export type Action = "delete" | "update" | "create";

export default function ClassList({
	classes,
	semesterId,
}: {
	classes: Array<Class>;
	semesterName: string;
}) {
	return (
		<div>
			{classes?.map((classItem) => {
				return <ClassItem classItem={classItem} key={classItem.id} />;
			})}
			{/* <AddClassButton semesterName={semesterName} /> */}
		</div>
	);
}
