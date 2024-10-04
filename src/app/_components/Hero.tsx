import { Button } from "@/components/ui/button";
import { SeparatorHorizontal } from "lucide-react";

export default function Hero() {
	return (
		<div className="flex flex-col items-center mt-12">
			<h1 className="text-white text-7xl text-center w-1/2 mb-6 font-bold">
				Supercharge your unversity productivity
			</h1>
			<Button className="w-[200px]">Get Started</Button>
		</div>
	);
}
