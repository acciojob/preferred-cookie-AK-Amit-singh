//your JS code here. If required.
const fontSize = document.getElementById("fontsize");
const fontColor = document.getElementById("fontcolor");
const form = document.querySelector("form");

// Get saved cookie value
function getCookie(name) {
  const cookies = document.cookie.split(";");

  for (let cookie of cookies) {
    cookie = cookie.trim();

    if (cookie.startsWith(name + "=")) {
      return cookie.substring(name.length + 1);
    }
  }

  return null;
}

// Apply saved preferences when page loads
const savedFontSize = getCookie("fontsize");
const savedFontColor = getCookie("fontcolor");

if (savedFontSize) {
  document.documentElement.style.setProperty(
    "--fontsize",
    savedFontSize + "px"
  );
  fontSize.value = savedFontSize;
}

if (savedFontColor) {
  document.documentElement.style.setProperty(
    "--fontcolor",
    savedFontColor
  );
  fontColor.value = savedFontColor;
}

// Save preferences
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const size = fontSize.value;
  const color = fontColor.value;

  // Save in cookies
  document.cookie = `fontsize=${size}; path=/`;
  document.cookie = `fontcolor=${color}; path=/`;

  // Apply immediately
  document.documentElement.style.setProperty(
    "--fontsize",
    size + "px"
  );

  document.documentElement.style.setProperty(
    "--fontcolor",
    color
  );
});