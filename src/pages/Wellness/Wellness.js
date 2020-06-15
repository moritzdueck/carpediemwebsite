import React from 'react';
import './Wellness.css'
import sauna from '../../assets/wellness/img 39.jpg'
import dusche from '../../assets/wellness/img 40.jpg'



const Wellness = () => {
    return (
        <div className='content'>
            <div className='cd_home_block img_left'>
                <div className='cd_home_text'>
                    <h2>Sauna</h2>
                    <p>Unsere Sauna lädt Dich nach dem Training zum Entspannen ein. Ein Saunabesuch nach dem Workout lockert die strapazierten Muskeln, beugt Infektionen vor und sorgt für ein besonderes Wohlgefühl.</p>
                </div>
                <img alt='unser team' src={sauna}></img>
            </div>
            <div className='cd_content_divider' />
            <div className='cd_home_block img_right'>
                <div className='cd_home_text'>
                    <h2>Wellness</h2>
                    <p>Im Ruheraum vor der Sauna findest Du im Anschluss Erfrischung und Ruhe. Auf Nachfrage können wir Dir eine professionelle Massage von einem unserer ausgebildeten Masseure anbieten.</p>
                </div>
                <img alt='unser team' src={dusche}></img>
            </div>
        </div>
    );
}

export default Wellness;