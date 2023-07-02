class Strings {
  static htmlSpecialChars(str) {
    return str.replace(/[&<>"'`]/g, function (match) {
      return {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
        '`': '&#x60;',
      }[match];
    });
  }
}

module.exports = Strings;
