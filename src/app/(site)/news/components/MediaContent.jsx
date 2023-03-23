import { Box } from "@mui/material"
import { ContentModalContainer, MediaModalContainer, NewsModalContent, NewsModalDate, NewsModalTitle } from "@/ui-components/StyledComponents"
const serverUrl = process.env.NEXT_PUBLIC_STRAPI_URL;

function MediaContent({notice, findExtension}) {
    return (
        <Box
            sx={{
                display: 'flex',
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <MediaModalContainer
                component={
                    findExtension(notice?.media.ext)
                    ? 'video'
                    : 'img'
                }
                sx={{
                    height: 'auto',
                    alignSelf: 'center',
                    borderTopLeftRadius: 0,
                    borderTopRightRadius: 0,
                }}
                image={`${serverUrl}${notice?.media.url}`}
                title="modal_media"
                autoPlay
            />
        </Box>
    )
}

export default MediaContent
