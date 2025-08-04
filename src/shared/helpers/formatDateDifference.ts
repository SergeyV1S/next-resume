import { differenceInMonths, differenceInYears } from "date-fns";

import { pluralize } from "./pluralize";

export const formatDateDifference = (end: number = +new Date(), start: number) => {
  if (start >= end || start === 0 || end === 0) {
    return "";
  }

  const years = differenceInYears(end, start);
  const months = differenceInMonths(end, start) % 12;

  return [years && pluralize(years, "year"), months && pluralize(months, "month")]
    .filter(Boolean)
    .join(" ");
};
