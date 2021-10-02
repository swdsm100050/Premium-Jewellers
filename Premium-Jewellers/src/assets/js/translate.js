let timer = setInterval(checkScriptExists, 3000);
function checkScriptExists() {
  var google_script_url =
    "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  if ($("script[src*='" + google_script_url + "']")[0]) {
    // run google translate function
    new google.translate.TranslateElement(
      {
        pageLanguage: "en",
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false,
      },
      "google_translate_element"
    );
    clearInterval(timer);
    return;
  }
}