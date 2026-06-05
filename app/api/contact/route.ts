import { NextResponse } from "next/server";

type ContactPayload = {
    nombres?: string;
    apellidoPaterno?: string;
    apellidoMaterno?: string;
    email?: string;
    servicio?: string;
    mensaje?: string;
}

function isValidEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
    const body = (await request.json()) as ContactPayload;

    const nombres = body.nombres?.trim() ?? "";
    const apellidoPaterno = body.apellidoPaterno?.trim() ?? "";
    const apellidoMaterno = body.apellidoMaterno?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const servicio = body.servicio?.trim() ?? "";
    const mensaje = body.mensaje?.trim() ?? "";

    if (!nombres) {
        return NextResponse.json(
            {message: "El campo nombres es obligatorio."},
            {status: 400}
        );
    }
    if (!isValidEmail(email)) {
        return NextResponse.json(
            {message: "El campo email es obligatorio y debe tener un formato válido."},
            {status: 400}
        );
    }
    if (!servicio) {
        return NextResponse.json(
            {message: "El campo servicio es obligatorio."},
            {status: 400}
        );
    }
    if (!mensaje) {
        return NextResponse.json(
            {message: "El campo mensaje es obligatorio."},
            {status: 400} 
        );
    }

    if (mensaje.length > 1000) {
        return NextResponse.json(
            {message: "El campo mensaje no puede exceder los 1000 caracteres."},
            {status: 400}
        );
    }

    const contacto = {
        nombres,
        apellidoPaterno,
        apellidoMaterno,
        email,
        servicio,
        mensaje,
        recibidoEn: new Date().toISOString(),
    };

    console.log("Contacto recibido en API:", contacto);

    return NextResponse.json(
        {message: "Formulario recibido correctamente.", 
            contacto,
        },
        {status: 200}
    );
    }