var express = require('express');
var router = express.Router();

var ctrlUsers = require('../controllers/users');
var ctrlPosts = require('../controllers/posts');
//var ctrlComments = require('../controllers/comments');



/*
*Hook post
*/
router.get('/post', ctrlPosts.postList);
router.get('/post/:postid', ctrlPosts.postById);
router.post('/post', ctrlPosts.addPost);
router.delete('/post', ctrlPosts.deletePost);

/*
* Hook users
*/

router.get('/users', ctrlUsers.userList);
router.get('/users/:userid', ctrlUsers.userById);
router.post('/users', ctrlUsers.addUser);

module.exports = router