import moment from 'moment-timezone'

export default class DateUtil{
    static getFirstDayOfThisWeek() {
        return DateUtil.getFirstDayOfWeek(moment.tz('Europe/Berlin'))
    }
    
    static getFirstDayOfWeek(day) {
        return day.clone().isoWeekday(1)
    }
}
