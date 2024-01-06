import { pb } from "$lib/globals";
import { getTokenPayload } from "pocketbase";

export async function login(user: string, password: string): Promise<string> {
    try {
        await pb.collection("users").authWithPassword(
            user,
            password
        );
    } catch (e) {
        return JSON.stringify({
            error: "Failed to log in",
        });
    }

    let payload = getTokenPayload(pb.authStore.token);
    
    return JSON.stringify({
        token: pb.authStore.token,
        expires: new Date(payload.exp * 1000),
    });
}

export function logout() {
    pb.authStore.clear();
}