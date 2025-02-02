// Валидация для поля User Name
export const isRequired = (value) => (value ? undefined : "Required");

// Валидация для поля User, чтобы оно содержало минимум 2 буквы
export const minLength2 = (value) =>
  value && value.length >= 2 ? undefined : "Must be at least 2 characters";

// Валидация для проверки, что значение - это число
// const isNumber = (value) =>
//   value && !isNaN(Number(value)) ? undefined : "Must be a number";
export const isNumber = (value) => {
  const numberValue = Number(value);

  if (!value || isNaN(numberValue)) {
    return "Must be a number";
  }

  if (!Number.isInteger(numberValue)) {
    return "Must be an integer";
  }

  return undefined; // Если оба условия пройдены, возвращаем undefined
};

export const passwordValidation = (value) =>
  value && value.length >= 6
    ? undefined
    : "Password must be at least 6 characters";
