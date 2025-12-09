fetch("/modules/menu.html")
  .then(response => response.text())
  .then(html => {
    document.getElementById("side").innerHTML = html;
  });