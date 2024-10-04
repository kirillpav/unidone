"use client";
import { Class } from "@/types/custom";
import { Card } from "@/components/ui/card";
// import { deleteClass } from "../actions"
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ClassItem({ class }: { class: Class }) {
    return (
        <form className="w-1/4">
            <ClassCard class={class}></ClassCard>
        </form>
    );
} 



export function ClassCard({ class }: { class: Class }) {
    return (
        <Link}>
            <Card className="p-6 bg-gray-700 border-none relative">
                <h2>{class.class_name}</h2>
                <p>{class.start_date}</p>
                <Button
                    className="bg-red-600 hover:bg-red-500 absolute right-1 bottom-1"
                    formAction={async () => {
                        // await deleteClass(class.id);
                    }}
                    variant={"ghost"}
                    size={"icon"}
                >
                    <Trash2 />
                </Button>
            </Card>
        </Link>
    );
}   