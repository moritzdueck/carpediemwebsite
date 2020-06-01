import DateUtil from "../util/DateUtil";
import CalenderAPI from "./CalenderAPI";
import moment from 'moment-timezone'
jest.mock("../util/DateUtil")

it('returns right time period', () => {
    let aMonday = '2020-05-01'
    let mockValue = moment.tz(aMonday, 'Europe/Berlin')
    let mock = jest.fn()
    mock.mockReturnValue(mockValue)
    DateUtil.getFirstDayOfThisWeek = mock

    expect(CalenderAPI.getTimePeriod(0)).toEqual({timeMin:moment.tz(aMonday, 'Europe/Berlin').startOf('day'), timeMax:moment.tz(aMonday, 'Europe/Berlin').startOf('day').add(7,'days')})
    expect(CalenderAPI.getTimePeriod(1)).toEqual({timeMin:moment.tz(aMonday, 'Europe/Berlin').startOf('day').add(7,'days'), timeMax:moment.tz(aMonday, 'Europe/Berlin').startOf('day').add(14,'days')})
 });