import React from "react";
import { Class } from "@/types/custom";
// import { ClassItem } from "./ClassItem";
import { AddClassButton } from "./AddClass";

export type Action = "delete" | "update" | "create";

export default function ClassList({ classes }: { classes: Array<Class> }) {
	return (<div>{classes?.map((class) => {
        return <ClassItem class={class} key={class.id}>{class.class_name}</ClassItem>;
    })}
       <AddClassButton /> 
    </div>);
}
