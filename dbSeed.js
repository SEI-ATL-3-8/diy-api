const {book} = require('./models')

book.create({
    title: "The Catcher and the Rye",
    author: 'J.D. Salinger',
    release_date: '1951',
    image: 'https://orion-uploads.openroadmedia.com/sm_2f32b6-catcher-in-the-rye-red.jpg'
})

book.create({
    title: 'Anne of Green Gables',
    author: 'L.M. Montgomery',
    release_date: "1908",
    image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1615094578l/8127._SY475_.jpg'
})

book.create({
    title: 'Gone with the Wind',
    author: 'Margaret Mitchell',
    release_date: '1936',
    image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1551144577l/18405._SY475_.jpg'
})