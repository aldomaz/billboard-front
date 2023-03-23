'use client'

import React, { useEffect } from 'react'
import { CloseButton, NewsModal, NewsModalContainer } from '@/ui-components/StyledComponents'
import { ArrowBack, ArrowForward, Close } from '@mui/icons-material'
import NewsContent from './NewsContent'
import EventContent from './EventContent'
import CongratsContent from './CongratsContent'
import GroupCongratsContent from './GroupCongratsContent'
import SpecialDayContent from './SpecialDayContent'
import MediaContent from './MediaContent'
import { IconButton } from '@mui/material'

function BillboardModal
({open, handleOpen, notice, index, setIndex, findExtension}) {

    const selectContent = (component) => {
        switch(component){
            case 'billboard.news':
                return <NewsContent notice={notice[index]} findExtension={findExtension}/>
            case 'billboard.event':
                return <EventContent notice={notice[index]} findExtension={findExtension}/>
            case 'billboard.congrats':
                return <CongratsContent notice={notice[index]} findExtension={findExtension}/>
            case 'billboard.group-congrats':
                return <GroupCongratsContent notice={notice[index]} findExtension={findExtension}/>
            case 'billboard.special-days':
                return <SpecialDayContent notice={notice[index]} findExtension={findExtension}/>
            case 'billboard.special-days':
                return <SpecialDayContent notice={notice[index]} findExtension={findExtension}/>
            case 'billboard.media':
                return <MediaContent notice={notice[index]} findExtension={findExtension}/>
        }
    }

    useEffect(() => {
        if(notice)
            document.documentElement.style.setProperty('--scrollbar', notice[index]?.backgroundColor);
    }, [notice])

    const rightSlide = () => {
        if((index + 1) >= notice?.length){
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    }

    const leftSlide = () => {
        if(index - 1 < 0){
            setIndex(notice?.length - 1);
        } else {
            setIndex(index - 1);
        }
    }

    return (
        <NewsModalContainer  
            open={open} 
            onClose={() => handleOpen()}
        >
            {
                notice
                ?
                <NewsModal
                    sx={{
                        backgroundColor: 
                            notice[index]?.fontColor
                            ?
                            notice[index]?.fontColor === '#000' ? '#131313' : '#fff'
                            : '#131313'
                    }}
                >
                    <CloseButton
                        onClick={() => handleOpen()}
                        sx={{
                            width: {xs: '16px', md:'3vw'},
                            height: {xs: '16px', md:'3vw'},
                        }}
                    >
                        <Close 
                            sx={{
                                width: {xs: '16px', md:'2vw'},
                                height: {xs: '16px', md:'2vw'},
                            }}
                        />
                    </CloseButton>
                    <IconButton
                        sx={{
                            position: 'absolute',
                            top: {xs: '',md:'50%'},
                            left: {xs: '10%',md:'-10%'},
                            bottom: {xs: '2.5%', md: '50%'},
                            color: {
                                xs: notice[index]?.fontColor
                                ?
                                notice[index]?.fontColor === '#000' ? '#fff' : '#131313' 
                                : '#fff',
                                sm: '#fff'
                            }
                        }}
                        onClick={() => leftSlide()}
                    >
                        <ArrowBack/>
                    </IconButton>
                    <IconButton
                        sx={{
                            position: 'absolute',
                            top: {xs: '', md:'50%'},
                            right: {xs: '10%',md:'-10%'},
                            bottom: {xs: '2.5%', md: '50%'},
                            color: {
                                xs: notice[index]?.fontColor
                                ?
                                notice[index]?.fontColor === '#000' ? '#fff' : '#131313' 
                                : '#fff',
                                sm: '#fff'
                            }
                        }}
                        onClick={() => rightSlide()}
                    >
                        <ArrowForward/>
                    </IconButton>
                    {
                        selectContent(notice[index]?.__component)
                    }
                </NewsModal>
                :<NewsModal/>
            }
            
        </NewsModalContainer>
    )
}

export default BillboardModal

