import { Card, CardMedia } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CongratsCardContent from "./CongratsCardContent";
import EventCardContent from "./EventCardContent";
import GroupCongratsCardContent from "./GroupCongratsCardContent";
import NewsCardContent from "./NewsCardContent";
import SpecialDayCardContent from "./SpecialDayCardContent";

const serverUrl = process.env.NEXT_PUBLIC_STRAPI_URL;

function LowCarousel({responsive, allNews, handleOpen, setNotice, setPosition, findExtension}) {

    const selectContent = (component, news) => {
        switch(component){
            case 'billboard.news':
                return <NewsCardContent news={news} level="low"/>
            case 'billboard.event':
                return <EventCardContent news={news} level="low"/>
            case 'billboard.congrats':
                return <CongratsCardContent news={news} level="low"/>
            case 'billboard.group-congrats':
                return <GroupCongratsCardContent news={news} level="low"/>
            case 'billboard.special-days':
                return <SpecialDayCardContent news={news} level='low'/>
        }
    }

    return (
        <Carousel
            keyBoardControl={true}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={10000}
            responsive={responsive}    
            arrows={false}
            showDots={true}
            containerClass='news_carousel'
        >
            {
                allNews?.map((news,idx) => (
                    <Card 
                        key={idx} 
                        sx={{
                            backgroundColor: news.backgroundColor ?? '#ed6aff', 
                            color: news.fontColor ?? '#000',
                            height: {xs: 'calc(25vh - 32px)', md: 'calc(25vh - 48px)'},
                            cursor: 'grab',
                            borderRadius: '10px'
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
                                        image={`${serverUrl}${news?.media.url}`}
                                        title="modal_image"
                                        autoPlay
                                    />
                                :
                                <>
                                    <div className="card-media3">
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
                                            image={`${serverUrl}${news.image?.url}`}
                                            title="modal_image"
                                            autoPlay
                                        />
                                    </div>
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

export default LowCarousel