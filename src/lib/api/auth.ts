import PocketBase, { getTokenPayload } from "pocketbase";

export async function login(
    user: string,
    password: string,
    pb: PocketBase
): Promise<{ success: boolean; msg: any }> {
    try {
        await pb.collection("users").authWithPassword(user, password);
    } catch (err) {
        return { success: false, msg: err };
    }

    let payload = getTokenPayload(pb.authStore.token);

    return {
        success: true,
        msg: {
            token: pb.authStore.token,
            expires: new Date(payload.exp * 1000),
        },
    };
}
