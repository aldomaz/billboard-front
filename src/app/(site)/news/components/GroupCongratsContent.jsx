import { Box, Typography } from "@mui/material"
import { ContentModalContainer, MediaModalContainer, NewsModalContent, NewsModalDate, NewsModalSubtitle, NewsModalTitle } from "@/ui-components/StyledComponents"

function GroupCongratsContent({notice, findExtension}) {
    
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
                    <NewsModalTitle>{notice?.title}</NewsModalTitle>
                    <NewsModalDate
                        sx={{
                            backgroundColor: notice?.backgroundColor ?? '#3fff9c',
                            color: notice?.fontColor ?? '#000',
                        }}
                            
                    > 
                        { notice?.date}
                    </NewsModalDate>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: {xs: 'column', sm: 'row'},
                        width: '100%',
                        gap: '16px'
                    }}
                >
                    <Box
                        sx={{
                            width: {xs: '100%', sm: '40%'}
                        }}
                    >
                        {
                            notice?.members.map((member) => (
                                <NewsModalContent key={member.id}>{member.name}</NewsModalContent>
                            ))
                        }
                    </Box>
                    <Box
                        sx={{
                            width: {xs: '100%', sm: '60%'}
                        }}
                    >
                        <NewsModalContent>{notice.content}</NewsModalContent>
                    </Box>
                </Box>
                
            </ContentModalContainer>
        </>
    )
}

export default GroupCongratsContent
