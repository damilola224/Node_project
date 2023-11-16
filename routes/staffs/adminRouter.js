const express = require('express');
const app = require('../../app/app');
const {
	registerAdmCtrl,
	adminPublishedResultCtrl,
	adminSuspendTeacherCtrl,
	adminUnpublishedResultCtrl,
	adminUnsuspendTeacherCtrl,
	adminUnwithdrawTeacherCtrl,
	adminWithdrawTeacherCtrl,
	deleteAdminCtrl,
	updateAdminCtrl,
	getAdminsCtrl,
	getAdminCtrl,
	loginAdminCtrl,
} = require('../../controller/staffs/adminCtrl');
const isLogin = require("../../middleware/isLogin");
const adminRouter = express.Router();

//Register
adminRouter.post('/register', registerAdmCtrl);

//login
adminRouter.post('/login', loginAdminCtrl);

//Get all admin
adminRouter.get('/', getAdminsCtrl);

//Singles
adminRouter.get('/:id', isLogin, getAdminCtrl);

//Update Admin
adminRouter.put('/:id', updateAdminCtrl);

//Delete Admin
adminRouter.delete('/:id', deleteAdminCtrl);

//suspend Teacher
adminRouter.put('/suspend/teacher/:id', adminSuspendTeacherCtrl);

//Unsuspend Teacher
adminRouter.put('/unsuspend/teacher/:id', adminUnsuspendTeacherCtrl);

//witdraw Teacher
adminRouter.put('/withdraw/teacher/:id', adminWithdrawTeacherCtrl);

//Unwithdraw Teacher
adminRouter.put('/unwithdraw/teacher/:id', adminUnwithdrawTeacherCtrl);

//Publish exam result
adminRouter.put('/published/exam/:id', adminPublishedResultCtrl);

//Unpublished exam result
adminRouter.put('/unpublished/exam/:id', adminUnpublishedResultCtrl);


module.exports = adminRouter;
