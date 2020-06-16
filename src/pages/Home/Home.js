import React from 'react';
import './Home.css'
import bauers from '../../assets/home/img 17.jpeg'
import claudiaSanne from '../../assets/home/img 1.jpeg'
import sanne from '../../assets/home/img 14.jpeg'
import beratung from '../../assets/home/img 8.jpeg'
import News from '../../pages/News/News';

const Home = () => {
    return (
        <div className='content'>
            <News/>
            <div className='cd_content_divider' />
            
            <div className='cd_home_block'>
                <div className='cd_home_text'>
                    <h2>Fühl' Dich wie Zuhause</h2>
                    <p>Bei uns ist jeder unterschiedlich, aber wir haben alle das selbe Ziel: gemeinsam Sport zu treiben. Ob in der Gruppe oder allein, hier findest Du sicher Deinen Platz.</p>
                </div>
                <img alt='unser team' src={bauers}></img>
            </div>

            <div className='cd_content_divider' />

            <div className='cd_home_block img_left'>
                <div className='cd_home_text'>
                    <h2>Das sind Wir</h2>
                    <p>Susanne und Claudia. Wir haben das Studio vor mehr als zehn Jahren gemeinsam eröffnet und sind seitdem täglich für Euch da. <br /><br /><br /> Susanne ist bereits sieben Marathon gelaufen und beschäftigt sich seit vielen Jahren mit Themen rund um gesunde Ernährung. <br /><br /> Claudia hat mehrfach den Ironman bestritten sowie als Trainerin und Kursleiterin bereits mehr als 20 Jahre Erfahrung gesammelt.
                    </p>
                </div>
                <img alt='happy person' src={claudiaSanne}></img>
            </div>

            <div className='cd_content_divider' />

            <div className='cd_home_block img_right'>
                <div className='cd_home_text'>
                    <h2>Wir sind für Dich da</h2>
                    <p>Man kennt sich. Du bist mehr als ein Kunde, bei uns bist Du Teil einer Familie - und das werden Dir alle anderen Familienmitglieder bestätigen.</p>
                </div>
                <img alt='unser team' src={beratung}></img>
            </div>

            <div className='cd_content_divider' />

            <div className='cd_home_block img_left'>
                <div className='cd_home_text'>
                    <h2>Lerne uns kennen</h2>
                    <p>Wir leben unsere Passion. Ernährung, Sport und Gesundheit sind nicht nur unser Fachgebiet, sondern auch unsere persönliche Überzeugung. Komm' jederzeit vorbei oder kontaktiere uns. Wir freuen uns, Dich kennenzulernen.</p>
                </div>
                <img alt='unser team' src={sanne}></img>
            </div>
        </div>
    );
}

export default Home;