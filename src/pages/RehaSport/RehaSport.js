import React from 'react';
import './RehaSport.css'
import philipp from '../../assets/reha/img 7.jpeg'


const RehaSport = () => {
    return (
        <div className='content'>
            <div className='cd_home_block'>
                <div className='cd_home_text'>
                    <h2>Rehasport – Von der Krankenkasse übernommen.</h2>
                    <p>Rehabilitationssport hat das Ziel, Ausdauer, Kraft, Koordination und Flexibilität zu verbessern, sowie das Selbstbewusstsein zu stärken und Hilfe zur Selbsthilfe zu bieten. Hilfe zur Selbsthilfe heißt, die Eigenverantwortlichkeit für die Gesundheit zu stärken und die Patienten zum langfristigen, selbstständigen und eigenverantwortlichen Bewegungstraining zu motivieren. Gerade nach einer postoperativen Reha oder nach krankengymnastischen/ physiotherapeutischen Behandlungen stabilisiert der Rehasport durch das weiterführende Training den Behandlungserfolg.</p>
                </div>
                <img alt='happy person' src={philipp}></img>
            </div>

            <div className='cd_home_block'>
                <div className='cd_home_text'>
                    <h2>Wie funktioniert die Abrechnung mit der Krankenkasse?</h2>
                    <p>Um von der Krankenkasse übernommen zu werden, wird eine Verordnung von deinem Hausarzt benötigt.
                    Eine solche Verordnung darf von jedem niedergelassenen Arzt ausgestellt werden und ist nach §44
                        des Sozialgesetzbuches (<a href='https://www.sozialgesetzbuch-sgb.de/sgbix/64.html'>§ 64 SGB IX</a>)
                        eine Ergänzende Leistung, welche dir zusteht und nicht verwehrt werden kann. Der Reha Antrag (KV 56)
                        liegt oft in der Praxis deines Arztes vor, sodass du diesen nicht im Vorfeld besorgen musst.
                        Frag also einfach bei deinem nächsten Hausarztbesuch nach einer Reha-Sport Verordnung!</p>
                </div>
            </div>

            <div className='cd_home_block'>
                <div className='cd_home_text'>
                    <h2>Wie viele Einheiten umfasst eine genehmigte Verordnung?</h2>
                    <p>In der Regel umfasst die Verordnung 50 Übungseinheiten, die Gültigkeit ist auf 18 Monate beschränkt.
                        Das heißt, du kannst über ein Jahr lang einmal die Woche kostenlos zum Reha-Sport zu uns ins Studio kommen.</p>
                </div>
            </div>

            <div className='cd_home_block'>
                <div className='cd_home_text'>
                    <h2>Kann ich vor oder nach dem Kurs bei euch trainieren?</h2>
                    <p>Ja, wir haben mit den aktiven Reha-Sportlern bei uns im Studio ein kleines Zusatzpaket erarbeitet, um die Besuche bei uns bestmöglich zu gestalten.
                    Mit einer Zuzahlung kannst du vor und nach dem Kurs auch auf der Trainingsfläche trainieren und wir erweitern den Kurs für dich von 45 auf 60 min.
                        Du kannst aber individuell entscheiden, ob du diesen Vorteil in Anspruch nehmen willst. 
                        <br/><br/> 
                        Wir haben noch weitere Angebote für Rehasportler, die sich in unserem Studio wohlfühlen. Sollte dich das interessieren, dann sprech uns einfach darauf an!</p>
                </div>
            </div>

            <div className='cd_home_block'>
                <div className='cd_home_text'>
                    <h2>Wie oft bietet ihr Rehasport an?</h2>
                    <p>Die genauen Zeiten findest du auf unserem <a href='/kurse'>Kursplan</a>.</p>
                </div>
            </div>
        </div>
    );
}

export default RehaSport;