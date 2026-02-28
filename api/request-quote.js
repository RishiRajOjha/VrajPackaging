import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { fullName, company, country, product, quantity, requirements } = req.body;

  if (!fullName || !product) {
    return res.status(400).json({ message: "Required fields missing" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Website Quote Request" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "New Quote Request from Website",
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Company:</strong> ${company || "N/A"}</p>
        <p><strong>Country:</strong> ${country || "N/A"}</p>
        <p><strong>Product:</strong> ${product}</p>
        <p><strong>Quantity:</strong> ${quantity || "N/A"}</p>
        <p><strong>Additional Requirements:</strong></p>
        <p>${requirements || "N/A"}</p>
      `,
    });

    return res.status(200).json({ success: true });

  } catch (error) {
    console.error("Quote Email Error:", error);
    return res.status(500).json({ success: false });
  }
};