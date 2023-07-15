// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

type Data = {
  name: string;
};

export default function handler(req: NextRequest) {
  return new Response(JSON.stringify({ message: "Hello World!" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
