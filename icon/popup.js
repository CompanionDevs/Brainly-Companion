const EXTENSION_WEBSTORE_URL = "https://chrome.google.com/webstore/detail/brainly-companion/pkglomajopcdlnknceabnmbbldpegaoi";
const DISCORD_SERVER_URL = "https://discord.gg/KfwhD3Mbup"; // fails, you should change the link

document.querySelector(".discord-support").onclick = () => window.open(DISCORD_SERVER_URL);
document.querySelector(".rate-us").onclick = () => window.open(EXTENSION_WEBSTORE_URL);
