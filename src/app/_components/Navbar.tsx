import { Button } from "@/components/ui/button";
import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import { signOut } from "../login/actions";

export default async function Navbar() {
	const supabase = await createClient();
	const {
		data: { user },
	} = await supabase.auth.getUser();
	return (
		<nav className="p-10">
			<div className="flex flex-row justify-around text-white">
				<a href="/">UniDone</a>
				<a href="">Pricing</a>
				{user !== null ? (
					<form action={signOut} className="flex flex-row items-center gap-2">
						<p> {user.email}</p>
						<Button>Sign Out</Button>
					</form>
				) : (
					<Button>
						<Link href={"/login"}>Log In</Link>
					</Button>
				)}
			</div>
		</nav>
	);
}
