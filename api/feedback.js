import nodemailer from "nodemailer";
import cors from "cors";

const corsMiddleware = cors({
  origin: [
    "http://localhost:4173",
    "http://localhost:5173",
    "https://meditec-landing.vercel.app",
  ],
});

export default async function handler(req, res) {
  corsMiddleware(req, res, async () => {
    if (req.method === "POST") {
      const {
        name,
        email,
        phone,
        captcha,
        productId,
        productTitle,
        productVolume,
        productPrice,
      } = req.body;

      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: process.env.VITE_APP_USER,
          pass: process.env.VITE_APP_PASS,
        },
        tls: {
          rejectUnauthorized: false,
        },
      });

      const mailOptions = {
        from: `${email}`,
        to: "89o.kh89@gmail.com",
        subject: `Повідомлення від ${name}`,
        text: `
        Повідомлення від ${name}, тел: ${phone}, email: ${email} 
        Код перевірки: ${captcha}. 
        Замовлення товару:
          id - ${productId}, 
          назва - ${productTitle}, 
          об'єм -  ${productVolume}, 
          ціна - ${productPrice}грн`,
      };

      try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "Лист успішно відправлено!" });
      } catch (error) {
        res.status(500).send("Помилка відправки листа.");
      }
    } else {
      res.status(405).send("Метод не дозволено.");
    }
  });
}
