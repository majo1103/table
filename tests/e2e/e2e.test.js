module.exports = {
  "Url is login": function(browser) {
    // Browser is the browser that is being controlled
    browser
      .url("http://localhost:8080")
      .assert.urlEquals("http://localhost:8080/login").end;
  },
  "Url table is not accessible without login": function(browser) {
    browser
      .url("http://localhost:8080/table")
      .assert.urlEquals("http://localhost:8080/login").end;
  }
};
