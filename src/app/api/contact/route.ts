import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  nombre: string;
  apellidos: string;
  empresa: string;
  cargo: string;
  email?: string;
  mensaje: string;
  producto?: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactFormData = await request.json();

    const { nombre, apellidos, empresa, cargo, email, mensaje, producto } = body;

    // Validate required fields
    if (!nombre || !apellidos || !empresa || !cargo || !mensaje) {
      return NextResponse.json(
        { error: 'Todos los campos obligatorios deben ser completados' },
        { status: 400 }
      );
    }

    // Build email content
    const subject = producto
      ? `Nueva consulta sobre ${producto} - ${nombre} ${apellidos}`
      : `Nuevo mensaje de contacto - ${nombre} ${apellidos}`;

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #003860; padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">Nuevo mensaje de contacto</h1>
        </div>

        <div style="padding: 30px; background-color: #f5f5f5;">
          ${producto ? `
            <div style="background-color: #156BA8; color: white; padding: 10px 15px; border-radius: 8px; margin-bottom: 20px;">
              <strong>Producto de interés:</strong> ${producto}
            </div>
          ` : ''}

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #ddd; color: #666;">Nombre:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #ddd; color: #003860; font-weight: bold;">${nombre} ${apellidos}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #ddd; color: #666;">Empresa:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #ddd; color: #003860; font-weight: bold;">${empresa}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #ddd; color: #666;">Cargo:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #ddd; color: #003860; font-weight: bold;">${cargo}</td>
            </tr>
            ${email ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #ddd; color: #666;">Email:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #ddd; color: #003860; font-weight: bold;">
                  <a href="mailto:${email}" style="color: #156BA8;">${email}</a>
                </td>
              </tr>
            ` : ''}
          </table>

          <div style="margin-top: 25px;">
            <h3 style="color: #003860; margin-bottom: 10px;">Mensaje:</h3>
            <div style="background-color: white; padding: 20px; border-radius: 8px; border-left: 4px solid #156BA8;">
              <p style="margin: 0; color: #333; line-height: 1.6; white-space: pre-wrap;">${mensaje}</p>
            </div>
          </div>
        </div>

        <div style="background-color: #003860; padding: 15px; text-align: center;">
          <p style="color: white; margin: 0; font-size: 12px;">
            Este mensaje fue enviado desde el formulario de contacto de ferdiale.com
          </p>
        </div>
      </div>
    `;

    const textContent = `
Nuevo mensaje de contacto
${producto ? `\nProducto de interés: ${producto}` : ''}

Nombre: ${nombre} ${apellidos}
Empresa: ${empresa}
Cargo: ${cargo}
${email ? `Email: ${email}` : ''}

Mensaje:
${mensaje}

---
Este mensaje fue enviado desde el formulario de contacto de ferdiale.com
    `.trim();

    const { data, error } = await resend.emails.send({
      from: 'Ferdiale Web <noreply@ferdiale.com>',
      to: ['info@ferdiale.com'],
      replyTo: email || undefined,
      subject: subject,
      html: htmlContent,
      text: textContent,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Mensaje enviado correctamente', id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
