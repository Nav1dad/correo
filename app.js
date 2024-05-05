const nodemailer = require('nodemailer');

class EmailSender {
    constructor(service, user, pass) {
        this.transporter = nodemailer.createTransport({
            service: service,
            auth: {
                user: user,
                pass: pass
            }
        });
    }

    enviarCorreo(destinatario, asunto, cuerpo) {
        const mensaje = {
            from: 'poo2024slv@hotmail.com',
            to: destinatario,
            subject: asunto,
            text: cuerpo
        };

        this.transporter.sendMail(mensaje, function(error, info) {
            if (error) {
                console.error('Error al enviar el correo:', error);
            } else {
                console.log('Correo enviado:', info);
            }
        });
    }
}

const emailSender = new EmailSender('hotmail', 'poo2024slv@hotmail.com', 'parka2002');
emailSender.enviarCorreo('j.william03@hotmail.com', 'Pude Inge', 'Ya tengo mi tarea, postdata me bloquearon como 10 cuentas, soy Pedro');
