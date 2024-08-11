const nodemailer = require("nodemailer");

// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
	service: "gmail",
	host: "smtp.gmail.com",
	port: 587,
	secure: false,
	auth: {
		user: "pawanvanced@gmail.com",
		pass: "njcggldffzkscpsu",
	},
});

const sendEmailVerification = async (emailID, Model) => {
	let code = Math.floor(1000 + Math.random() * 9000); // random code generation
	code = "" + code;
	let mailOptions = {
		from: "pawanvanced@gmail.com",
		to: emailID,
		subject: "OTP",
		text: "OTP to verify your email is " + code,
	};
	transporter.sendMail(mailOptions, async (error, info) => {
		if (error) {
			return error;
		} else {
			let check = await Model.create({
				email: emailID,
				code: code,
			}); // we have to remove if we find anything with the same email id
			return info;
		}
	});
};

module.exports = sendEmailVerification;
