const serverUrl = process.env.NEXT_PUBLIC_STRAPI_URL

export const fetchHome = () => {
  return fetch(`${serverUrl}/api/home?populate=deep`, {
    next: {
      revalidate: 60,
    }
  }).then((res) => res.json());
}

export const fetchProjects = () => {
  return fetch(`${serverUrl}/api/home?populate=projects`, {
    next: {
      revalidate: 60,
    }
  }).then((res) => res.json());
}

export const fetchHead = () => {
  return fetch(
    `${serverUrl}/api/global?populate[head][populate][0]=headTitle,headIcon`,
    {
      next: {
        revalidate: 60,
      }
    }
  ).then((res) => res.json());
}
