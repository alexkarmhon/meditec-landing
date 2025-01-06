import express from "express";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Використання CORS
app.use(
  cors({
    origin: ["http://localhost:4173", "http://localhost:5173"], // URL вашого клієнтського додатка
  })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Сервер працює. Ви перебуваєте на кореневій сторінці.");
});

app.post("/api/feedback", async (req, res) => {
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
    host: "smtp.gmail.com", // Вказуємо SMTP-сервер Gmail
    port: 465, // Порт для захищеного з'єднання (SSL/TLS)
    secure: true, // true для порту 465, false для інших
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
    res.status(500).json({ error: "Помилка відправки листа." });
  }
});

app.listen(3000, () => console.log("Сервер запущено на http://localhost:3000"));
