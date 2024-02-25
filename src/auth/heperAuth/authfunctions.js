export const validatePassword = (values) => {
  const errors = {
    symbolsLengthError: { error: false, text: "от 8 до 15 символов" },
    capitalLetterError: { error: false, text: "строчные и прописные буквы" },
    numberRequired: { error: false, text: "минимум 1 цифра" },
    specialSymbolError: {
      error: false,
      text: "минимум 1 спецсимвол !, '', #, $...",
    },
  };

  // Проверка на от 8 до 15 символов
  if (values.password.length < 8) {
    errors.symbolsLengthError.error = true;
  }

  // Проверка на наличие строчных и прописных букв
  if (!/[a-z]/.test(values.password) || !/[A-Z]/.test(values.password)) {
    errors.capitalLetterError.error = true;
  }

  // Проверка на наличие хотя бы одной цифры
  if (!/\d/.test(values.password)) {
    errors.numberRequired.error = true;
  }

  // Проверка на наличие хотя бы одного спецсимвола
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(values.password)) {
    errors.specialSymbolError.error = true;
  }
  return errors;
};
