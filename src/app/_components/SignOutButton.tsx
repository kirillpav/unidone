"use client";

import { Button } from "@/components/ui/button";
import { createClient } from "@supabase/supabase-js";

import { useRouter } from "next/navigation";

const supabase = createClient(
	process.env.NEXT_PUBLIC_SUPABASE_URL!,
	process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function SignOutButton() {
	let redirectPath: string | null;
	const router = useRouter();

	const signOut = async () => {
		try {
			await supabase.auth.signOut();
			router.push("/login");
		} catch (error) {
			console.error("Error signing out:", error.message);
		}
	};

	return <Button onClick={signOut}>Sign Out</Button>;
}
