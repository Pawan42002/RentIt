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

const sendEmailVerification = async (email, Model) => {
	let code = Math.floor(1000 + Math.random() * 9000); // random code generation
	code = "" + code;
	let mailOptions = {
		from: "pawanvanced@gmail.com",
		to: email,
		subject: "OTP",
		text: "OTP to verify your email is " + code,
	};
	transporter.sendMail(mailOptions, async (error, info) => {
		if (error) {
			return error;
		} else {
			try {
				await Model.findOneAndDelete({ email: email });
				await Model.create({
					email: email,
					code: code,
				});
			} catch (e) {
				return e;
			}
			return info;
		}
	});
};

module.exports = sendEmailVerification;
