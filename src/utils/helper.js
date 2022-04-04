export const lineBreak = (str) =>
  str
    .split("")
    .map((item) => item.replace("\n", "<br />"))
    .join("");
