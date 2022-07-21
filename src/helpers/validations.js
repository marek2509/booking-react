export function validateEmail(text) {
  var regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return regex.test(text);
}

export function validatePassword(text) {
  return text.length >= 4 || text.length === 0;
}
