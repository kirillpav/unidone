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
		<Card className="p-6 w-full">
			<h2>{semester.semester_name}</h2>
		</Card>
	);
}
