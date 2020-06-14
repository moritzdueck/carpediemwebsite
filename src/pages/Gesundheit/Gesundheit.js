import React from 'react';
import './Gesundheit.css'
// import greenFruits from '../../assets/greenFruits.jpg'
import back from '../../assets/back.jpg'
import claudia from '../../assets/studio_neu 11.jpg'
import pair from '../../assets/studio_neu 1.jpg'
import moritz from '../../assets/studio_neu 19.jpg'


const Gesundheit = () => {
    return ( 
        <div>
            <div className='cd_home_block'>
                <div className='cd_home_text'>
                    <h2>Spaß an der Bewegung</h2>
                    <p>Durch dein tägliches Training fühlst du dich ausgeglichen und baust auf natürliche Weise Stress ab, und die Herausforderung, neue Fitnessziele zu erreichen, ist eine tolle Motivation. Egal ob du am liebsten Yogaübungen mit Ausdauereinheiten kombinierst oder joggen gehst – um in Topform zu bleiben, solltest du regelmässig ins Schwitzen geraten und dein Herz zum Rasen bringen. Doch Studien zeigen, dass dadurch auch dein Gehirn besser funktioniert und du dich insgesamt wohler fühlst.</p>
                </div>
                <img alt='unser team' src={claudia}></img>
            </div>

            <div className='cd_home_block_center'>
                <img alt='unser team' src={pair}></img>
                <div className='cd_home_text'>
                    <h2>Gesundheit verbessern</h2>
                    <p>Durch dein tägliches Training fühlst du dich ausgeglichen und baust auf natürliche Weise Stress ab, und die Herausforderung, neue Fitnessziele zu erreichen, ist eine tolle Motivation. Egal ob du am liebsten Yogaübungen mit Ausdauereinheiten kombinierst oder joggen gehst – um in Topform zu bleiben, solltest du regelmässig ins Schwitzen geraten und dein Herz zum Rasen bringen. Doch Studien zeigen, dass dadurch auch dein Gehirn besser funktioniert und du dich insgesamt wohler fühlst.</p>
                </div>
            </div>

            <div className='cd_home_block'>
                <div className='cd_home_text'>
                    <h2>Gesundheit verbessern</h2>
                    <p>Durch dein tägliches Training fühlst du dich ausgeglichen und baust auf natürliche Weise Stress ab, und die Herausforderung, neue Fitnessziele zu erreichen, ist eine tolle Motivation. Egal ob du am liebsten Yogaübungen mit Ausdauereinheiten kombinierst oder joggen gehst – um in Topform zu bleiben, solltest du regelmässig ins Schwitzen geraten und dein Herz zum Rasen bringen. Doch Studien zeigen, dass dadurch auch dein Gehirn besser funktioniert und du dich insgesamt wohler fühlst.</p>
                </div>
                <img alt='unser team' src={moritz}></img>
            </div>

            <div className='cd_home_block'>
                <img alt='unser team' src={back}></img>
                <div className='cd_home_text'>
                    <h2>Physiotherapeutische Betreuung</h2>
                    <p>Durch dein tägliches Training fühlst du dich ausgeglichen und baust auf natürliche Weise Stress ab, und die Herausforderung, neue Fitnessziele zu erreichen, ist eine tolle Motivation. Egal ob du am liebsten Yogaübungen mit Ausdauereinheiten kombinierst oder joggen gehst – um in Topform zu bleiben, solltest du regelmässig ins Schwitzen geraten und dein Herz zum Rasen bringen. Doch Studien zeigen, dass dadurch auch dein Gehirn besser funktioniert und du dich insgesamt wohler fühlst.</p>
                </div>
            </div>
        </div>
     );
}
 
export default Gesundheit;