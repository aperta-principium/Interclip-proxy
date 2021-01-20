const url_string = window.location.href;
const url = new URL(url_string);
const code = url.searchParams.get("code");

if (code != null) {
  codeAr = code.split("");
  if (codeAr.length == 5) {
    console.log(code);
    location.href = "https://interclip.app/" + code;
  } else {
      document.write("A code false length assigned");   
  }
} else {
  location.href = "https://interclip.app/";
}
