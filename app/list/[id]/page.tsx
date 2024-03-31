import Image from 'next/image';

import { GetBooks } from '@/types/api';
import { ListParams } from '@/types/params';
import { BASE_URL } from '@/app/constants';
import PageTitle from '@/components/pageTitle';
import LinkButton from '@/components/linkButton';

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
			<article>
				{books.results.books.map((book) => (
					<dl key={book.primary_isbn13}>
						<dt>
							<Image
								src={book.book_image}
								alt={book.title}
								width={book.book_image_width}
								height={book.book_image_height}
							/>
						</dt>
						<dd>
							<h4>{book.title}</h4>
							<p>{book.author}</p>
							<LinkButton path={book.amazon_product_url} name='Buy Now' />
						</dd>
					</dl>
				))}
			</article>
		</>
	);
}
