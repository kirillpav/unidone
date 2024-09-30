"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useRef } from "react";
import { addSemester } from "../actions";

function FormContent() {
	return (
		<>
			<Input
				minLength={3}
				name="semester_name"
				placeholder="Semester name"
				required
			/>
			<Button type="submit" size="icon" className="min-w-10">
				Add
			</Button>
		</>
	);
}

export function AddSemester() {
	const formRef = useRef<HTMLFormElement>(null);

	return (
		<Card>
			<CardContent className="p-3">
				<form
					ref={formRef}
					className="flex gap-4"
					action={async (data) => {
						await addSemester(data);
						formRef.current?.reset();
					}}
				>
					<FormContent />
				</form>
			</CardContent>
		</Card>
	);
}
