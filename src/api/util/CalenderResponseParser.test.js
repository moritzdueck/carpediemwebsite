import { oneDay } from "./responses";
import { parseCalenderResponse } from "./CalenderResponseParser";


it('parses one day', () => {
    let items = oneDay

    let expected = new Map()
    expected.set('Fr, 01.05',
        [[{
            'start': '09:00',
            'end': '10:00',
            'name': 'Kurs1'
        }],
        [{
            'start': '15:00',
            'end': '16:00',
            'name': 'Kurs2'
        }]])

    expect(parseCalenderResponse(items)).toEqual(expected)
});
