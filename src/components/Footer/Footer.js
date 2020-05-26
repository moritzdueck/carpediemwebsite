import React from 'react';
import './Footer.css'
import cd_white from '../../assets/cd_white.svg'

const Footer = () => {
    return (
        <React.Fragment>
            <div id='cd_footer'>
                <div>
                    <div>
                        <h4>Unsere Öffnungszeiten</h4>
                        <div className='cd_footer_flex'>
                            <div>Mo - Fr</div>
                            <div>8:15 - 13:00, 16:00 - 21:30 Uhr</div>
                        </div>
                        <div className='cd_footer_flex'>
                            <div>Sa</div>
                            <div>15:00 - 18:00 Uhr</div>
                        </div>
                        <div className='cd_footer_flex'>
                            <div>So</div>
                            <div>9:00 - 12:00 Uhr</div>
                        </div>
                    </div>
                    <div>
                        <h4>Telefon</h4>
                        <p>09575/982573</p>
                    </div>
                </div>
                <div>
                    <img src={cd_white} alt='logo'></img>
                </div>
                <div>
                    <div>
                        <h4>Adresse</h4>
                        <p>Pater-Otto-Hopfenmüller Str. 1a <br />96260 Weismain</p>
                        <h4>Download</h4>
                        <div id='cd_footer_download'>
                            KURSPLAN
                        </div>

                    </div>
                </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <a href='/impressum' className='cd_footer_link'>Impressum</a>
                <a href='/datenschutz' className='cd_footer_link'>Datenschutz</a>
            </div>
        </React.Fragment>
    );
}

export default Footer;