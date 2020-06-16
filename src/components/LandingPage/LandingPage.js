import React, { useEffect, useState } from 'react';
import './LandingPage.css'
import svg from '../../assets/text-overlay.svg'
import logo from '../../assets/cd_black.svg'


const LandingPage = () => {
    const [showing, setShowing] = useState(!sessionStorage.getItem('hideWelcomeScreen'));
    useEffect(() => {
        if(showing){
            document.getElementsByTagName('body')[0].style.overflow='hidden'
            const handler = (e)=>{            
                document.getElementById('cd_welcome').classList.add('collapse')
                setTimeout(() => {
                    console.log('test');
                    setShowing(false); 
                    sessionStorage.setItem('hideWelcomeScreen', true);
                    document.getElementsByTagName('body')[0].style.overflow=''
                }, 1000)    
                document.removeEventListener('click',handler);
            }
            document.addEventListener('click', handler);
            
        }    
    }, [showing])

    return (
        <React.Fragment>
            {showing
                && <div id="cd_welcome">
                    <button id='welcome_button'>Lerne uns kennen</button>
                    <div id='cd_welcome_message'>
                        <div id='cd_welcome_heading'>
                            <h2> Willkommen im Carpe Diem</h2>
                            <p>Dein Sportstudio, deine Familie.</p>
                        </div>
                        <img src={svg} alt='welcome' />
                    </div>
                    <img id='cd_welcome_logo' src={logo} alt='logo' />
                </div>
            }
        </React.Fragment>

    );
}

export default LandingPage;