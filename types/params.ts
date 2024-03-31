import React from 'react';
import { Book } from './api';

export type ListParams = {
	params: {
		id: string;
	};
};

export type LinkButtonProps = {
	path: string;
	name: string;
	target?: React.HTMLAttributeAnchorTarget;
};

export type BookItemProps = {
	book: Book;
};
