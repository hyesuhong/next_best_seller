import { GetGenres } from '@/types/api';
import { BASE_URL } from '@/app/constants';
import PageTitle from '@/components/pageTitle';
import LinkButton from '@/components/linkButton';

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

			<ul className='flex flex-wrap gap-6'>
				{genres.results.map((genre) => (
					<li key={genre.list_name_encoded}>
						<LinkButton
							path={`/list/${genre.list_name_encoded}`}
							name={genre.display_name}
						/>
					</li>
				))}
			</ul>
		</>
	);
}

export const runtime = 'edge';
