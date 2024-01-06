import { login } from "$lib/api/auth.js";
import type { Actions } from "@sveltejs/kit";

export const actions = {
  default: async ({ cookies, request }) => {
    const data = await request.formData();
    login(data.get("email") as string, data.get("password") as string);
  },
} satisfies Actions;
