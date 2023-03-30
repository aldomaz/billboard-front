import { Box } from "@mui/material"
import { MediaModalContainer } from "@/ui-components/StyledComponents"

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
                    maxHeight: '90vh',
                    alignSelf: 'center',
                    borderBottomLeftRadius: '20px',
                    borderBottomRightRadius: '20px',
                }}
                image={`${notice?.media.url}`}
                title="modal_media"
                autoPlay
            />
        </Box>
    )
}

export default MediaContent
