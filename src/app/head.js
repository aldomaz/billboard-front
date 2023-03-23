import { fetchHead } from "@/services/server-side/homeServices"

export default async function Head() {

    const headData = await fetchHead();
    
    const {headTitle, headIcon} = headData.data?.attributes.head;

    return (
        <>
            <title>{headTitle}</title>
            <link rel="icon" href={`${headIcon.data.attributes.url}`} />
        </>
    )
} 
