// set up our mongoose schema class
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// make our Article schema
var SavedSchema = new Schema({
	headline: {
		type: String,
		required: true,
		unique: true
	},
	pub_date: {
		type: String,
		required:true
	},
	web_url: {
		type: String,
		required: true,
		unique:true
	},
},{
	timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

var Saved = mongoose.model('Saved', SavedSchema);
module.exports = Saved;
