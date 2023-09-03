const btn = document.querySelector(".btn");
const urlIP = "https://api.ipify.org/?format=json";

btn.addEventListener("click", function (e) {
  e.preventDefault();
  getIP();
});

async function getIP() {
  try {
    const response = await (await fetch(urlIP)).json();
    getAddress(response.ip);
  } catch (e) {
    console.log(e.message);
  }
}

async function getAddress(ip) {
  try {
    const getAddress = await (await fetch(`http://ip-api.com/json/${ip}`)).json();
    const info = document.querySelector('.info');
    info.textContent = `${getAddress.country}, ${getAddress.regionName}, ${getAddress.city}`
  } catch (e) {
    console.log(e.message);
  }
}
