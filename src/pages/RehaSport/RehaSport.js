import React from 'react';
import './RehaSport.css'
import philipp from '../../assets/studio_neu 6.jpg'


const RehaSport = () => {
    return (
        <div>
            <div className='cd_home_block_center'>
                <img alt='happy person' src={philipp}></img>
                <div className='cd_home_text'>
                    <h2>Reha-Sport – Von der Krankenkasse bezuschusst.</h2>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        </div>
    );
}

export default RehaSport;