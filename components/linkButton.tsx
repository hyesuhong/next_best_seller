import { LinkButtonProps } from '@/types/params';
import Link from 'next/link';

export default function LinkButton({ path, name, target }: LinkButtonProps) {
	return (
		<Link
			href={path}
			target={target}
			className='inline-block px-3 py-1 border border-[#272935] border-opacity-35 hover:bg-[#FDFCF7] transition-colors'
		>
			{name}
		</Link>
	);
}
