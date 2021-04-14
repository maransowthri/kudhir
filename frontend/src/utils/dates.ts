export const getDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toDateString();
};
