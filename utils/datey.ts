export function getCurrentDate(separator = ''): string {
  const newDate = new Date();
  const date = newDate.getDate();
  const month = newDate.getMonth() + 1;
  const year = newDate.getFullYear();

  return `${year}${separator}${
    month < 10 ? `0${month}` : `${month}`
  }${separator}${date}`;
}

export function getNextSevenDays(): string[] {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const next7Days = [];
  for (let i = 0; i < 7; i++) {
    next7Days.push(
      days[new Date(Date.now() + (i + 1) * 24 * 60 * 60 * 1000).getDay()]
    );
  }
  return next7Days;
}
