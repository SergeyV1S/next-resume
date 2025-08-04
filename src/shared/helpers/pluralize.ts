type TPluralForms = "one" | "few" | "many";

type TPluralVariants = "year" | "month" | "day";

const PLURAL_FORMS: Record<TPluralVariants, Record<TPluralForms, string>> = {
  year: {
    one: "год",
    few: "года",
    many: "лет"
  },
  month: {
    one: "месяц",
    few: "месяца",
    many: "месяцев"
  },
  day: {
    one: "день",
    few: "дня",
    many: "дней"
  }
} as const;

export const pluralize = (count: number, plural: TPluralVariants): string => {
  const lastDigit = count % 10;

  if (count > 1 && count <= 4) {
    return `${count} ${PLURAL_FORMS[plural].few}`;
  }

  if ((lastDigit >= 1 && lastDigit <= 4) || count === 1) {
    return `${count} ${PLURAL_FORMS[plural].one}`;
  }

  return `${count} ${PLURAL_FORMS[plural].many}`;
};
