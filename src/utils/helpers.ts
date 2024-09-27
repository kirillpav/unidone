export const getURL = (path: string = "") => {
	// NEXT_PUBLIC_SITE_URL is set in .env.local !! Set in when hosting
	let URL =
		process?.env?.NEXT_PUBLIC_SITE_URL &&
		process.env.NEXT_PUBLIC_SITE_URL.trim() !== ""
			? process.env.NEXT_PUBLIC_SITE_URL
			: "http://localhost:3000";
};
