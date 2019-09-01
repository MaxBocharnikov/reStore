export default class BookstoreService {
     books = [
        {
            id: 1,
            title: 'Production-Ready',
            author: 'Susan S',
            price: 32,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg'
        },
        {
            id: 2,
            title: 'Release it',
            author: 'Michael T',
            price: 45,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/419zAwJJH4L._SX415_BO1,204,203,200_.jpg'
        }
    ];
    getBooks = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.95) {
                    reject(new Error('Something went wrong'));
                } else {
                    resolve(this.books);
                }
            }, 700)
        });
    }
}