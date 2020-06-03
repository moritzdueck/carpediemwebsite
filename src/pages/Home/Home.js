import React from 'react';
import './Home.css'
import happy from '../../assets/happy.jpg'
import group from '../../assets/group.jpg'

const Home = () => {
    return (
        <div id='home_content'>
            <div className='cd_home_block'>
                <img alt='happy person' src={happy}></img>
                <div className='cd_home_text'>
                    <h2>Fühl dich wie Zuhause</h2>
                    <p>Wir sind alle unterschiedlich aber haben das selbe Ziel – Dich bestmöglich unterstützen.</p>
                </div>
            </div>

            <div className='cd_home_block_center'>
                <div className='cd_home_text'>
                    <h2>Lerne uns kennen</h2>
                    <p>Wir leben unsere Passion. Ernährung, Sport und Gesundheit sind nicht nur unser Fachgebiet, sondern auch unsere persönliche Überzeugung.</p>
                </div>
                <img alt='unser team' src={group}></img>
            </div>


            <div className='cd_home_block'>
                <div className='cd_home_text'>
                    <h2>Hier findest du uns:</h2>
                    <p>Wir freuen uns schon auf dich.</p>
                </div>
                {/* <iframe title='map' id='cd_gmap' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.057093192939!2d11.246903415937387!3d50.08521792149452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a1817a404bb0a3%3A0x537f17c28bfa2383!2sCarpe%20Diem!5e0!3m2!1sen!2sde!4v1590644668423!5m2!1sen!2sde" frameborder="0" allowfullscreen="" ariaHidden="false" tabindex="0"></iframe> */}
                {/* <iframe title='map' id='cd_gmap' width="600" height="450" frameBorder="0"src="https://www.google.com/maps/embed/v1/search?q=Carpe%20Diem%2C%20Pater-Otto-Hopfenm%C3%BCller-Stra%C3%9Fe%2C%20Weismain%2C%20Germany&key=AIzaSyCAdvLqCBFceOeUlfKEX2ufUjuiekbVkAw" allowFullScreen></iframe> */}
            </div>
         
        </div>
    );
}

export default Home;