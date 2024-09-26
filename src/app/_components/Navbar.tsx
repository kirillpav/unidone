import { Button } from "@/components/ui/button";
import SignOutButton from "./SignOutButton";

export default function Navbar() {
	return (
		<nav className="p-10">
			<div className="flex flex-row justify-around text-white">
				<a href="/">UniDone</a>
				<a href="">Pricing</a>
				<Button>Sing In For Free</Button>
				<SignOutButton />
			</div>
		</nav>
	);
}
