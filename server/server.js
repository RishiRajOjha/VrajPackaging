import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Create transporter ONCE
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/send-inquiry", async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    await transporter.sendMail({
      from: `"Website Inquiry" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,   // ✅ Sends to Vraj mail
      subject: "New Inquiry from Website",
      html: `
        <h3>New Inquiry</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error sending inquiry:", error);
    res.status(500).json({ success: false });
  }
});

app.post("/request-quote", async (req, res) => {
  const { fullName, company, country, product, quantity, requirements } = req.body;

  try {
    await transporter.sendMail({
      from: `"Website Quote" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,   // ✅ Sends to Vraj mail
      subject: "New Quote Request",
      html: `
        <h3>New Quote Request</h3>
        <p><b>Name:</b> ${fullName}</p>
        <p><b>Company:</b> ${company}</p>
        <p><b>Country:</b> ${country}</p>
        <p><b>Product:</b> ${product}</p>
        <p><b>Quantity:</b> ${quantity}</p>
        <p><b>Requirements:</b> ${requirements}</p>
      `,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error sending quote:", error);
    res.status(500).json({ success: false });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
  console.log("Sending emails from:", process.env.EMAIL_USER);
});