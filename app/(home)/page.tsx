import Link from 'next/link';
import { GetGenres } from '@/types/api';
import { BASE_URL } from '@/app/constants';
import PageTitle from '@/components/pageTitle';

export const metadata = {
	title: 'Home',
};

async function getGenres() {
	const url = `${BASE_URL}/lists`;

	const response = await fetch(url);
	const data = await response.json();
	return data as GetGenres;
}

export default async function Page() {
	const genres = await getGenres();

	return (
		<>
			<PageTitle>The New York Times Best Seller Explorer</PageTitle>

			<ul>
				{genres.results.map((genre) => (
					<li key={genre.list_name_encoded}>
						<Link href={`/list/${genre.list_name_encoded}`}>
							{genre.display_name}
						</Link>
					</li>
				))}
			</ul>
		</>
	);
}

export const runtime = 'edge';
