import { Button } from "@/components/ui/button";
import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import { signOut } from "../login/actions";
import { SeparatorHorizontal } from "lucide-react";
import { redirect } from "next/navigation";

export default async function Navbar() {
	const supabase = await createClient();
	const {
		data: { user },
	} = await supabase.auth.getUser();

	return (
		<nav className="p-10">
			<div className="flex flex-row justify-around text-white items-center">
				<Link href="/" className="text-3xl font-bold">
					Uni<span className="text-blue-500">Done</span>
				</Link>

				{user !== null ? (
					<form action={signOut} className="flex flex-row items-center gap-2">
						<Link href={"/dashboard"}>Dashboard</Link>
						<Link href={"/dashboard/classes"}>Classes</Link>
						<Link href={"/dashboard/assignments"}>Assignments</Link>
						{/* <p> {user.email}</p> */}
						<Button>Sign Out</Button>
					</form>
				) : (
					<Button>
						<Link href={"/login"}>Log In</Link>
					</Button>
				)}
			</div>
			<div className="w-full border-b border-b-white mt-4 overflow-auto"></div>
		</nav>
	);
}
