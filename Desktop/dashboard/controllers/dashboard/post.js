const moment = require('moment')
const { post } = require('.')
const posts = [
    {id: 1, title: 'Lorem Ipsum', body: 'Dolor sit amet', createdAt: Date()},
    {id: 2, title: 'Lorem Ipsum', body: 'Dolor sit amet', createdAt: Date()}
]

module.exports = {
    index : (req, res) => {
        const locals = {
            data: {
                posts: posts.map(i => {
                    i.fromNow = moment(i.createdAt).fromNow()
                    return i
                }),
            }, 
             contentName: 'Post'

            }
            res.render('pages/dashboard/post', locals)
        }
    }