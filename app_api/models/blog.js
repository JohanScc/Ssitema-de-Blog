var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	email:{
		type: String,
		required: true
	},
	password:{
		type: String,
		required: true
	},
	token: String,
	createdOn: {type: Date, default: Date.now}
});

var userPublicSchema = new mongoose.Schema({
	name: String,
});

var userPublicacionSchema = new mongoose.Schema({
	name: String,
	publicacion : String
});

var commentSchema = new mongoose.Schema({
	user: {
		type: userPublicSchema,
		required: true
	},
	comment: String,
	createdOn: {type: Date, default: Date.now}
});
mongoose.model('User', userSchema);
mongoose.model('Comment', commentSchema);
mongoose.model('Publicar', userPublicacionSchema);