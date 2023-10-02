/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum WeekDays {
 MONDAY,
 TUSEDAY,
 WEDNESDAY,
 THURDAY,
 FRIDAY
};

enum WeekEnd {
 SATTURDAY,
 SUNDAY
};

function isWeekend (day: WeekDays | WeekEnd): boolean {
  if(day === WeekEnd.SATTURDAY || day === WeekEnd.SUNDAY ) {
     return true;
  }
  return false;
};