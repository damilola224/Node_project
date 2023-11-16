const examSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		subject: {
			type: Schema.Types.ObjectId,
			ref: 'Subject',
			required: true,
		},
		program: {
			type: Schema.Types.ObjectId,
			ref: 'Program',
			required: true,
		},
		passMark: {
			type: Number,
			required: true,
			default: 50,
		},
		totalMark: {
			type: Number,
			required: true,
			default: 100,
		},
		academicTerm: {
			type: Schema.Types.ObjectId,
			ref: 'AcademicTerm',
			required: true,
		},
		duration: {
			type: Number,
			required: true,
			default: '30 minutes',
		},
		examTime: {
			type: String,
			required: true,
		},
		examType: {
			type: String,
			required: true,
			default: 'Quiz',
		},
		examStatus: {
			type: String,
			required: true,
			default: 'Pending',
			enum: ['pending', 'approved'],
		},
		questions: [
			{
				type: Schema.Types.Object,
				ref: 'Question',
			},
		],
		classLevel: {
			type: Schema.Types.ObjectId,
			ref: 'ClassLevel',
			required: true,
		},
	},
	{ timestamps: true }
);
const Exam = mongoose.model('Exam', examSchema);

module.exports = Exam;
