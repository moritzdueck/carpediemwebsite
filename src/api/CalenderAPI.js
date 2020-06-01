import DateUtil from "../util/DateUtil";

let API_KEY = "AIzaSyCAdvLqCBFceOeUlfKEX2ufUjuiekbVkAw";
let CALENDAR_ID = "8b0aqe15nd48l2u9fh745fjfgc@group.calendar.google.com";

export default class CalenderAPI {

    static async getCourses(offsetInWeeks) {
        let { timeMax, timeMin } = CalenderAPI.getTimePeriod(offsetInWeeks);

        let response = await   fetch('https://www.googleapis.com/calendar/v3/calendars/' + CALENDAR_ID
        + "/events?key=" + API_KEY
        + '&timeMax=' + timeMax.toISOString()
        + '&timeMin=' + timeMin.toISOString()
        + '&timeZone=Europe%2FBerlin&singleEvents=true')
        let data = await response.json()
        return data;    
    }

    static getTimePeriod(offsetInWeeks) {
        let timeMin = DateUtil.getFirstDayOfThisWeek().startOf('day').add(offsetInWeeks, 'weeks');
        let timeMax = timeMin.clone().add(7, 'days');
        return { timeMax:timeMax, timeMin:timeMin };
    }
}



