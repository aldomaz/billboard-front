import Carousel from "react-multi-carousel";
import { Card, CardMedia } from "@mui/material";
import "react-multi-carousel/lib/styles.css";
import NewsCardContent from "./NewsCardContent";
import EventCardContent from "./EventCardContent";
import CongratsCardContent from "./CongratsCardContent";
import GroupCongratsCardContent from "./GroupCongratsCardContent";
import SpecialDayCardContent from "./SpecialDayCardContent";

function PrincipalCarousel({responsive, allNews, handleOpen, setNotice, setPosition, findExtension}) {
    
    const selectContent = (component, news) => {
        switch(component){
            case 'billboard.news':
                return <NewsCardContent news={news} level='principal'/>
            case 'billboard.event':
                return <EventCardContent news={news} level='principal'/>
            case 'billboard.congrats':
                return <CongratsCardContent news={news} level='principal'/>
            case 'billboard.group-congrats':
                return <GroupCongratsCardContent news={news} level='principal'/>
            case 'billboard.special-days':
                return <SpecialDayCardContent news={news} level='principal'/>
        }
    }
    
    return (
        <Carousel
            keyBoardControl={true}
            infinite={true}
            autoPlay={
                allNews?.length > 1
                ?
                true
                :false
            }
            arrows={
                allNews?.length > 1
                ?
                true
                :false
            }
            autoPlaySpeed={10000}
            responsive={responsive}    
            containerClass='news_carousel'
        >
            {   
                allNews?.map(( news , idx) => (
                    <Card key={idx} 
                        sx={{
                            backgroundColor: news.backgroundColor ?? '#3FFF9C', 
                            color: news.fontColor ?? '#000',
                            height: {xs: 'calc(100vh - 60px)', md: 'calc(100vh - 120px)'},
                            borderRadius: '10px',
                            cursor: 'grab',
                            backgroundSize: 'contain',
                            backgroundRepeat: 'repeat-y'
                        }}
                        onClick={() => {
                            handleOpen();
                            setNotice(allNews);
                            setPosition(idx);
                        }}
                    >
                        <div className="blog-card">
                            {
                                news?.__component === 'billboard.media'
                                ?
                                    <CardMedia
                                        component={
                                            findExtension(news?.media.ext)
                                            ? 'video'
                                            : 'img'
                                        }
                                        sx={{
                                            height: '100%',
                                            objectFit: 'cover'
                                        }}
                                        image={`${news?.media.url}`}
                                        title="modal_image"
                                        autoPlay
                                    />
                                :
                                <>
                                    <CardMedia
                                        component={
                                            findExtension(news?.image?.ext)
                                            ? 'video'
                                            : 'img'
                                        }
                                        sx={{
                                            height: news?.image ? '50%' : '0%',
                                            objectFit: 'cover',
                                            display: news?.image ? 'block' : 'none'
                                        }}
                                        image={`${news?.image?.url}`}
                                        title="modal_image"
                                        autoPlay
                                    />
                                    {
                                        selectContent(news.__component, news)
                                    }
                                </>
                            }
                        </div>
                    </Card>
                ))
            }
        </Carousel>
    )
}

export default PrincipalCarousel
