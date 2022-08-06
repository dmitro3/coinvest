function getEllipsisText(str) {
    if (str.length > 35) {
      return str.substr(0, 4) + '...' + str.substr(str.length-4, str.length);
    }
    return str;
  }

  export default getEllipsisText;