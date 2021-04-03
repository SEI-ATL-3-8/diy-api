const { book } = require('./models')

book.create({
    title: 'Don Quixote',
    author: 'Miguel de Cervantes',
    release_date: '1923',
    image: 'https://book-assets.openroadmedia.com/9781504044486-book-cover.jpg'
})
book.create({
    title: 'Lord of the Rings',
    author: 'J.R.R. Tolkien',
    release_date: '2001',
    image: 'https://orion-uploads.openroadmedia.com/sm_f7e651-tolkien-lordoftherings.jpg'
})
book.create({
    title: 'Pinocchio',
    author: 'Carlo Collodi',
    release_date: '1883',
    image: 'https://book-assets.openroadmedia.com/9781497679276-book-cover.jpg'
})