const mongoose = require('mongoose');
const teachersSchema = mongoose.Schema({
	firstname: { type: String, required: true },
	lastname: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	phone: { type: Number, required: true },
	cct: { type: Number, required: true },
	account: { type: String, required: true },
});

module.exports = mongoose.model('Teachers', teachersSchema);
