const AsyncHandler = require("express-async-handler");
const Admin = require('../../models/staffs/Admin');
const generateToken = require("../../utils/generateToken");
const verifyToken = require("../../utils/verifyToken");
//@description Register admin
//@route POST /api/admins/register
//@acess Private
exports.registerAdmCtrl = ( async (req, res) => {
	const { name, email, password } = req.body;
	// try {
		//const if email exists
		const adminFound = await Admin.findOne({ email });
		if (adminFound) {
			res.json({message: 'Admin Exists'});
		}
		//register
		const user = await Admin.create({
			name,
			email,
			password,
		});
		res.status(201).json({
			status: 'success',
			data: "Admin has been registered",
		});
	// } catch (error) {
	// 	res.json({
	// 		status: 'failed',
	// 		error: error.message,
	// 	});
	// }
}
);
//@description Register admin
//@route POST /api/admins/login
//@acess Private
exports.loginAdminCtrl = AsyncHandler(async (req, res) => {
	const { email, password } = req.body;
		//find user
		const user = await Admin.findOne({ email });
		if (!user) {
			return res.json({message: "User has been login"})
		}
		if(user && (await user.verifyPassword(password))) {
			const token = generateToken(user._id)
			if(token){
				const verify = verifyToken(token)
				console.log(verify);
			}
			//req.userAuth = user;
			return res.json({ data: generateToken(user._id, user,verify) });
		} else{
			return res.json({ message: "Invalid login credentials"})
		};
});
//@description Get all admin
//@route GET /api/admins
//@acess Private
exports.getAdminsCtrl = (req, res) => {
	try {
		res.status(201).json({
			status: 'success',
			data: 'All admins',
		});
	} catch (error) {
		res.json({
			status: 'failed',
			error: error.message,
		});
	}
};

//@description Get single admin
//@route GET /api/admins
//@acess Private
exports.getAdminCtrl = (req, res) => {
	try {
		res.status(201).json({
			status: 'success',
			data: 'single admins',
		});
	} catch (error) {
		res.json({
			status: 'failed',
			error: error.message,
		});
	}
};
//@description  Update admin
//@route PUT /api/admins
//@acess Private
exports.updateAdminCtrl = (req, res) => {
	try {
		res.status(201).json({
			status: 'success',
			data: 'Update admins',
		});
	} catch (error) {
		res.json({
			status: 'failed',
			error: error.message,
		});
	}
};
//@description  Delete admin
//@route Delete /api/admins
//@acess Private
exports.deleteAdminCtrl = (req, res) => {
	try {
		res.status(201).json({
			status: 'success',
			data: 'Delete admins',
		});
	} catch (error) {
		res.json({
			status: 'failed',
			error: error.message,
		});
	}
};
//@description admin suspends a teacher
//@route PUT /api/admins/suspend/teacher/:id
//@acess Private
exports.adminSuspendTeacherCtrl = (req, res) => {
	try {
		res.status(201).json({
			status: 'success',
			data: 'Admin Suspend teacher',
		});
	} catch (error) {
		res.json({
			status: 'failed',
			error: error.message,
		});
	}
};
//@description admin unsuspends a teacher
//@route PUT /api/admins/unsuspend/teacher/:id
//@acess Private
exports.adminUnsuspendTeacherCtrl = (req, res) => {
	try {
		res.status(201).json({
			status: 'success',
			data: 'Admin Unsuspend teacher',
		});
	} catch (error) {
		res.json({
			status: 'failed',
			error: error.message,
		});
	}
};
//@description admin withdraw a teacher
//@route PUT /api/admins/withdraw/teacher/:id
//@acess Private
exports.adminWithdrawTeacherCtrl = (req, res) => {
	try {
		res.status(201).json({
			status: 'success',
			data: 'Admin Withdraw teacher',
		});
	} catch (error) {
		res.json({
			status: 'failed',
			error: error.message,
		});
	}
};
//@description admin unwithdraw a teacher
//@route PUT /api/admins/unwithdraw/teacher/:id
//@acess Private
exports.adminUnwithdrawTeacherCtrl = (req, res) => {
	try {
		res.status(201).json({
			status: 'success',
			data: 'Admin Unwithdraw teacher',
		});
	} catch (error) {
		res.json({
			status: 'failed',
			error: error.message,
		});
	}
};
//@description admin Publish exam result
//@route PUT /api/admins/published/results/:id
//@acess Private
exports.adminPublishedResultCtrl = (req, res) => {
	try {
		res.status(201).json({
			status: 'success',
			data: 'Admin Publish exams',
		});
	} catch (error) {
		res.json({
			status: 'failed',
			error: error.message,
		});
	}
};
//@description admin Unpublish exam result
//@route PUT /api/admins/unpublished/results/:id
//@acess Private
exports.adminUnpublishedResultCtrl = (req, res) => {
	try {
		res.status(201).json({
			status: 'success',
			data: 'Admin Unpublish exams',
		});
	} catch (error) {
		res.json({
			status: 'failed',
			error: error.message,
		});
	}
};
