const express = require('express');
const {globalErrHandler, notFoundErr} = require("../middleware/globalErrHandler");
const morgan = require('morgan');
const bcrypt = require('bcryptjs');
const adminRouter = require('../routes/staffs/adminRouter');
const app = express();

//Middlewares
app.use(morgan('dev'));
app.use(express.json()); //pass incoming json date

// app.use((req, res, next) => {
//     console.log(`${req.method} ${req.originalUrl}`);
//     next();
// });

// let user = {
//     name: "John Doe",
//     isAdmin: false,
//     isLogin: true,
// };

// const isLogin = (req, res, next) => {
//     if(user.isLogin){
//         next();
//     } else {
//         res.status(401).json({
//             msg: "Unauthorised"
//         });
//     }
// };

// const isAdmin = (req, res, next) => {
//     if(user.isAdmin){
//         next();
//     } else {
//         res.status(401).json({
//             msg: "Unauthorised not the admin"
//         });
//     }
// };

// app.use(isLogin, isAdmin);

//Routes

//admin register
app.use('/api/v1/admins', adminRouter);

//Error middlewares
app.use(notFoundErr);
app.use(globalErrHandler);



module.exports = app;
