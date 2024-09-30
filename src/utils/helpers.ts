export const getURL = (path: string = "") => {
	// * NEXT_PUBLIC_SITE_URL is set in .env.local !! Set in when hosting
	let url =
		process?.env?.NEXT_PUBLIC_SITE_URL &&
		process.env.NEXT_PUBLIC_SITE_URL.trim() !== ""
			? process.env.NEXT_PUBLIC_SITE_URL
			: "http://localhost:3000";
	// Trim URL
	url.replace(/\/+$/, "");
	url = url.includes("http") ? url : `https://${url}`;
	path = path.replace(/^\/+/, "");

	return path ? `${url}/${path}` : url;
};
