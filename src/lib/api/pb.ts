import PocketBase from "pocketbase";

import { isUserLoggedIn } from "$lib/globals";

export function isLoggedIn(db: PocketBase): boolean {
    isUserLoggedIn.set(db.authStore.token !== "" && db.authStore.isValid);
    return db.authStore.token !== "" && db.authStore.isValid;
}