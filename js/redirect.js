var url_string = window.location.href;
var url = new URL(url_string);
var code = url.searchParams.get("code");
if (code != null) {
  codeAr = code.split("");
  if (codeAr.length == 5) {
    console.log(code);
    location.href = "http://uni.hys.cz/r?c=" + code;
  } else {
      document.write("A code false length assigned");   
  }
} else {
  location.href = "http://uni.hys.cz/";
}
/*
    if (location.href.match(/^http:/i)) {
        location.replace(location.href.replace(/^http:/i, "https:"));
      }
*/      