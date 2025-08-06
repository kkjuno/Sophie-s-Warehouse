export function getToday() {
  return formatDate(new Date());
}

export function formatDate(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}${month}${day}`;
}

export function getPastDate(
  baseDateStr: string,
  minus: { day?: number; month?: number; year?: number },
) {
  const year = parseInt(baseDateStr.slice(0, 4), 10);
  const month = parseInt(baseDateStr.slice(4, 6), 10) - 1;
  const day = parseInt(baseDateStr.slice(6, 8), 10);

  const base = new Date(year, month, day);
  if (minus.day) base.setDate(base.getDate() - minus.day);
  if (minus.month) base.setMonth(base.getMonth() - minus.month);
  if (minus.year) base.setFullYear(base.getFullYear() - minus.year);

  return formatDate(base);
}
