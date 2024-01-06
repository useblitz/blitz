import { json } from "@sveltejs/kit";

export async function GET({ cookies }) {
    return json({
        token: cookies.get("pb_auth"),
    });
}
