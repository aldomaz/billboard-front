import { fetchHead } from "@/services/server-side/homeServices"

export default async function Head() {

    const headData = await fetchHead();
    
    const {headTitle, headIcon} = headData.data?.attributes.head;

    return (
        <>
            <title>{headTitle}</title>
            <link rel="icon" href={`${process.env.NEXT_PUBLIC_STRAPI_URL}${headIcon.data.attributes.url}`} />
        </>
    )
} 
