// app/login/route.ts

import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET() {
    const cookieStore = await cookies();
    const getCookie = cookieStore.delete('auth_token');

    // Se o cookie de autenticação existir, redireciona para a home
    if (getCookie) {
        return NextResponse.redirect('/');
    }

    // Casores contrário, retorna uma resposta normal
    return NextResponse.redirect('/');
}