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
		<Card className="p-6">
			<h2>{semester.semester_name}</h2>
			<p>{semester.start_date}</p>
		</Card>
	);
}
