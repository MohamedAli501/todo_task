/*eslint-disable*/

export const languages = (english, arabic) => {
  let htmlRoot = document.documentElement;

  switch (htmlRoot.lang) {
    case "en":
      return english;
    case "ar":
      return arabic;
    default:
      return;
  }
};

// Check language for dirction
export const checkLanguage = (lang) => {
  let htmlRoot = document.documentElement;

  htmlRoot.lang = lang;

  if (htmlRoot.lang === "ar") {
    htmlRoot.dir = "rtl";
  } else {
    htmlRoot.dir = "ltr";
  }
};

// Change Number To Arabic Number
export const ArabicNumber = (number) => {
  return new Intl.NumberFormat("ar-EG").format(number);
};

// Convert Number To Arabic Number
export const ArabicNumbers = (num) => {
  const arabicNumbers =
    "\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669";
  return new String(num).replace(/[0123456789]/g, (d) => {
    return arabicNumbers[d];
  });
};

// Convert Date() To Arabic Date()
export const ArabicDate = (date) => {
  return new Intl.DateTimeFormat("ar-EG").format(new Date(date));
};

// Convert Date & Time To Arabic Date & Time
export const ArabicDateTime = (date) => {
  let options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
    timeZone: "America/Los_Angeles",
  };

  return new Intl.DateTimeFormat("ar-EG", options).format(new Date(date));
};
