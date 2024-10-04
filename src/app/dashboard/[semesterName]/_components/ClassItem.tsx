"use client";
import { Class } from "@/types/custom";
import { Card } from "@/components/ui/card";
// import { deleteClass } from "../actions"
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ClassItem({ classItem }: { classItem: Class }) {
	return (
		<form className="w-1/4">
			<ClassCard classItem={classItem}></ClassCard>
		</form>
	);
}

export function ClassCard({ classItem }: { classItem: Class }) {
	return (
		<Link href={`/dashboard/${classItem.semester_id}/${classItem.id}`}>
			<Card className="p-6 bg-gray-700 border-none relative">
				<h2>{classItem.class_name}</h2>
				<p>{classItem.location}</p>
				<p>{classItem.professor_name}</p>
				<Button
					className="bg-red-600 hover:bg-red-500 absolute right-1 bottom-1"
					formAction={async () => {
						// await deleteClass(class.id);
					}}
					variant={"ghost"}
					size={"icon"}
				>
					<Trash2 />
				</Button>
			</Card>
		</Link>
	);
}
