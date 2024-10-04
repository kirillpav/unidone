"use client";
import { Semester } from "@/types/custom";
import { Card } from "@/components/ui/card";
import { deleteSemester } from "../actions";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function SemesterItem({ semester }: { semester: Semester }) {
	return (
		<form className="w-1/4">
			<SemesterCard semester={semester}></SemesterCard>
		</form>
	);
}

export function SemesterCard({ semester }: { semester: Semester }) {
	return (
		<Link href={`/dashboard/${semester.semester_name}`}>
			<Card className="p-6 bg-gray-700 border-none relative">
				<h2>{semester.semester_name}</h2>
				<p>{semester.start_date}</p>
				<Button
					className="bg-red-600 hover:bg-red-500 absolute right-1 bottom-1"
					formAction={async () => {
						await deleteSemester(semester.id);
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
