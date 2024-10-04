"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useRef } from "react";
import { AddClass } from "../actions";

function FormContent() {
	return (
		<>
			<Input
				minLength={3}
				name="class_name"
				placeholder="class name"
				required
			/>
			<Input minLength={3} name="location" placeholder="Location" />
			<Input minLength={3} name="professor_name" placeholder="Professor" />
			<Button type="submit" size="icon" className="min-w-10">
				Add
			</Button>
		</>
	);
}

export function AddClassButton({ semesterId }: { semesterId: number }) {
	const formRef = useRef<HTMLFormElement>(null);

	return (
		<Card>
			<CardContent className="p-3">
				<form
					ref={formRef}
					className="flex gap-4"
					action={async (data) => {
						await AddClass(data, semesterId);
						formRef.current?.reset();
					}}
				>
					<FormContent />
				</form>
			</CardContent>
		</Card>
	);
}
