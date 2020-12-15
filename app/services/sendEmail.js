const nodemailer = require("nodemailer");
require('dotenv').config();

const sendEmail = async (newUser, rand, email) => {
    console.log("email " + email);
    // Link creation sent to user by email. This link corresponds to the route to validate new user
    const port = process.env.PORT || 5555;
    const host = process.env.HOST || "localhost";
    let link=`http://${host}:${port}/v1/users/user/validation/${newUser.id}&${rand}`;
    // Send email validation to validate user owns email box
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PWD
        }
        // logger: true,
        //debug: true,
    });
    // verify connection configuration - not mandatory
    transporter.verify(function(error, success) {
        if (error) {
        console.log(error);
        } else {
        console.log("Server is ready to take our messages");
        }
    });
    let mailOptions = {
        from: '"test Nodemailer" <renautech.fr@gmail.com>',
        to: email,
        subject: "Test avec code",
        html: "Hello,<br> Please Click on the link to verify your email.<br><a href="+link+">Click here to verify</a>",
    };
    let info = transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
        }else{
            console.log("Message sent: " + info.messageId);
        }
    });

};

module.exports = sendEmail;