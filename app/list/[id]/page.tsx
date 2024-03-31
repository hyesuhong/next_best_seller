import { GetBooks } from '@/types/api';
import { ListParams } from '@/types/params';
import { BASE_URL } from '@/app/constants';
import PageTitle from '@/components/pageTitle';
import BookItem from '@/components/bookItem';

async function getBooks(id: string) {
	const url = `${BASE_URL}/list?name=${id}`;

	const response = await fetch(url);
	const data = await response.json();
	return data as GetBooks;
}

export async function generateMetadata({ params: { id } }: ListParams) {
	const books = await getBooks(id);

	return {
		title: books.results.display_name,
	};
}

export default async function Page({ params: { id } }: ListParams) {
	const books = await getBooks(id);

	return (
		<>
			<PageTitle>{books.results.display_name}</PageTitle>
			<article className='grid grid-cols-4 gap-6 max-lg:grid-cols-3 max-sm:grid-cols-2'>
				{books.results.books.map((book) => (
					<BookItem book={book} key={book.primary_isbn13} />
				))}
			</article>
		</>
	);
}
