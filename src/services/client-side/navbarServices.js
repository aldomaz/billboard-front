import axios from "axios"
const serverUrl = process.env.NEXT_PUBLIC_STRAPI_URL

export const getBackgroundColors = async () => {
  const response = await axios.get(
    `${serverUrl}/api/global?populate=navigation`
  );

  return response.data.data;
}