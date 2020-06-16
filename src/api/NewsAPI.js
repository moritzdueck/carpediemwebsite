let API_KEY = "AIzaSyCAdvLqCBFceOeUlfKEX2ufUjuiekbVkAw";
let CALENDAR_ID = "0c6m6im20n2kk86edkc3lpl900@group.calendar.google.com";

export default class NewsAPI {

    static async getNewsUpdate() {
        let response = await   fetch('https://www.googleapis.com/calendar/v3/calendars/' + CALENDAR_ID
        + "/events?key=" + API_KEY
        + '&timeZone=Europe%2FBerlin&singleEvents=true')
        let data = await response.json()
        return data;    
    }
}



