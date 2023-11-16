const mongoose = require('mongoose');

const { Schema } = mongoose;

const subjectSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		description: {
			type: String,
		},
		teacher: {
			type: Schema.Types.ObjectId,
			ref: 'Teacher',
		},
		academicTerm: {
			type: Schema.Types.ObjectId,
			ref: 'AcademicTerm',
			required: true,
		},
		createdBy: {
			type: Schema.Type.ObjectId,
			ref: 'AcademicTerm',
			required: true,
		},
		duration: {
			type: String,
			required: true,
			default: '3 months',
		},
	},
	{ timestamps: true }
);

const Subjects = mongoose.model('Subject', subjectSchema);

module.exports = Subjects;
