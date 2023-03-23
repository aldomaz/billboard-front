import React , {useState} from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { Box, Button, Card, CardContent, CardMedia, IconButton, ImageList, ImageListItem, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { Menu } from '@mui/icons-material';
const serverUrl = process.env.NEXT_PUBLIC_STRAPI_URL;

export default function LayoutSelector({setLayoutSelected, setDirection, layouts}) {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <Box
            sx={{
                position: 'absolute',
                left: {xs: '32px', md: '5%', lg:'15%'},
                top: {xs: '0.5%', md: '10px'}
            }}
        >
            <Button 
                aria-describedby={id} 
                sx={{
                    backgroundColor: '#fff',
                    opacity: 0.7,
                    "&:hover":{
                        opacity: 1,
                    }
                }}
                onClick={handleClick}
            >
                <Menu
                    sx={{
                        color: '#000'
                    }}
                />
            </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
                }}
            >
                {
                    layouts
                    ?
                    <ImageList
                        sx={{ 
                            width: 630, 
                            height: 720,
                            padding: '16px'
                        }} 
                        cols={2} 
                        gap={8}
                    >
                        <ImageListItem key={layouts[0]?.id}
                            sx={{
                                cursor: 'pointer'
                            }}
                            onClick={() => {
                                setLayoutSelected(1);
                                setDirection('row');
                                handleClose();
                            }}
                        >
                            <img
                                className='layout_image'
                                src={`${serverUrl}${layouts[0]?.attributes.url}`}
                                alt={layouts[0]?.attributes.name}
                                loading="lazy"
                            />
                        </ImageListItem>
                        <ImageListItem key={layouts[1]?.id}
                            sx={{
                                cursor: 'pointer'
                            }}
                            onClick={() => {
                                setLayoutSelected(1);
                                setDirection('row-reverse');
                                handleClose();
                            }}
                        >
                            <img
                                className='layout_image'
                                src={`${serverUrl}${layouts[1]?.attributes.url}`}
                                alt={layouts[1]?.attributes.name}
                                loading="lazy"
                            />
                        </ImageListItem>
                        <ImageListItem key={layouts[2]?.id}
                            sx={{
                                cursor: 'pointer'
                            }}
                            onClick={() => {
                                setLayoutSelected(2);
                                setDirection('row');
                                handleClose();
                            }}
                        >
                            <img
                                className='layout_image'
                                src={`${serverUrl}${layouts[2]?.attributes.url}`}
                                alt={layouts[2]?.attributes.name}
                                loading="lazy"
                            />
                        </ImageListItem>
                        <ImageListItem key={layouts[3]?.id}
                            sx={{
                                cursor: 'pointer'
                            }}
                            onClick={() => {
                                setLayoutSelected(2);
                                setDirection('row-reverse');
                                handleClose();
                            }}
                        >
                            <img
                                className='layout_image'
                                src={`${serverUrl}${layouts[3]?.attributes.url}`}
                                alt={layouts[3]?.attributes.name}
                                loading="lazy"
                            />
                        </ImageListItem>
                        <ImageListItem key={layouts[4]?.id}
                            sx={{
                                cursor: 'pointer'
                            }}
                            onClick={() => {
                                setLayoutSelected(3);
                                setDirection('row');
                                handleClose();
                            }}
                        >
                            <img
                                className='layout_image'
                                src={`${serverUrl}${layouts[4]?.attributes.url}`}
                                alt={layouts[4]?.attributes.name}
                                loading="lazy"
                            />
                        </ImageListItem>
                        <ImageListItem key={layouts[5]?.id}
                            sx={{
                                cursor: 'pointer',
                            }}
                            onClick={() => {
                                setLayoutSelected(4);
                                setDirection('row');
                                handleClose();
                            }}
                        >
                            <img
                                className='layout_image'
                                src={`${serverUrl}${layouts[5]?.attributes.url}`}
                                alt={layouts[5]?.attributes.name}
                                loading="lazy"
                            />
                        </ImageListItem>
                    </ImageList>
                    : null
                }
            </Popover>
        </Box>
    );
}