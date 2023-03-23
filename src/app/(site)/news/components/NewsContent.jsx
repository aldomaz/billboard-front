import { Box } from "@mui/material"
import { ContentModalContainer, MediaModalContainer, NewsModalContent, NewsModalDate, NewsModalSubtitle, NewsModalTitle } from "@/ui-components/StyledComponents"

function NewsContent({notice, findExtension}) {
    return (
        <>
            <MediaModalContainer
                component={
                    findExtension(notice?.image?.ext)
                    ? 'video'
                    : 'img'
                }
                sx={{
                    display: notice?.image ? 'block' : 'none'
                }}
                image={`${notice?.image?.url}`}
                title="modal_media"
                autoPlay
            />
            <ContentModalContainer
                sx={{
                    color: 
                        notice?.fontColor
                        ?
                        notice?.fontColor === '#000' ? '#fff' : '#000'
                        : '#fff',
                    height: notice?.image ? {xs: '50%', md:'56%'} : '90%'
                }}
            >
                <Box
                    sx={{
                        position: 'sticky',
                        top: 0,
                        padding: '16px 0',
                        backgroundColor: 
                            notice?.fontColor
                            ?
                            notice?.fontColor === '#000' ? '#131313' : '#fff'
                            : '#131313'
                    }}
                >
                    <NewsModalDate
                        sx={{
                            backgroundColor: notice?.backgroundColor ?? '#3fff9c',
                            color: notice?.fontColor ?? '#000',
                        }}
                    >
                        {notice?.date}
                    </NewsModalDate>
                    <NewsModalTitle>{notice?.title}</NewsModalTitle>
                    <NewsModalSubtitle
                        sx={{
                            color: notice?.backgroundColor ?? '#3fff9c',
                        }}
                    >{notice?.subtitle}</NewsModalSubtitle>
                </Box>
                <NewsModalContent>{notice?.content}</NewsModalContent>
            </ContentModalContainer>
        </>
    )
}

export default NewsContent
