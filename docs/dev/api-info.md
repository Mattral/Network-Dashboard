IPv4
API URL, Response Type,	Sample Output (IPv4)
https://api.ipify.org, text, 98.207.254.136
https://api.ipify.org?format=json, json, {"ip":"98.207.254.136"}
https://api.ipify.org?format=jsonp, jsonp, callback({"ip":"98.207.254.136"});
https://api.ipify.org?format=jsonp&callback=getip, jsonp, getip({"ip":"98.207.254.136"});




Universal: IPv4/IPv6
API URL, Response Type, Sample Output (IPv4/IPv6)
https://api64.ipify.org, text, 98.207.254.136 or 2a00:1450:400f:80d::200e
https://api64.ipify.org?format=json, json, {"ip":"98.207.254.136"} or {"ip":"2a00:1450:400f:80d::200e"}
https://api64.ipify.org?format=jsonp, jsonp, callback({"ip":"98.207.254.136"}); or callback({"ip":"2a00:1450:400f:80d::200e"});
https://api64.ipify.org?format=jsonp&callback=getip, jsonp, getip({"ip":"98.207.254.136"}); or getip({"ip":"2a00:1450:400f:80d::200e"});



Example code (Node JS) 

```
var http = require('http');

http.get({'host': 'api.ipify.org', 'port': 80, 'path': '/'}, function(resp) {
  resp.on('data', function(ip) {
    console.log("My public IP address is: " + ip);
  });
});
```