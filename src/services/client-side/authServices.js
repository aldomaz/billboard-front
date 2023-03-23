import axios from "axios";
const serverUrl = process.env.NEXT_PUBLIC_STRAPI_URL;

export const authLogin = async (body) => {
    const response = await axios.post(
        `${serverUrl}/api/auth/local`,
        body
    )

    return response.data;
}

export const forgotPassword = async (body) => {

    const response =  await axios.post(
        `${serverUrl}/api/auth/forgot-password`,
        body
    )

    return response.data;

}

export const resetPassword = async (body) => {

    const response =  await axios.post(
        `${serverUrl}/api/auth/reset-password`,
        body
    )

    return response.data;

}

export const getLogin = async () => {
    const response = await axios.get(
        `${serverUrl}/api/login?populate=deep`,
    )

    return response.data;
}