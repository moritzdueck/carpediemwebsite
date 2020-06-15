import React from 'react';
import './Gesundheit.css'
import back from '../../assets/stock/back.jpg'
import claudia from '../../assets/gesundheit/img 13.jpeg'
import pair from '../../assets/gesundheit/img 6.jpeg'
import moritz from '../../assets/gesundheit/img 32.jpeg'


const Gesundheit = () => {
    return (
        <div className='content'>
            <div className='cd_home_block img_left'>
                <div className='cd_home_text'>
                    <h2>Spaß an der Bewegung</h2>
                    <p>Sport soll dem Körper gut tun – aber auch dem Geist. Wir alle treiben viel Sport, haben aber nie den Spaß daran verloren. Es ist uns wichtig, dass Du gerne zu uns kommst und glücklich wieder gehst. Dann bleibt der Schweinehund auch von ganz allein Zuhaus'.</p>
                </div>
                <img alt='unser team' src={claudia}></img>
            </div>
            <div className='cd_content_divider' />
            <div className='cd_home_block img_right'>
                <div className='cd_home_text'>
                    <h2>Gesundheit verbessern</h2>
                    <p>Fast jeder zweite Deutsche treibt heutzutage kaum noch oder gar keinen Sport mehr. Dabei ist Sport ungemein wichtig für ein gesundes Leben. Er stärkt das Immunsystem, hält das Herz-Kreislauf-System fit und kann einer Vielzahl von Krankheiten vorbeugen.</p>
                </div>
                <img alt='unser team' src={pair}></img>
            </div>
            <div className='cd_content_divider' />
            <div className='cd_home_block img_left'>
                <div className='cd_home_text'>
                    <h2>Fit im Alltag</h2>
                    <p>Wer regelmäßig Sport treibt, verändert sein Leben. Ein gestärktes Selbstwertgefühl, ein selbstbewussteres Auftreten oder höhere Belastbarkeit. Gerade im Alltag trägt die harte Arbeit Früchte.</p>
                </div>
                <img alt='unser team' src={moritz}></img>
            </div>
            <div className='cd_content_divider' />
            <div className='cd_home_block img_right'>
                <div className='cd_home_text'>
                    <h2>Physiotherapeutisches Know-How</h2>
                    <p>Solltest du nach Verletzungen oder Krankheiten wieder mit dem Sport anfangen wollen, sind wir bestens aufgestellt, Dich dabei zu unterstützen. Mit unserem ausgebildeten Physiotherapeuten können wir Dir eine optimale Betreuung gewährleisten.</p>
                </div>
                <img alt='unser team' src={back}></img>
            </div>
        </div>
    );
}

export default Gesundheit;