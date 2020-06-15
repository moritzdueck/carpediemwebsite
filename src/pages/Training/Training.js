import React from 'react';
import './Training.css'
import belly from '../../assets/training/img 41.jpg'
import yvonne from '../../assets/training/img 26.jpeg'
import moritz from '../../assets/training/img 21.jpeg'
import geraet from '../../assets/training/img 18.jpeg'
import slings from '../../assets/training/img 24.jpeg'


const Training = () => {
    return (
        <div className='content'>
            <div className='cd_home_block'>
                <div className='cd_home_text'>
                    <h2>Ausdauer, Kraft und ein gutes Gefühl</h2>
                    <p>Wir treiben Sport aus Überzeugung. Du fühlst Dich besser, baust auf natürliche Weise Stress ab und stärkst dabei Deine Fitness und Gesundheit. Ob es mehr Kraft, Ausdauer oder die Figur ist, die Dich ins Studio treibt - wir freuen uns darauf, mit Dir in Topform zu kommen.</p>
                </div>
                <img alt='unser team' src={yvonne}></img>
            </div>
            <div className='cd_content_divider' />
            <div className='cd_home_block img_right'>
                <div className='cd_home_text'>
                    <h2>Große Ambitionen?</h2>
                    <p> Ob Ironman und Marathon, Leichtathletik oder Body-Building-Meisterschaft. Wir vereinen in unserem Team jede Menge Erfahrung. Du kannst Dir sicher sein, dass Dir bei uns immer jemand weiterhelfen kann – auch wenn Du mehr willst.</p>
                </div>
                <img alt='unser team' src={moritz}></img>
            </div>
            <div className='cd_content_divider' />
            <div className='cd_home_block img_left'>
                <div className='cd_home_text'>
                    <h2>Fühl' Dich Wohl</h2>
                    <p>Bei uns auf der Trainingsfläche verfolgt jeder sein eigenes Ziel. Keine Vergleiche. Keine Show. Es ist uns wichtig, dass jeder genau so trainieren kann, wie sie oder er sich wohlfühlt. </p>
                </div>
                <img alt='unser team' src={belly}></img>
            </div>
            <div className='cd_content_divider' />
            <div className='cd_home_block img_right'>
                <div className='cd_home_text'>
                    <h2>Professionelle Geräte</h2>
                    <p>Qualität vor Quantität. Wir haben unsere Geräte gezielt ausgewählt und darauf geachtet, ein möglichst hochwertiges Training anbieten zu können. Nach alten Hanteln und rostigen Geräten suchst Du bei uns vergeblich.</p>
                </div>
                <img alt='unser team' src={geraet}></img>
            </div>
            <div className='cd_content_divider' />
            <div className='cd_home_block'>
                <div className='cd_home_text'>
                    <h2>Persönliche Betreuung</h2>
                    <p>Im Mittelpunkt stehst immer Du. Bei uns endet die Betreuung nicht beim persönlichen Trainingsplan. Wir sind bei allen Fragen für Dich da und begleiten Dich auf Deinem individuellen Weg.</p>
                </div>
                <img alt='unser team' src={slings}></img>
            </div>
        </div>
    );
}

export default Training;