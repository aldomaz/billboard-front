import axios from 'axios'
const serverUrl = process.env.NEXT_PUBLIC_STRAPI_URL

export const sendEmailData = async (body) => {
  const response = await axios.post(`${serverUrl}/api/send-emails`, body)

  return response
}

export const uploadFile = async (body) => {
  const response = await axios.post(`${serverUrl}/api/upload`, body)

  return response
}
