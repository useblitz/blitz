import { json } from '@sveltejs/kit';

export async function POST({ cookies, request }) {
    // @ts-ignore
    const { token, expires } = await request.json();

    cookies.set("pb_auth", token, {
      secure: true,
      httpOnly: true,
      sameSite: "strict",
      path: "/",
      expires: new Date(expires),
    });

    return json({ success: true, msg: "ok" });
}
