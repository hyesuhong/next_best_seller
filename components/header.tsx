'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const router = [
	{ path: '/', name: 'Home' },
	{ path: '/about', name: 'About' },
];

export default function Header() {
	const pathname = usePathname();

	return (
		<header className='sticky top-0 w-full bg-[#FDFCF7]/80 backdrop-blur-lg z-10'>
			<nav className='max-w-4xl mx-auto px-5 py-3'>
				<ul className='flex gap-8 text-lg'>
					{router.map((route, index) => (
						<li key={index} className='hover:opacity-60'>
							<Link
								href={route.path}
								className={pathname === route.path ? 'underline' : ''}
							>
								{route.name}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}
