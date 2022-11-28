export interface BooksModel {
	books: BookModel[];
}

export interface BookModel {
	error: string;
	title: string;
	subtitle: string;
	authors: string;
	publisher: string;
	isbn10: string;
	isbn13: string;
	year: string;
	rating: string;
	desc: string;
	price: string;
	image: string;
	url: string;
}
