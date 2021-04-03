const { book } = require('./models')

book.create({
    title: 'Harry Potter',
    author:'J.K. Rowling',
    release_date: '2007',
    image: 'https://www.goodreads.com/book/show/136251.Harry_Potter_and_the_Deathly_Hallows'

})


book.create({
    title: 'The Kite Runner',
    author:'Khaled Hosseini',
    release_date: '2004',
    image: 'https://www.goodreads.com/book/show/77203.The_Kite_Runner'

})

book.create({
    title: 'The Help',
    author:'Kathryn Stockett',
    release_date: '2009',
    image: 'https://www.goodreads.com/book/show/4667024-the-help'

})
