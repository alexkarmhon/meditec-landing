import express from 'express';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(
  cors({
    origin: [
      'http://localhost:4173',
      'http://localhost:5173',
      'https://meditec-landing.vercel.app',
    ],
  })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Сервер працює. Ви перебуваєте на кореневій сторінці.');
});

app.post('/api/order', async (req, res) => {
  const {
    name,
    email,
    tel,
    captcha,
    productId,
    productTitle,
    productVolume,
    productPrice,
  } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
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
    to: '89o.kh89@gmail.com',
    subject: `Повідомлення від ${name}`,
    text: `
      Повідомлення від: ${name}, тел: ${tel}, email: ${email} 
      Код перевірки: ${captcha}. 
      Замовлення товару:
        id - ${productId}, 
        назва - ${productTitle}, 
        об'єм -  ${productVolume}, 
        ціна - ${productPrice}грн`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Лист успішно відправлено!' });
  } catch (error) {
    res.status(500).send('Помилка відправки листа.');
    res.status(500).json({ error: 'Помилка відправки листа.' });
  }
});

app.post('/api/invitation', async (req, res) => {
  const { name, email, tel, captcha } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
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
    to: '89o.kh89@gmail.com',
    subject: `Повідомлення від ${name}`,
    text: `
      Повідомлення від: ${name}, тел: ${tel}, email: ${email} 
      Код перевірки: ${captcha}. 
      Запит на зворотній зв'язок стосовно співпраці.`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Лист успішно відправлено' });
  } catch (error) {
    res.status(500).send('Помилка відправки листа.');
    res.status(500).json({ error: 'Помилка відправки листа.' });
  }
});

app.post('/api/contact', async (req, res) => {
  const { name, email, tel, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
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
    to: '89o.kh89@gmail.com',
    subject: `Повідомлення від ${name}`,
    text: `
      Повідомлення від: ${name}, тел: ${tel}, email: ${email}  
      Текст повідомлення: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Лист успішно відправлено' });
  } catch (error) {
    res.status(500).send('Помилка відправки листа.');
    res.status(500).json({ error: 'Помилка відправки листа.' });
  }
});

app.listen(3000, () => console.log('Сервер запущено на http://localhost:3000'));
