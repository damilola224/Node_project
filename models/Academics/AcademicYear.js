const mongoose = require('mongoose');

const academicYearSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		fromYear: {
			type: Date,
			required: true,
		},
		toYear: {
			type: Date,
			required: true,
		},
		isCurrent: {
			type: Boolean,
			default: false,
		},
		createdBy: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Admin',
			required: true,
		},
		student: [
			{
				type: mongoose.Schema.Type.ObjectId,
				ref: 'Student',
			},
		],
		teachers: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Teacher',
			},
		],
		//Finance
		//Librarian
		//.....
	},
	{
		timestamps: true,
	}
);

//Model
const AcademicYear = mongoose.model('AcademicYear', academicyearSchema);

module.exports = AcademicYear;
