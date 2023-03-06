const isValid = function (s) {
  return (s.includes("(") &&
    (s.indexOf("(") > s.indexOf(")") || s.charAt(s.length - 1) == "(")) ||
    s.split("").reduce((acc, el) => {
      return el == "(" ? (acc += 1) : acc;
    }, 0) !=
      s.split("").reduce((acc, el) => {
        return el == ")" ? (acc += 1) : acc;
      }, 0) ||
    (s.includes("{") &&
      (s.indexOf("{") > s.indexOf("}") || s.charAt(s.length - 1) == "{")) ||
    s.split("").reduce((acc, el) => {
      return el == "{" ? (acc += 1) : acc;
    }, 0) !=
      s.split("").reduce((acc, el) => {
        return el == "}" ? (acc += 1) : acc;
      }, 0) ||
    (s.includes("[") &&
      (s.indexOf("[") > s.indexOf("]") || s.charAt(s.length - 1) == "[")) ||
    s.split("").reduce((acc, el) => {
      return el == "[" ? (acc += 1) : acc;
    }, 0) !=
      s.split("").reduce((acc, el) => {
        return el == "]" ? (acc += 1) : acc;
      }, 0) ||
    s.includes("(]") ||
    s.includes("(}") ||
    s.includes("{]") ||
    s.includes("{)") ||
    s.includes("[}") ||
    s.includes("[)") ||
    s.length < 1 ||
    s.length % 2 != 0
    ? false
    : true;
};
console.log(isValid("[([]])"));

const isValid2 = function (s) {
  if (s.length < 1 || s.length % 2 != 0) return false;

  if (
    s[0] == "}" ||
    s[0] == "]" ||
    s[0] == ")" ||
    s[s.length - 1] == "{" ||
    s[s.length - 1] == "[" ||
    s[s.length - 1] == "("
  )
    return false;
};
console.log(isValid2("[([]])"));
