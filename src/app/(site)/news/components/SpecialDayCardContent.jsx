import Moment from 'moment';
import 'moment/locale/es';

function SpecialDayCardContent({news, level}) {
    const selectRelevance = (level) => {
        switch(level){
            case 'principal':
                return (
                    <>
                        <div className="title-content">
                            <h3>{news.title}</h3>
                            <h4 className="intro">{Moment(news.date).format('LL')}</h4>
                        </div>
                        <div className="card-info">
                            {news.description}
                        </div>
                        <div className="gradient-overlay"></div>
                        <div className="color-overlay"></div>
                    </>
                )

            case 'medium':
                return (
                    <>
                        <div className="title-content2">
                            <h3>{news.title}</h3>
                            <h4 className="intro">{Moment(news.date).format('LL')}</h4>
                        </div>
                        <div className="card2-info">
                            {news.description} 
                        </div>
                        <div className="gradient-overlay"></div>
                        <div className="color-overlay"></div>
                    </>)
            case 'low':
                return (
                    <div className="title-content3">
                        <h3>{news.title}</h3>
                        <h4 className="intro">{Moment(news.date).format('LL')}</h4>
                    </div>
                )
        }
    }

    return (
        <>
            {
                selectRelevance(level)
            }
        </>
    )
}

export default SpecialDayCardContent
