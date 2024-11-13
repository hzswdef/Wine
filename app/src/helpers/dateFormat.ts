import dayjs from "dayjs";

const dateFormat = (
  date: dayjs.ConfigType,
  format: "MM/DD/YYYY" | "MMMM D, YYYY" = "MM/DD/YYYY",
): string => {
  return dayjs(date).format(format);
};

export default dateFormat;
