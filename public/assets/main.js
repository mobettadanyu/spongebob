var input = document.querySelector("#url");

input.addEventListener("keyup", key => {
  if (key.keyCode == 13) {
    if (!input.value.trim().length) return;
    window.location.assign(`/prox/?url=${btoa(input.value)}`);
  }
});

document.querySelector("#initiate").addEventListener("click", () => {
  if (!input.value.trim().length) return;
  window.location.assign(`/prox/?url=${btoa(input.value)}`);
});

function youtube() {
  var url = document.getElementById("youtube").value;
if (url.indexOf('www.youtube.com') !== - 1) {
  window.location = url.replace(/youtube.com/, 'invidious.048596.xyz');
} else if (url.indexOf('www.youtu.be') !== - 1) {
    window.location = url.replace(/youtu.be/, 'invidious.048596.xyz');
}
}

function google(){
  window.top.postMessage('hello', '*')

  window.location="https://google.com"
  
}