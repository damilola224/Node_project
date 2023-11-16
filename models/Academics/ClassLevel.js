const mongoose = require('mongoose');

const { Schema } = mongoose;

const classLevelSchema = new Schema(
	//level 100-400
	{
		name: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		createdBy: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Admin',
			required: true,
		},
		//Student will be added to the class level when they are registered
		student: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Student',
			},
		],
		//Optional.
		subjects: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Subject',
			},
		],
		teachers: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Teacher',
			},
		],
	},
	{ timestamps: true }
);

const ClassLevel = mongoose.model('ClassLevel', classLevelSchema);

module.exports = ClassLevel;
