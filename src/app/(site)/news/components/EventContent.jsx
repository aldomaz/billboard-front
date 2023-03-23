import { Box, Typography } from "@mui/material"
import { ContentModalContainer, MediaModalContainer, NewsModalContent, NewsModalDate, NewsModalSubtitle, NewsModalTitle } from "@/ui-components/StyledComponents"
import Moment from 'moment';
import 'moment/locale/es';

const serverUrl = process.env.NEXT_PUBLIC_STRAPI_URL;

function EventContent({notice, findExtension}) {
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
                image={`${serverUrl}${notice?.image?.url}`}
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
                    height: notice?.image ? '56%' : '90%'
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
                    <NewsModalTitle>{notice?.eventName}</NewsModalTitle>
                    {
                        notice?.dateRange.map((date) => (
                            <NewsModalDate
                                key={date.id}
                                sx={{
                                    backgroundColor: notice?.backgroundColor ?? '#3fff9c',
                                    color: notice?.fontColor ?? '#000',
                                    width: {xs: '100%', sm: '70%', md: '50%'}
                                }}
                                    
                            > 
                               { 
                                    Moment(date.startDate).format('LL') === Moment(date.finishDate).format('LL')
                                    ?
                                    `${Moment(date.startDate).format('LLLL')} - ${Moment(date.finishDate).format('LT')}`
                                    :
                                    `${Moment(date.startDate).format('LLLL')} - ${Moment(date.finishDate).format('L')}`
                                }
                            </NewsModalDate>
                        ))
                    }
                </Box>
                <NewsModalContent>{notice?.description}</NewsModalContent>
            </ContentModalContainer>
        </>
    )
}

export default EventContent
