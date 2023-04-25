// import { render } from "@react-email/render";
// import nodemailer from "nodemailer";
// import { ResponseMail } from "../emails/response";

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   host: "smtp.gmail.com",
//   port: 465,
//   secure: false,
//   auth: {
//     user: process.env.GMAIL_USERNAME,
//     pass: process.env.GMAIL_PASSWORD,
//   },
// });

// export const mailerSender = async (name, email, phone, code) => {
//   const emailHtml = render(
//     <ResponseMail name={name} email={email} phone={phone} code={code} />
//   );

//   const emailSubject = "Thank you for signing up";

//   const options = {
//     subject: emailSubject,
//     to: `${name}<${email}>`,
//     from: "Olakved Team",
//     html: emailHtml,
//   };

//   await transporter.sendMail(options);
// };
