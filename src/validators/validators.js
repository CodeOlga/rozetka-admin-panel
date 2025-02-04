export const isRequired = (value) => (value ? undefined : "Required");

export const minLength2 = (value) =>
  value && value.length >= 2 ? undefined : "Must be at least 2 characters";

export const isNumber = (value) => {
  const numberValue = Number(value);

  if (!value || isNaN(numberValue)) {
    return "Must be a number";
  }

  if (!Number.isInteger(numberValue)) {
    return "Must be an integer";
  }

  return undefined;
};

export const passwordValidation = (value) =>
  value && value.length >= 6
    ? undefined
    : "Password must be at least 6 characters";
