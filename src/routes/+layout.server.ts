export function load({ cookies }) {
    return {
        pb_auth: cookies.get("pb_auth"),
    }
}