import moment from 'moment-timezone'

let weekday = new Array(7);
weekday[1] = "Mo";
weekday[2] = "Di";
weekday[3] = "Mi";
weekday[4] = "Do";
weekday[5] = "Fr";
weekday[6] = "Sa";
weekday[7] = "So";

let MORNING = 0
let EVENING = 1


export function parseCalenderResponse(response) {
    let items = new Map()
    response.sort((a,b)=>{
        if(moment.tz(a.start.dateTime,"Europe/Berlin").valueOf()<moment.tz(b.start.dateTime,"Europe/Berlin").valueOf()){
            return -1;
        }
        return 1
    })
    let days = new Set(response.map(item => 
        getDateKey(moment.tz(item.start.dateTime,"Europe/Berlin"))
    ))
    
    for (const day of days) {
        items.set(day, [[], []])
    }

    for (const item of response) {
        let date = moment.tz(item.start.dateTime,"Europe/Berlin")
        let dayTime = MORNING
        if (date.hour() > 12) {
            dayTime = EVENING
        }
        items.get(getDateKey(date))[dayTime].push(getDescription(item))
    }

    return items

}

function getDateKey(moment) {
    return weekday[moment.clone().isoWeekday()] + ', ' + moment.format('DD.MM');
}

function getDescription(item){
    return {
        'name':item.summary,
        'start':moment.tz(item.start.dateTime,"Europe/Berlin").format('HH:mm'),
        'end':moment.tz(item.end.dateTime,"Europe/Berlin").format('HH:mm'),
        'description':item.description,
        'id':item.id
    }
}

