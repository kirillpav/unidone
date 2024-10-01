import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import SemesterList from "./_components/SemesterList";

export default async function Dashboard() {
	const supabase = await createClient();

	const {
		data: { user },
	} = await supabase.auth.getUser();

	if (!user) {
		return redirect("/login");
	}

	const { data: semesters, error } = await supabase
		.from("semesters")
		.select("*")
		.order("start_date", { ascending: false });

	if (error) {
		console.error("Supabase error: ", error.message);
		return <p className="text-white">Error fetching semesters</p>;
	}

	return (
		<section className="p-3 pt-6 w-full flex flex-row gap-4">
			<div className="w-2/3">
				<p className="text-white">Hi {user.email}!</p>
				<SemesterList semesters={semesters ?? []} />
			</div>
			<div className="w-1/3 text-white">
				<h2>Tasks</h2>
				// TODO Add tasks
			</div>
		</section>
	);
}
