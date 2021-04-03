const models = require('./models')

const bookArray = []
class Book {
    constructor(title,author,release_date,image){
        this.title = title,
        this.author = author,
        this.release_date = release_date,
        this.image = image
        bookArray.push(this)
    }
}

new Book("The Great Gatsby", "F Scott Fitzgerald", "April 10, 1925","https://s3-us-west-2.amazonaws.com/sandboxapi/great_gatsby.jpg");
new Book("Les Miserables","Victor Hugo","Unknown 1862","https://s3-us-west-2.amazonaws.com/sandboxapi/les_miserables.jpg");
new Book( "Around the World in 80 Days", "Jules Verne", "January 30, 1873", "https://s3-us-west-2.amazonaws.com/sandboxapi/around_the_world_in_80_days.jpg");
new Book("The Four Hour Workweek","Tim Ferriss", "April 1, 2007", "https://s3-us-west-2.amazonaws.com/sandboxapi/four_hour_work_week.jpg");
new Book( "Of Mice and Men", "John Steinbeck", "Unknown 1937", "https://s3-us-west-2.amazonaws.com/sandboxapi/of_mice_and_men.jpg");
new Book("Romeo and Juliet","William Shakespeare","Unknown 1597","https://s3-us-west-2.amazonaws.com/sandboxapi/romeo_and_juliet.jpg")


bookArray.forEach(function(s){
    models.book.create(s)
})