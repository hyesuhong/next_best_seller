import { LinkButtonProps } from '@/types/params';
import Link from 'next/link';

export default function LinkButton({ path, name }: LinkButtonProps) {
	return (
		<Link
			href={path}
			className='inline-block px-3 py-1 border border-[#272935] border-opacity-35 hover:bg-[#FDFCF7] transition-colors'
		>
			{name}
		</Link>
	);
}
