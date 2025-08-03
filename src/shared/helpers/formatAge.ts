export const formatAge = (age: number) => {
  const lastDigit = age % 10;

  if (lastDigit >= 1 && lastDigit <= 4) {
    return `${age} год`;
  }

  return `${age} лет`;
};
