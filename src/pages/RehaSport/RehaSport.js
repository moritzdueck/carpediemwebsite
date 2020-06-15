import React from 'react';
import './RehaSport.css'
import philipp from '../../assets/reha/img 7.jpeg'


const RehaSport = () => {
    return (
        <div className='content'>
            <div className='cd_home_block'>
                <div className='cd_home_text'>
                    <h2>Reha-Sport – Von der Krankenkasse bezuschusst.</h2>
                    <p>Rehabilitationssport hat das Ziel, Ausdauer, Kraft, Koordination und Flexibilität zu verbessern, sowie das Selbstbewusstsein zu stärken und Hilfe zur Selbsthilfe zu bieten. Hilfe zur Selbsthilfe heißt, die Eigenverantwortlichkeit für die Gesundheit zu stärken und die Patienten zum langfristigen, selbstständigen und eigenverantwortlichen Bewegungstraining zu motivieren. Gerade nach einer postoperativen Reha oder nach krankengymnastischen/ physiotherapeutischen Behandlungen stabilisiert der Rehasport durch das weiterführende Training den Behandlungserfolg.</p>
                </div>
                <img alt='happy person' src={philipp}></img>
            </div>

            <div className='cd_home_block'>
                <div className='cd_home_text'>
                    <h2>Wie funktioniert die Abrechnung mit der Krankenkasse?</h2>
                    <p>Hier brauchen wir ein paar Informationen und am besten eine Auflistung der nötigen Schritte.</p>
                </div>
            </div>
        </div>
    );
}

export default RehaSport;