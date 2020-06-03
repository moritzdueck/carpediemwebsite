import React from 'react';
import './Footer.css'
import cd_white from '../../assets/cd_white.svg'
import facebook from '../../assets/logo-facebook.svg'
import whatsapp from '../../assets/logo-whatsapp.svg'

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
                        <a className='cd_flat_link' href="tel:09575982573">09575/982573</a>
                        {/* <p>09575/982573</p> */}
                    </div>
                </div>
                <div>
                    <img src={cd_white} alt='logo'></img>
                </div>
                <div>
                    <div>
                        <h4>Adresse</h4>
                        <p>Pater-Otto-Hopfenmüller Str. 1a <br /> 96260 Weismain <br /> <a className='cd_flat_link' href='https://goo.gl/maps/nQMBPMdubwmLNHyz9'>Auf Google Maps anzeigen</a></p>
                        <h4>E-Mail</h4>
                        <p><a className='cd_flat_link' href="mailto:info@carpe-diem-weismain.de">info@carpe-diem-weismain.de</a></p>
                    </div>

                    <div id='cd_social'>
                        <a href='https://de-de.facebook.com/carpediemweismain'><img alt='facebook' className='cd_social_icon' src={facebook} /></a>
                        <a href='#cd_social'><img alt='whatsapp' className='cd_social_icon' src={whatsapp} /></a>
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