import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'  

export async function GET() {
  return NextResponse.json({ message: 'Login endpoint GET request successful' }, { status: 200 })
}