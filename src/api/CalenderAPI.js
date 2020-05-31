import { getFirstDayOfThisWeek } from "../util/DateUtil";

let API_KEY = "AIzaSyCAdvLqCBFceOeUlfKEX2ufUjuiekbVkAw";
let CALENDAR_ID = "8b0aqe15nd48l2u9fh745fjfgc@group.calendar.google.com";

export default class CalenderAPI {

    static async getCourses() {
        let timeMin = getFirstDayOfThisWeek().startOf('day')
        let timeMax = timeMin.clone().add(7, 'days')

        let response = await   fetch('https://www.googleapis.com/calendar/v3/calendars/' + CALENDAR_ID
        + "/events?key=" + API_KEY
        + '&timeMax=' + timeMax.toISOString()
        + '&timeMin=' + timeMin.toISOString()
        + '&timeZone=Europe%2FBerlin&singleEvents=true')
        let data = await response.json()
        return data;
        
    }
}



