export function validateEmail(text) {
  var regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return regex.test(text);
}

export function validatePassword(text) {
  return text.length >= 4 || text.length === 0;
}

// rules
const availableRules = {
  required(value) {
    return value ? "" : "Pole wymagane";
  },
  min(value, rule) {
    return value.length >= rule.length
      ? ""
      : `Min. liczba znaków: ${rule.length}`;
  },
  email(value) {
    return validateEmail(value) ? "" : "Niepoprawny adres email";
  },
};

//validation
export function validate(rules = [], value) {
  for (let i = 0; i < rules.length; i++) {
    let rule = rules[i];
    if (rule instanceof Object) {
      const errorMessage = availableRules[rule.rule](value, rule);

      if (errorMessage) {
        return errorMessage;
      }
    } else {
      const errorMessage = availableRules[rule](value);
      if (errorMessage) {
        return errorMessage;
      }
    }
  }
  return "";
}
