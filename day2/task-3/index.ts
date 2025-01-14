type Book = {
    title: string;
    year: number;
    author: string;
    preview: string;
    url: string;
};

const sourced = {
    title: "Harry Potter",
    year: 1997,
    author: "J.K. Rowling",
};

const createBook = (title: string, year: number, author: string): Book => {
    return{
        title: title,
        year: year,
        author: author,
        preview: `Название: $[title], Автор $[author],Год $[year]`,
        url: `www.someurl.com/preview?title=$[encodeURIComponent(title)]&year=$[year]&author=$[encodeURIComponent(author)]`,
    };
};

const targetd = createBook(sourced.title, sourced.year, sourced.author);

console.log(targetd)