import Image from 'next/image';
import { BookItemProps } from '@/types/params';
import LinkButton from './linkButton';

export default function BookItem({ book }: BookItemProps) {
	const {
		title,
		author,
		book_image,
		book_image_width,
		book_image_height,
		amazon_product_url,
	} = book;

	return (
		<dl className='p-4 border border-[#272935] border-opacity-35'>
			<dt className='aspect-w-3 aspect-h-4 mb-4'>
				<Image
					src={book_image}
					alt={title}
					width={book_image_width}
					height={book_image_height}
					className='object-contain'
				/>
			</dt>
			<dd>
				<h4 className='font-bold text-lg text-ellipsis whitespace-nowrap overflow-hidden'>
					{title}
				</h4>
				<p className='mb-4 overflow-hidden whitespace-nowrap text-ellipsis'>
					{author}
				</p>
				<LinkButton path={amazon_product_url} name='Buy Now' target='_blank' />
			</dd>
		</dl>
	);
}
