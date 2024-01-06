import { login } from "$lib/api/auth.js";
import type { Actions } from "@sveltejs/kit";

export const actions = {
  default: async ({ cookies, request }) => {
    const data = await request.formData();

    let loginData = await login(
      data.get("email") as string,
      data.get("password") as string
    );

    if (loginData.success == false) {
      cookies.set("pb_auth", "", {
        secure: true,
        httpOnly: true,
        sameSite: "strict",
        path: "/",
      });
    } else {
      let {
        msg: { token, expires },
      } = loginData;

      cookies.set("pb_auth", token, {
        secure: true,
        httpOnly: true,
        sameSite: "strict",
        path: "/",
        expires: new Date(expires),
      });
    }
  },
} satisfies Actions;
