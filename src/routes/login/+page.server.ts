import { login } from "$lib/api/auth.js";
import type { Actions } from "@sveltejs/kit";

export const actions = {
    default: async ({ cookies, request }) => {
        const data = await request.formData();

        let loginData = JSON.parse(await login(
            data.get("email") as string,
            data.get("password") as string
        ));

        if (loginData.error) {
            cookies.set(
                "pb_auth",
                "",
                {
                    secure: true,
                    httpOnly: true,
                    sameSite: "strict",
                    path: "/",
                },
            );
        } else {
            let { token, expires } = loginData;

            cookies.set(
                "pb_auth",
                token,
                {
                    secure: true,
                    httpOnly: true,
                    sameSite: "strict",
                    path: "/",
                    expires: new Date(expires),
                },
            );
        }
    },
} satisfies Actions;
