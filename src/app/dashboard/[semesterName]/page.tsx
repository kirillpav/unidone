import React from "react";
import { AddClassButton } from "./_components/AddClass";

export default function Page({ params }: { params: { slug: string } }) {
	return (
		<div>
			<div className="text-white">Semester: {params.slug}</div>
		</div>
	);
}
