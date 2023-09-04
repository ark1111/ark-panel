const weekDays = ["M", "T", "W", "T", "F", "S", "S"];
export const createWeek = () => {
  let today = new Date();
  let day = today.getDay();
  let week = [];
  console.log("day");
  console.log(day);
  for (let i = 1; i < 8; i++) {
    let diff = day - i;
    const d = new Date();
    week.push({
      id: i,
      day: weekDays[i - 1],
      date: d.setDate(d.getDate() - diff),
    });
  }
  //   const d = new Date();
  //   week.push({
  //     id: 7,
  //     day: weekDays[6],
  //     date: d.setDate(d.getDate() - 7),
  //   });
  console.log("week");
  console.log(week);
  return {
    week,
    todayIndex: day === 0 ? 6 : day - 1,
  };
};
