import Image from 'next/image';
import Link from 'next/link';
import { GetBooks } from '@/types/api';
import { Params } from '@/types/params';
import { BASE_URL } from '@/app/constants';

async function getBooks(id: string) {
	const url = `${BASE_URL}/list?name=${id}`;

	const response = await fetch(url);
	const data = await response.json();
	return data as GetBooks;
}

export async function generateMetadata({ params: { id } }: Params) {
	const books = await getBooks(id);

	return {
		title: books.results.display_name,
	};
}

export default async function Page({ params: { id } }: Params) {
	const books = await getBooks(id);

	return (
		<main>
			<h1>{books.results.display_name}</h1>
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
							<Link href={book.amazon_product_url}>Buy Now</Link>
						</dd>
					</dl>
				))}
			</article>
		</main>
	);
}
