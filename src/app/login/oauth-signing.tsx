"use client";

import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Provider } from "@supabase/supabase-js";
import { Button } from "@/components/ui/button";
import { oAuthSignIn } from "./actions";

type OAuthProvider = {
	name: Provider;
	displayName: string;
	icon: JSX.Element;
};

export function OAuthButtons() {
	const OAuthProviders: OAuthProvider[] = [
		{
			name: "github",
			displayName: "GitHub",
			icon: <GitHubLogoIcon className="size-5" />,
		},
	];

	return (
		<>
			{OAuthProviders.map((provider) => (
				<Button
					key={provider.name}
					className="flex items-center justify-center gap-2 p-2 border rounded-md"
					variant="outline"
					onClick={async () => {
						await oAuthSignIn(provider.name);
					}}
				>
					{provider.icon}
					<span>Sign in with {provider.displayName}</span>
				</Button>
			))}
		</>
	);
}
