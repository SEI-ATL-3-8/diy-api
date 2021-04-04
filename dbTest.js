const models = require('./models')

models.book.create({
  title: 'To Kill a Mockingbird',
  author: 'Harper Lee',
  release_date: 'July 11, 1960',
  image: 'https://s3-us-west-2.amazonaws.com/sandboxapi/to_kill_a_mockingbird.jpg'
})
models.book.create({
    title: 'The Great Gatsby',
    author: 'F Scott Fitzgerald',
    release_date: 'April 10, 1925',
    image: 'https://s3-us-west-2.amazonaws.com/sandboxapi/great_gatsby.jpg'
})
models.book.create({
    title: 'Les Miserables',
    author: 'Victor Hugo',
    release_date: 'Unknown 1862',
    image: 'https://s3-us-west-2.amazonaws.com/sandboxapi/les_miserables.jpg'
})
models.book.create({
    title: 'Around the World in 80 Days',
    author: 'Jules Verne',
    release_date: 'January 30, 1873',
    image: 'https://s3-us-west-2.amazonaws.com/sandboxapi/around_the_world_in_80_days.jpg'
})
models.book.create({
    title: 'Lean In',
    author: 'Sheryl Sandberg',
    release_date: 'March 11, 2013',
    image: 'https://s3-us-west-2.amazonaws.com/sandboxapi/lean_in.jpg'
})
models.book.create({
    title: 'The Four Hour Workweek',
    author: 'Tim Ferriss',
    release_date: 'April 1, 2007',
    image: 'https://s3-us-west-2.amazonaws.com/sandboxapi/four_hour_work_week.jpg'
})
models.book.create({
    title: 'Of Mice and Men',
    author: 'John Steinbeck',
    release_date: 'Unknown 1937',
    image: 'https://s3-us-west-2.amazonaws.com/sandboxapi/of_mice_and_men.jpg'
})
models.book.create({
    title: 'Romeo and Juliet',
    author: 'William Shakespeare',
    release_date: 'Unknown 1597',
    image: 'https://s3-us-west-2.amazonaws.com/sandboxapi/romeo_and_juliet.jpg'
})