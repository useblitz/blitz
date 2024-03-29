import PocketBase, { getTokenPayload } from "pocketbase";
import { isUserLoggedIn } from "$lib/globals";

export async function login(
  username: string,
  password: string,
  db: PocketBase
): Promise<{ success: boolean; msg: any }> {
  try {
    await db.collection("users").authWithPassword(username, password);
  } catch (err) {
    return { success: false, msg: err };
  }

  let payload = getTokenPayload(db.authStore.token);
  isUserLoggedIn.set(true);

  return {
    success: true,
    msg: {
      token: db.authStore.token,
      expires: new Date(payload.exp * 1000),
    },
  };
}

export async function register(
  username: string,
  email: string,
  password: string,
  confirm: string,
  db: PocketBase
): Promise<{ success: boolean; msg: any }> {
  if (password !== confirm) {
    return { success: false, msg: "Passwords do not match." };
  }

  try {
    await db.collection("users").create({
      username,
      email,
      password,
      passwordConfirm: confirm,
    });
  } catch (err) {
    return { success: false, msg: err };
  }

  try {
    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify((await login(username, password, db)).msg),
    });

    if (!res.ok) {
      return { success: false, msg: `${res.status} ${res.statusText}` };
    }
  } catch (err) {
    return { success: false, msg: err };
  }

  // todo: email verification

  return { success: true, msg: "" };
}

export async function logout(db: PocketBase): Promise<{ success: boolean }> {
  try {
    await fetch("/", { method: "POST" });
    isUserLoggedIn.set(false);
    db.authStore.clear();
  } catch (err) {
    return { success: false };
  }

  return { success: true };
}
