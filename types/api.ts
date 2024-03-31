export type Genre = {
	list_name: string;
	display_name: string;
	list_name_encoded: string;
	oldest_published_date: string;
	newest_published_date: string;
	updated: string;
};

export type GetGenres = {
	status: string;
	copyright: string;
	num_results: number;
	results: Genre[];
};
