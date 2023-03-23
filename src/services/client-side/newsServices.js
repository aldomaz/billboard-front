import axios from 'axios'
const serverUrl = process.env.NEXT_PUBLIC_STRAPI_URL

export const getAllNews = async () => {
  const response = await axios.get(`${serverUrl}/api/new?populate=deep`)

  return response.data.data
}

export const getBillboardNews = async (cmpny) => {
  const response = await axios.get(
    `${serverUrl}/api/billboards?populate=deep&filters[company][$eq]=${cmpny}`
  )

  return response.data.data
}

export const getBillboard = async (id) => {
  const response = await axios.get(
    `${serverUrl}/api/users/${id}?populate=deep`
  )

  return response.data
}

export const getLayouts = async () => {
  const response = await axios.get(`${serverUrl}/api/global?populate=layouts`)

  return response.data
}
