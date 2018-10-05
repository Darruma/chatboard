var mongoose = require('mongoose');
const db = mongoose.createConnection('mongodb://localhost/users');

var PostSchema = new mongoose.Schema({
	author: {
		type: String,
		default: ""
	},
	content: {
		type: String,
		default: ""
	},
	type :
	{
	 	type:String,
		default:"root"
	},
	score: {
		type: Number,
		default: 0
	},
	upvotes: {
		type: Array,
		default: []
	},
	downvotes: {
		type: Array,
		default: []
	},
	page: {
		type: String,
		default: ""
	},
	timestamp:
	{
		type:Date,
		default:Date.now()
	},
	children:[PostSchema]
	
});




module.exports = db.model("Post", PostSchema, "Posts");
