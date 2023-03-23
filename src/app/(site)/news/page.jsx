'use client'

import React, { useEffect, useState } from 'react'
import { Box, Popover } from '@mui/material'
import { getBillboard, getLayouts } from '@/services/client-side/newsServices';
import { SectionContainer } from '@/ui-components/StyledComponents';
import jwtDecode from 'jwt-decode';
import BillboardModal from './components/BillboardModal';
import PrincipalLayout from './layouts/PrincipalLayout';
import SecondaryLayout from './layouts/SecondaryLayout';
import ThirdLayout from './layouts/ThirdLayout';
import FourthLayout from './layouts/FourthLayout';
import LayoutSelector from './layouts/LayoutSelector';
import { useRouter } from 'next/navigation';

const videoExt = ['.mp4', '.mpeg', '.mov', '.wmv', 'avi', 'flv'];

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    md: {
      breakpoint: { max: 1024, min: 768 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
};
  
function NewsPage() {

    const [allNews, setAllNews] = useState();
    const [notice, setNotice] = useState();
    const [position, setPosition] = useState();
    const [openTestModal, setOpenTestModal] = useState(false);
    const [layoutSelected, setLayoutSelected] = useState(1);
    const [direction, setDirection] = useState('row');
    const [layouts, setLayouts] = useState();
    const [logoUrl, setLogoUrl] = useState();
    const router = useRouter();

    const handleOpen = () => {
        setOpenTestModal(!openTestModal);
    }

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        if(token){
            const decode = jwtDecode(token);
            const id = decode.id;
            getBillboard(id)
            .then(data => {
                setAllNews(data.billboard);
                setLogoUrl(data.billboard.companyLogo.url);
                console.log(data);
                document.documentElement.style.setProperty('--background', data.billboard.backgroundColor);
            })
            .catch(err => console.log(err.message));

            getLayouts()
            .then( data => setLayouts(data))
            .catch(err => console.log(err.message));
        } else {
            router.push('/login')
        }
    }, []);

    const findExtension = (ext) => {
        const isFind = videoExt.find((ve) => ve === ext);

        return isFind;
    }

    const selectLayout = () => {
        switch(layoutSelected){
            case 1: 
                return(
                    <PrincipalLayout 
                        responsive={responsive} 
                        allNews={allNews} 
                        handleOpen={handleOpen} 
                        setNotice={setNotice}
                        setPosition={setPosition}
                        findExtension={findExtension}
                        direction={direction}
                    />
                )
            case 2:
                return(
                    <SecondaryLayout 
                        responsive={responsive} 
                        allNews={allNews} 
                        handleOpen={handleOpen} 
                        setNotice={setNotice}
                        setPosition={setPosition}
                        findExtension={findExtension}
                        direction={direction}
                    />
                )
            case 3:
                return(
                    <ThirdLayout 
                        responsive={responsive} 
                        allNews={allNews} 
                        handleOpen={handleOpen} 
                        setNotice={setNotice}
                        setPosition={setPosition}
                        findExtension={findExtension}
                        direction={direction}
                    />
                )
            case 4:
                return(
                    <FourthLayout 
                        responsive={responsive} 
                        allNews={allNews} 
                        handleOpen={handleOpen} 
                        setNotice={setNotice}
                        setPosition={setPosition}
                        findExtension={findExtension}
                        direction={direction}
                    />
                )
        }
    }

    return (
        <SectionContainer>
            <LayoutSelector 
                setLayoutSelected={setLayoutSelected}
                setDirection={setDirection}
                layouts={layouts?.data.attributes.layouts.data}
            />
            <Box
                sx={{
                    position: 'absolute',
                    width: '200px',
                    left: 'calc(50% - 100px)',
                    top: 0,
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <img className='brand_logo_image' src={`${logoUrl}`}/>
            </Box>
            {
                selectLayout()
            }
            <BillboardModal open={openTestModal} handleOpen={handleOpen} notice={notice} index={position} setIndex={setPosition} findExtension={findExtension}/>
        </SectionContainer>
    )
}

export default NewsPage
