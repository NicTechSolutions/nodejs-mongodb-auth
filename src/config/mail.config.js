const nodemailer = require("nodemailer");
const config = require("../../config.json").email;

function emailTransporter() {
    return createGmailTransport();
};

function createGmailTransport() {
    return nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: config.user,
            pass: config.pass
        }
    });
}

function createEtherealTransport() {
    return nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        auth: {
            user: "vlwc7zedyyrqexwf@ethereal.email",
            pass: "TadjRuZJY4KDrZ7nRY"
        }
    });
}

module.exports = emailTransporter;