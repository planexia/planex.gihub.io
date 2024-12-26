const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Configura el transportador de Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail', // Puedes usar 'gmail' o cualquier otro proveedor
  auth: {
    user:'rpruiz33@gmail.com', // Reemplaza con tu email
    pass: 'lhcj ljmw ahps mjts', // Reemplaza con tu contraseña o clave de aplicación
  },
});

// Ruta para enviar correos
app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Configuración del correo
    const mailOptions = {
      from: email, // Remitente (el correo que envió el formulario)
      to: 'planexia.sa@gmail.com', // Destinatario
      subject: `Nuevo mensaje de ${name}`, // Asunto del correo
      text: `Mensaje recibido de: ${name} (${email})\n\n${message}`, // Contenido del correo
    };

    // Envía el correo
    await transporter.sendMail(mailOptions);

    res.status(200).send('Correo enviado con éxito');
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    res.status(500).send('Error al enviar el correo');
  }
});

// Inicia el servidor
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
