/**
 * @method trimString To get trimmed string
 * @param string text value
 * @returns string
 */
export const trimString = (string) => {
    if (string.length > 30) {
      return str.substring(0, 27) + "...";
    } else {
      return str;
    }
};