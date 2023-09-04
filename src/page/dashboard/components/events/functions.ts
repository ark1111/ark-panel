const weekDays = ["M", "T", "W", "T", "F", "S", "S"];
const weekDaysFa = ["ش", "ی", "د", "س", "چ", "پ", "ج"];
const weekDaysFaIndex = [2, 3, 4, 5, 6, 0, 1];
export const createWeek = (language?: string) => {
  let today = new Date();
  let day = today.getDay();
  let todayIndex = day === 0 ? 6 : day - 1;
  let week = [];
  console.log("day");
  console.log(day);
  if (language !== "fa") {
    for (let i = 1; i < 8; i++) {
      let diff = day - i;
      const d = new Date();
      week.push({
        id: i,
        day: weekDays[i - 1],
        date: d.setDate(d.getDate() - diff),
      });
    }
  } else {
    day = weekDaysFaIndex[day];
    todayIndex = day === 0 ? 6 : day - 1;
    for (let i = 1; i < 8; i++) {
      let diff = day - i;
      const d = new Date();
      week.push({
        id: i,
        day: weekDaysFa[i - 1],
        date: d.setDate(d.getDate() - diff),
      });
    }
  }
  return {
    week,
    todayIndex,
  };
};
