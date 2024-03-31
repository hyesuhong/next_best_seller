import { PropsWithChildren } from 'react';

export default function PageTitle({ children }: PropsWithChildren) {
	return <h1 className='text-center text-4xl font-bold mb-8'>{children}</h1>;
}
