import React from 'react';
import './Home.css'
import bauers from '../../assets/studio_neu 14.jpg'
import claudiaSanne from '../../assets/studio_neu.jpg'
import claudia from '../../assets/studio_neu 7.jpg'
// import happy from '../../assets/happy.jpg'
// import group from '../../assets/group.jpg'

const Home = () => {
    return (
        <div id='home_content'>
            <div className='cd_home_block'>
                <img alt='happy person' src={claudiaSanne}></img>
                <div className='cd_home_text'>
                    <h2>Fühl dich wie Zuhause</h2>
                    <p>Wir sind alle unterschiedlich aber haben das selbe Ziel – Dich bestmöglich unterstützen.</p>
                </div>
            </div>

            <div className='cd_home_block_center'>
                <div className='cd_home_text'>
                    <h2>Lerne uns kennen</h2>
                    <p>Wir leben unsere Passion. Ernährung, Sport und Gesundheit sind nicht nur unser Fachgebiet, sondern auch unsere persönliche Überzeugung.</p>
                </div>
                <img alt='unser team' src={bauers}></img>
            </div>

            <div className='cd_home_block_center'>
                <div className='cd_home_text'>
                    <h2>Lerne uns kennen</h2>
                    <p>Wir leben unsere Passion. Ernährung, Sport und Gesundheit sind nicht nur unser Fachgebiet, sondern auch unsere persönliche Überzeugung.</p>
                </div>
                <img alt='unser team' src={claudia}></img>
            </div>


         
        </div>
    );
}

export default Home;