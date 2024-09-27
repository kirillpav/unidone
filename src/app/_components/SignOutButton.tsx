import { Button } from "@/components/ui/button";
import { logout } from "../login/actions";

export default function SignOutButton() {
	return <Button formAction={logout}>Sign Out</Button>;
}
