import { intervalToDuration } from "date-fns";

import { pluralize } from "@shared/helpers";

import type { IExperience } from "../_models/types";

export const getFullExperienceDuration = (workExperience: IExperience[]) => {
  const fullDuration = workExperience.reduce(
    (acc, experienceItem) => {
      const { months = 0, years = 0 } = intervalToDuration({
        end: experienceItem.endDate || new Date(),
        start: experienceItem.startDate
      });

      if (acc.months === 12) {
        return { months: 0 + months, years: acc.years + years + 1 };
      }

      return { months: acc.months + months, years: acc.years + years };
    },
    { months: 0, years: 0 } as { months: number; years: number }
  );

  return `${pluralize(fullDuration.years, "year")} ${pluralize(fullDuration.months, "month")}`;
};
