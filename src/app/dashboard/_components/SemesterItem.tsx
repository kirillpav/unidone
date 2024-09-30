import { Semester } from "@/types/custom";
import { Card } from "@/components/ui/card";

export function SemesterItem({ semester }: { semester: Semester }) {
	return (
		<form>
			<SemesterCard semester={semester}></SemesterCard>
		</form>
	);
}

export function SemesterCard({ semester }: { semester: Semester }) {
	return (
		<Card>
			<div className="w-1/3">{semester.semester_name}</div>
		</Card>
	);
}
