import React from 'react';
import './Training.css'
import belly from '../../assets/belly.jpg'
import yvonne from '../../assets/studio_neu 17.jpg'
import moritz from '../../assets/studio_neu 23.jpg'
// import course from '../../assets/course.jpg'


const Training = () => {
    return ( 
        <div>
            <div className='cd_home_block_center'>
                <div className='cd_home_text'>
                    <h2>Ausdauer, Kraft und ein gutes Gefühl</h2>
                    <p>Durch dein tägliches Training fühlst du dich ausgeglichen und baust auf natürliche Weise Stress ab, und die Herausforderung, neue Fitnessziele zu erreichen, ist eine tolle Motivation. Egal ob du am liebsten Yogaübungen mit Ausdauereinheiten kombinierst oder joggen gehst – um in Topform zu bleiben, solltest du regelmässig ins Schwitzen geraten und dein Herz zum Rasen bringen. Doch Studien zeigen, dass dadurch auch dein Gehirn besser funktioniert und du dich insgesamt wohler fühlst.</p>
                </div>
                <img alt='unser team' src={yvonne}></img>
            </div>
            <div className='cd_home_block'>
                <div className='cd_home_text'>
                    <h2>Ausdauer, Kraft und ein gutes Gefühl</h2>
                    <p>Durch dein tägliches Training fühlst du dich ausgeglichen und baust auf natürliche Weise Stress ab, und die Herausforderung, neue Fitnessziele zu erreichen, ist eine tolle Motivation. Egal ob du am liebsten Yogaübungen mit Ausdauereinheiten kombinierst oder joggen gehst – um in Topform zu bleiben, solltest du regelmässig ins Schwitzen geraten und dein Herz zum Rasen bringen. Doch Studien zeigen, dass dadurch auch dein Gehirn besser funktioniert und du dich insgesamt wohler fühlst.</p>
                </div>
                <img alt='unser team' src={belly}></img>
            </div>
            <div className='cd_home_block_center'>
                <div className='cd_home_text'>
                    <h2>Ausdauer, Kraft und ein gutes Gefühl</h2>
                    <p>Durch dein tägliches Training fühlst du dich ausgeglichen und baust auf natürliche Weise Stress ab, und die Herausforderung, neue Fitnessziele zu erreichen, ist eine tolle Motivation. Egal ob du am liebsten Yogaübungen mit Ausdauereinheiten kombinierst oder joggen gehst – um in Topform zu bleiben, solltest du regelmässig ins Schwitzen geraten und dein Herz zum Rasen bringen. Doch Studien zeigen, dass dadurch auch dein Gehirn besser funktioniert und du dich insgesamt wohler fühlst.</p>
                </div>
                <img alt='unser team' src={moritz}></img>
            </div>
        </div>
     );
}
 
export default Training;