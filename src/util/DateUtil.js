import moment from 'moment-timezone'

export function getFirstDayOfThisWeek() {
    return getFirstDayOfWeek(moment.tz('Europe/Berlin'))
}

export function getFirstDayOfWeek(day) {
    return day.clone().isoWeekday(1)
}

