const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

function sendSMS(Email, otp) {
    function getRandomDigit() {
        return Math.floor(Math.random() * 10).toString();
    }

    function getRandomLetter() {
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        return letters[Math.floor(Math.random() * letters.length)];
    }

    function generateRandomString() {
        let result = '';

        // Generate 2 random digits
        for (let i = 0; i < 2; i++) {
            result += getRandomDigit();
        }

        // Generate 3 random letters
        for (let i = 0; i < 3; i++) {
            result += getRandomLetter();
        }

        // Generate 5 random digits
        for (let i = 0; i < 5; i++) {
            result += getRandomDigit();
        }

        return result;
    }

    const reg = generateRandomString();

    let transporter = nodemailer.createTransport({
        name: "smtp.mail.com",
        service: "gmail",
        auth: {
            user: process.env.NODE_MAILER_USER,
            pass: process.env.NODE_MAILER_PASS,
        },
        tls: {
            rejectUnauthorized: false,
        },
    });

    let mailOptions = {
        from: process.env.USERNAME,
        to: Email,
        subject: "Account Registration",
        html: `    <table style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
        <tr>
            <td style="text-align: center;">
                <h1 style="color: #333333;">Account Verification</h1>
            </td>
        </tr>
        <tr>
            <td style="padding: 20px 0;">
                <p style="color: #555555; line-height: 1.5; font-size: 16px;">
                    Dear User,
                </p>
                <p style="color: #555555; line-height: 1.5; font-size: 16px;">
                    Please keep your OTP confidential and do not share it with anyone. The OTP will be valid for five minutes only.
                </p>
                <p style="text-align: center; font-size: 24px; font-weight: bold; color: #333333; background-color: #f8f8f8; padding: 10px; border-radius: 4px; margin: 20px 0;">
                    OTP: ${otp}
                </p>
                <p style="color: #555555; line-height: 1.5; font-size: 16px;">
                    Registration Number: <strong style="color: #333333;">${reg}</strong>
                </p>
            </td>
        </tr>
        <tr>
            <td style="padding: 20px 0;">
                <p style="color: #555555; line-height: 1.5; font-size: 16px;">
                    Thank you for choosing to sign up with us! We are excited to have you on board.
                </p>
                <p style="color: #777777; font-size: 14px; font-style: italic; text-align: center; margin-top: 30px;">
                    One Small Step can Make a Drastic Impact!
                </p>
                <p style="color: #555555; line-height: 1.5; font-size: 16px; margin-top: 20px;">
                    Best regards,<br>
                    Event Management Team- CharitySphere
                </p>
            </td>
        </tr>
    </table>`,
    };

    transporter.sendMail(mailOptions, function (err, success) {
        if (err) {
            console.log(err);
        } else {
            console.log("Email sent successfully");
        }
    });
}

function sendTicket(Details) {
    let transporter = nodemailer.createTransport({
        name: "smtp.mail.com",
        service: "gmail",
        auth: {
            user: process.env.NODE_MAILER_USER,
            pass: process.env.NODE_MAILER_PASS,
        },
        tls: {
            rejectUnauthorized: false,
        },
    });

    let mailOptions = {
        from: process.env.NODE_MAILER_USER,
        to: Details.email,
        subject: `Your Event Pass for ${Details.event_name}`,
        html: `Dear <i>${Details.name}</i>,<br><br>Thank you for registering for ${Details.event_name}! We are excited to have you join us and want to make sure that you have all the information you need to have a great time.<br><br>Your online pass has been generated and is ready for you to use. Please remember to keep this pass with you at all times during the event and do not share it with anyone else.<br><br><strong>Pass Number: ${Details.pass}</strong><br><br>Here are the details of your registration:<br>Name: ${Details.name}<br>Amount Paid: ${Details.price}<br>Address: ${Details.address1} <br> City: ${Details.city} <br> PinCode: ${Details.zip}<br><br>If you have any questions or concerns, please don't hesitate to reach out to us. We're here to help!`,
    };

    transporter.sendMail(mailOptions, function (err, success) {
        if (err) {
            console.log(err);
        } else {
            console.log("Email sent successfully");
        }
    });
}

module.exports = {
    sendSMS,
    sendTicket,
};
