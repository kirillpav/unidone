import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export default async function Dashboard() {
	const supabase = await createClient();

	const {
		data: { user },
	} = await supabase.auth.getUser();

	if (!user) {
		return redirect("/login");
	}

	return <div></div>;
}
