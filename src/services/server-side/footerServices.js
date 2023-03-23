const serverUrl = process.env.NEXT_PUBLIC_STRAPI_URL

export const fetchSocialNetwork = () => {
  return fetch(
    `${serverUrl}/api/global?populate[navigation][populate][social_network][populate][0]=icon`,
    {
      next: {
        revalidate: 60,
      }
    }
  ).then((res) => res.json());
}