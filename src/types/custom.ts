import { Database } from "./supabaseTypes";

export type Semester = Database["public"]["Tables"]["semesters"]["Row"];
export type Class = Database["public"]["Tables"]["classes"]["Row"];
