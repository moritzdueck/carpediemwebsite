import React from 'react';
import './Kurs.css'

const Kurs = (props) => {
    return (
        <div className={'cd_courses_course' + (props.active? ' cd_active_course':'')} key={props.item.id} id={props.item.id} onClick={(e)=>{props.click(e)}}>
            <p className='cd_course_name'>{props.item.name}</p>
            <p className='cd_course_time'>{props.item.start} - {props.item.end}</p>
            {props.active&& <p className='cd_course_descr' dangerouslySetInnerHTML={{__html: props.item.description}} />}
        </div >
    );
}

export default Kurs;