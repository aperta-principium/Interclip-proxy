var url_string = window.location.href;
var url = new URL(url_string);
var code = url.searchParams.get("code");
if (code != null) {
  console.log(code);
  location.href = "http://uni.hys.cz/r?c=" + code;
}
