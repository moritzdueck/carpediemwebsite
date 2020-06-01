import DateUtil from "./DateUtil";
import moment from 'moment'

it('returns monday as first day of week when tuesday', () => {
    let aMonday = moment("2020-06-01");
    let aTuesday = moment("2020-06-02");
    expect(DateUtil.getFirstDayOfWeek(aTuesday).utc().format()).toEqual(aMonday.utc().format())
    
 });

it('returns monday as first day of week when sunday', () => {
    let aMonday = moment("2020-06-01");
    let aSunday = moment("2020-06-07");
    
    expect(DateUtil.getFirstDayOfWeek(aSunday).utc().format()).toEqual(aMonday.utc().format())
 });