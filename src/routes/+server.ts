import { json } from "@sveltejs/kit";

export async function POST({ cookies, request }) {
  cookies.delete("pb_auth", { path: "/", secure: true, httpOnly: true, sameSite: "strict" })

  return json({ success: true, msg: "" });
}
