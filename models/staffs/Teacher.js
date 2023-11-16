const mongoose = require('mongoose');
const teacherSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
		dateEmployed: {
			type: Date,
			Default: Date.now,
		},
		teacherId: {
			type: String,
			required: true,
			default: function () {
				return (
					'TEA' +
					Math.floor(100 + Math.random() * 900) +
					Date.now().toString().slice(2, 4) +
					this.name
						.split('')
						.map((name) => name[0])
						.join('')
						.toUpperCase()
				);
			},
		},
		//If witdrawn, the teacher will not be able to login
		isWithdrawn: {
			type: Boolean,
			default: false,
		},
		//If suspended, the teacher can login but cannot perform any task
		isSuspended: {
			type: Boolean,
			default: false,
		},
		role: {
			type: String,
			default: 'teacher',
		},
		subject: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Suject',
			required: true,
		},
		applicationStatus: {
			type: String,
			enum: ['pending', 'approved', 'rejected'],
			default: 'pending',
		},
		program: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'program',
			required: true,
		},
		//A teacher can teach in more than one class level
		classLevel: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'ClassLevel',
			required: true,
		},
		academicYear: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'AcademicYear',
			required: true,
		},
		examCreated: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Exam',
			},
		],
		createdBy: {
			type: Schema.Types.ObjectId,
			ref: 'Admin',
			required: true,
		},
		academicTerm: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'AcademicTerm',
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

//model
const Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = Teacher;
