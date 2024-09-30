export type Json =
	| string
	| number
	| boolean
	| null
	| { [key: string]: Json | undefined }
	| Json[];

export type Database = {
	graphql_public: {
		Tables: {
			[_ in never]: never;
		};
		Views: {
			[_ in never]: never;
		};
		Functions: {
			graphql: {
				Args: {
					operationName?: string;
					query?: string;
					variables?: Json;
					extensions?: Json;
				};
				Returns: Json;
			};
		};
		Enums: {
			[_ in never]: never;
		};
		CompositeTypes: {
			[_ in never]: never;
		};
	};
	public: {
		Tables: {
			classes: {
				Row: {
					class_name: string | null;
					created_at: string | null;
					day_of_week: string | null;
					id: number;
					location: string | null;
					professor_name: string | null;
					semester_id: number | null;
					time_end: string | null;
					time_start: string | null;
				};
				Insert: {
					class_name?: string | null;
					created_at?: string | null;
					day_of_week?: string | null;
					id?: number;
					location?: string | null;
					professor_name?: string | null;
					semester_id?: number | null;
					time_end?: string | null;
					time_start?: string | null;
				};
				Update: {
					class_name?: string | null;
					created_at?: string | null;
					day_of_week?: string | null;
					id?: number;
					location?: string | null;
					professor_name?: string | null;
					semester_id?: number | null;
					time_end?: string | null;
					time_start?: string | null;
				};
				Relationships: [
					{
						foreignKeyName: "classes_semester_id_fkey";
						columns: ["semester_id"];
						isOneToOne: false;
						referencedRelation: "semesters";
						referencedColumns: ["id"];
					}
				];
			};
			semesters: {
				Row: {
					created_at: string | null;
					end_date: string | null;
					id: number;
					semester_name: string | null;
					start_date: string | null;
					user_id: string | null;
				};
				Insert: {
					created_at?: string | null;
					end_date?: string | null;
					id?: number;
					semester_name?: string | null;
					start_date?: string | null;
					user_id?: string | null;
				};
				Update: {
					created_at?: string | null;
					end_date?: string | null;
					id?: number;
					semester_name?: string | null;
					start_date?: string | null;
					user_id?: string | null;
				};
				Relationships: [
					{
						foreignKeyName: "semesters_user_id_fkey";
						columns: ["user_id"];
						isOneToOne: false;
						referencedRelation: "users";
						referencedColumns: ["id"];
					}
				];
			};
			to_do_list: {
				Row: {
					class_id: number | null;
					completed: boolean | null;
					created_at: string | null;
					due_date: string | null;
					id: number;
					task_name: string | null;
				};
				Insert: {
					class_id?: number | null;
					completed?: boolean | null;
					created_at?: string | null;
					due_date?: string | null;
					id?: number;
					task_name?: string | null;
				};
				Update: {
					class_id?: number | null;
					completed?: boolean | null;
					created_at?: string | null;
					due_date?: string | null;
					id?: number;
					task_name?: string | null;
				};
				Relationships: [
					{
						foreignKeyName: "to_do_list_class_id_fkey";
						columns: ["class_id"];
						isOneToOne: false;
						referencedRelation: "classes";
						referencedColumns: ["id"];
					}
				];
			};
		};
		Views: {
			[_ in never]: never;
		};
		Functions: {
			[_ in never]: never;
		};
		Enums: {
			[_ in never]: never;
		};
		CompositeTypes: {
			[_ in never]: never;
		};
	};
};

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
	PublicTableNameOrOptions extends
		| keyof (PublicSchema["Tables"] & PublicSchema["Views"])
		| { schema: keyof Database },
	TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
		? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
				Database[PublicTableNameOrOptions["schema"]]["Views"])
		: never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
	? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
			Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
			Row: infer R;
	  }
		? R
		: never
	: PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
			PublicSchema["Views"])
	? (PublicSchema["Tables"] &
			PublicSchema["Views"])[PublicTableNameOrOptions] extends {
			Row: infer R;
	  }
		? R
		: never
	: never;

export type TablesInsert<
	PublicTableNameOrOptions extends
		| keyof PublicSchema["Tables"]
		| { schema: keyof Database },
	TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
		? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
		: never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
	? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
			Insert: infer I;
	  }
		? I
		: never
	: PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
	? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
			Insert: infer I;
	  }
		? I
		: never
	: never;

export type TablesUpdate<
	PublicTableNameOrOptions extends
		| keyof PublicSchema["Tables"]
		| { schema: keyof Database },
	TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
		? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
		: never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
	? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
			Update: infer U;
	  }
		? U
		: never
	: PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
	? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
			Update: infer U;
	  }
		? U
		: never
	: never;

export type Enums<
	PublicEnumNameOrOptions extends
		| keyof PublicSchema["Enums"]
		| { schema: keyof Database },
	EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
		? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
		: never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
	? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
	: PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
	? PublicSchema["Enums"][PublicEnumNameOrOptions]
	: never;
