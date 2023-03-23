import { Grid } from "@mui/material"
import LowCarousel from "../components/LowCarousel"
import MediumCarousel from "../components/MediumCarousel"
import PrincipalCarousel from "../components/PrincipalCarousel"

function PrincipalLayout({responsive, allNews, handleOpen, setNotice, setPosition, findExtension, direction}) {
    return (
        <Grid 
            container 
            spacing={2} 
            direction={direction}
        >
            <Grid item md={6} xs={12}>
                {
                    allNews
                    ?
                    <PrincipalCarousel 
                        responsive={responsive} 
                        allNews={allNews.principal} 
                        handleOpen={handleOpen} 
                        setNotice={setNotice}
                        setPosition={setPosition}
                        findExtension={findExtension}
                    />
                    : null
                }
            </Grid>
            <Grid item md={6} xs={12}>
                <Grid 
                    container 
                    spacing={2} 
                    sx={{
                        backgroundColor: 'transparent', 
                        height: {xs: 'calc(100vh - 60px)', md: 'calc(100vh - 120px)'},
                    }}
                >
                    <Grid item xs={12}>
                        {
                            allNews
                            ?
                            <MediumCarousel
                                responsive={responsive} 
                                allNews={allNews.medium} 
                                handleOpen={handleOpen} 
                                setNotice={setNotice}
                                setPosition={setPosition}
                                findExtension={findExtension}
                            />
                            : null
                        }
                    </Grid>
                    <Grid item xs={12}>
                        {
                            allNews
                            ?
                            <Grid 
                                container 
                                spacing={1} 
                                sx={{
                                    backgroundColor: 'transparent', 
                                    height: {xs: 'calc(50vh - 48px)', md: 'calc(50vh - 62px)'},
                                }}
                            >
                                <Grid item xs={6}>
                                    <LowCarousel
                                        responsive={responsive} 
                                        allNews={allNews.low1} 
                                        handleOpen={handleOpen} 
                                        setNotice={setNotice}
                                        setPosition={setPosition}
                                        findExtension={findExtension}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <LowCarousel
                                        responsive={responsive} 
                                        allNews={allNews.low2} 
                                        handleOpen={handleOpen} 
                                        setNotice={setNotice}
                                        setPosition={setPosition}
                                        findExtension={findExtension}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <LowCarousel
                                        responsive={responsive} 
                                        allNews={allNews.low3} 
                                        handleOpen={handleOpen} 
                                        setNotice={setNotice}
                                        setPosition={setPosition}
                                        findExtension={findExtension}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <LowCarousel
                                        responsive={responsive} 
                                        allNews={allNews.low4} 
                                        handleOpen={handleOpen} 
                                        setNotice={setNotice}
                                        setPosition={setPosition}
                                        findExtension={findExtension}
                                    />
                                </Grid>
                            </Grid>
                            : null
                        }
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default PrincipalLayout
