import { login, signup } from "./actions";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { OAuthButtons } from "./oauth-signing";

export default async function LoginPage() {
	const supabase = await createClient();

	const {
		data: { user },
	} = await supabase.auth.getUser();

	if (user !== null) {
		return redirect("/dashboard");
	}

	return (
		<section className="h-[calc(100vh-57px)] flex justify-center items-center">
			<Card className="mx-auto max-w-sm">
				<CardHeader>
					<CardTitle className="text-2xl">Log in</CardTitle>
					<CardDescription>
						Enter your email below to login to your account
					</CardDescription>
				</CardHeader>
				<CardContent className="flex flex-col gap-4">
					<form id="login-form" className="grid gap-4">
						<div className="grid gap-2">
							<Label htmlFor="email">Email:</Label>
							<Input
								id="email"
								name="email"
								type="email"
								placeholder="m@example.com"
								required
							/>
						</div>
						<div className="grid gap-2">
							<Label htmlFor="password">Password:</Label>
							<Input
								id="password"
								name="password"
								type="password"
								minLength={6}
								required
							/>
						</div>
						<Button formAction={login} className="text-white w-full">
							Log in
						</Button>
						<OAuthButtons />
						<div className="text-center text-sm">
							Don&apos;t have an account?{" "}
							<button
								formAction={signup}
								form="login-form"
								className="underline"
							>
								Sing Up
							</button>
						</div>
					</form>
				</CardContent>
			</Card>
		</section>
	);
}
