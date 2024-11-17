export const formatDate = (
  myDate: Date | string | undefined | null
): string => {
  if (!myDate) {
    return "Invalid date";
  }

  const dateObj = typeof myDate === "string" ? new Date(myDate) : myDate;

  if (!(dateObj instanceof Date) || isNaN(dateObj.getTime())) {
    return "Invalid date";
  }

  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };

  return new Intl.DateTimeFormat("en-US", options).format(dateObj);
};
