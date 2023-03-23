import Carousel from "react-multi-carousel";
import { Card, CardMedia } from "@mui/material";
import "react-multi-carousel/lib/styles.css";
import NewsCardContent from "./NewsCardContent";
import EventCardContent from "./EventCardContent";
import CongratsCardContent from "./CongratsCardContent";
import GroupCongratsCardContent from "./GroupCongratsCardContent";
import SpecialDayCardContent from "./SpecialDayCardContent";

function MediumCarousel({responsive, allNews, handleOpen, setNotice, setPosition, findExtension}) {

    const selectContent = (component, news) => {
        switch(component){
            case 'billboard.news':
                return <NewsCardContent news={news} level='medium'/>
            case 'billboard.event':
                return <EventCardContent news={news} level='medium'/>
            case 'billboard.congrats':
                return <CongratsCardContent news={news} level='medium'/>
            case 'billboard.group-congrats':
                return <GroupCongratsCardContent news={news} level="medium"/>
            case 'billboard.special-days':
                return <SpecialDayCardContent news={news} level='medium'/>
        }
    }

    return (
        <Carousel
            keyBoardControl={true}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={10000}
            responsive={responsive}    
            itemClass='news_carousel'
        >
            {
                allNews.map(( news , idx) => (
                    <Card 
                        key={idx} 
                        sx={{
                            backgroundColor: news.backgroundColor ?? '#005eff', 
                            color: news.fontColor ?? '#000',
                            height: {xs: 'calc(50vh - 48px)', md: 'calc(50vh - 62px)'},
                            borderRadius: '10px',
                            cursor: 'grab'
                        }}
                        onClick={() => {
                            handleOpen();
                            setNotice(allNews);
                            setPosition(idx);
                        }}
                    >
                        <div className="blog-card spring-fever">
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
                                            findExtension(news.image?.ext)
                                            ? 'video'
                                            : 'img'
                                        }
                                        sx={{
                                            height: news?.image ? '50%' : '0%',
                                            objectFit: 'cover',
                                            display: news?.image ? 'block' : 'none'
                                        }}
                                        image={`${news.image?.url}`}
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

export default MediumCarousel
