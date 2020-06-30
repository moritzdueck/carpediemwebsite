import React, { useEffect, useState } from 'react';
import NewsAPI from '../../api/NewsAPI';
import './News.css'

const News = () => {

    const [data, setData] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const [showing, setShowing] = useState(!sessionStorage.getItem('hideBanner'));


    useEffect(() => {
        setShowing(!sessionStorage.getItem('hideBanner'))
        setLoading(true);
        NewsAPI.getNewsUpdate()
            .then(setData)
            .then(() => setLoading(false))
            .catch(err => {
                console.error(err);
                setError(err)
            })
    }, [])

    return (
        <React.Fragment>
            {showing && data && data.items && data.items[0] && data.items[0].description && <div id="cd_news_wrapper">
                <div>
                    <button id='news_button' onClick={() => { setShowing(false); sessionStorage.setItem('hideBanner', true); }}>X</button>
                    <h2 id='cd_news_heading'> Aktuelles: </h2>
                    {data && data.items[0] && data.items[0].description && <p className='cd_course_descr' dangerouslySetInnerHTML={{ __html: data.items[0].description }} />}
                    {error && <p className='cd_course_descr' dangerouslySetInnerHTML={{ __html: error }} />}
                    {loading && <p>Loading</p>}
                </div>
            </div>
            }
        </React.Fragment>

    );
}

export default News;