const timeWord = require('./timeWord');

describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });
  test('time 00:00',()=>{
    expect(timeWord('00:00')).toBe('Midnight ');
  });
  test('time 00:12',()=>{
    expect(timeWord('00:12')).toBe('twelve twelve am');
  });
  test('time 01:00',()=>{
    expect(timeWord('01:00')).toBe("one  o'clock am");
  });
  test('time 06:01',()=>{
    expect(timeWord('06:01')).toBe('six oh one am');
  });
  test('time 06:10',()=>{
    expect(timeWord('06:10')).toBe('six ten am');
  });
  test('time 00:12',()=>{
    expect(timeWord('00:12')).toBe('twelve twelve am');
  });
  test('time 00:12',()=>{
    expect(timeWord('00:12')).toBe('twelve twelve am');
  });
  test('time 06:18',()=>{
    expect(timeWord('06:18')).toBe('six eighteen am');
  });
  test('time 06:30',()=>{
    expect(timeWord('06:30')).toBe('six thirty am');
  });
  test('time 10:34',()=>{
    expect(timeWord('10:34')).toBe('ten thirty four am');
  });
  test('time 12:00',()=>{
    expect(timeWord('12:00')).toBe('noon ');
  });
  test('time 12:09',()=>{
    expect(timeWord('12:09')).toBe('twelve oh nine pm');
  });
  test('time 23:23',()=>{
    expect(timeWord('23:23')).toBe('eleven twenty three pm');
  });
});