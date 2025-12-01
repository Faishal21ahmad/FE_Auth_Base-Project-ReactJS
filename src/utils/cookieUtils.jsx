export const setCookie = (cookieName, token, exp) => {
    try {
        const expiresDate = new Date(exp * 1000);

        document.cookie =
            cookieName + "=" + token +
            "; expires=" + expiresDate.toUTCString() +
            "; path=/"
            + "; SameSite=Strict"
            + "; Secure";

    } catch (err) {
        console.error("Failed to decode token:", err);
    }
};

export const getCookie = (name) => {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(nameEQ) === 0) {
            try {
                return JSON.parse(decodeURIComponent(c.substring(nameEQ.length)));
            } catch {
                return c.substring(nameEQ.length);
            }
        }
    }
    return null;
};

export const removeCookie = (name) => {
    document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};

export const checkCookie = (name) => {
    const cookie = getCookie(name);
    return cookie !== null && cookie !== "";
};