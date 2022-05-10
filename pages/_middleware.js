import { useRouter } from "next/router";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req) {
  
  const router = useRouter()
  router.push('/login')
  return NextResponse.next();
}
