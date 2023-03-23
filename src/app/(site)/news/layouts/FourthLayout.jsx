import { Grid } from "@mui/material"
import MediumCarousel from "../components/MediumCarousel"

function FourthLayout({responsive, allNews, handleOpen, setNotice, setPosition, findExtension, direction}) {
    return (
        <Grid 
            container 
            spacing={2} 
            direction={direction}
        >
            <Grid item md={4} xs={12}>
                <Grid 
                    container 
                    spacing={1} 
                    sx={{
                        backgroundColor: 'transparent', 
                        height: {xs: 'calc(100vh - 60px)', md: 'calc(100vh - 112px)'},
                    }}
                >
                    <Grid item xs={12}>
                        {
                            allNews
                            ?
                            <MediumCarousel
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
                </Grid>
            </Grid>
            <Grid item md={4} xs={12}>
                <Grid 
                    container 
                    spacing={1} 
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
                                allNews={allNews.low1} 
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
                            <MediumCarousel
                                responsive={responsive} 
                                allNews={allNews.low2} 
                                handleOpen={handleOpen} 
                                setNotice={setNotice}
                                setPosition={setPosition}
                                findExtension={findExtension}
                            />
                            : null
                        }
                    </Grid>
                </Grid>
            </Grid>
            <Grid item md={4} xs={12}>
                <Grid 
                    container 
                    spacing={1} 
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
                                allNews={allNews.low3} 
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
                            <MediumCarousel
                                responsive={responsive} 
                                allNews={allNews.low4} 
                                handleOpen={handleOpen} 
                                setNotice={setNotice}
                                setPosition={setPosition}
                                findExtension={findExtension}
                            />
                            : null
                        }
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default FourthLayout
