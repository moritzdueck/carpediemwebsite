import React, { useState, useEffect } from 'react';
import CalenderAPI from '../../api/CalenderAPI';
import { parseCalenderResponse } from '../../api/util/CalenderResponseParser';
import './Kurse.css'


const Kurse = () => {
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const [weekOffset, setWeekOffset] = useState(0);

    useEffect(() => {
        setLoading(true);

        CalenderAPI.getCourses(weekOffset)
            .then(data => parseCalenderResponse(data.items))
            .then(setData)
            .then(() => setLoading(false))
            .catch(err => {
                console.error(err);
                setError(err)
            })
    }, [weekOffset]);


    return (
        <React.Fragment>
         {data && <div id='cd_courses_week_selection'>
            <button onClick={() => setWeekOffset(weekOffset -1)}>&lt;</button>
            <p>Zeitraum ändern</p>
            <button onClick={() => setWeekOffset(weekOffset + 1)}>&gt;</button>
        </div>}

        <div id='cd_courses_wrapper' style={{ gridTemplateColumns: data ? '1fr'.repeat(data.length) : '' }}>
            {loading && <p>Loading</p>}
            {error && <p>Error</p>}

            {!loading && data && [...data].map(day =>
                <div className='cd_courses_dayCol' key={day[0]}>
                    <h3>{day[0]}</h3>
                    <div className='cd_courses_morning'>
                        {day[1][0].map(item =>
                            <div className='cd_courses_course' key={item.start}>
                                <p className='cd_course_name'>{item.name}</p>
                                <p className='cd_course_time'>{item.start} - {item.end}</p>
                            </div >
                        )}
                    </div>
                    <div className='cd_courses_divider'/>
                    <div className='cd_courses_evening'>
                        {day[1][1].map(item =>
                            <div className='cd_courses_course' key={item.start}>
                                <p className='cd_course_name'>{item.name}</p>
                                <p className='cd_course_time'>{item.start} - {item.end}</p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
        </React.Fragment>
    )
}
export default Kurse;

