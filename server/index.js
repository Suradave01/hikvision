const express = require("express");
const app = express();
const cors = require("cors");
const port = 3030;
const Stream = require("node-rtsp-stream-jsmpeg");
const onvif = require("node-onvif");
const fs = require("fs");

app.use(cors());
const device = new onvif.OnvifDevice({
  xaddr: "http://90.10.100.128/onvif/device_service",
  user: "admin",
  pass: "123qwe%$",
});
app.get("/snapshot", function (req, res) {
  device
    .init()
    .then(() => {
      console.log("fetching the data of the snapshot...");
      return device.fetchSnapshot();
    })
    .then((response) => {
      fs.writeFileSync("snapshot.jpg", response.body, { encoding: "binary" });
      res.send("done!");
    })
    .catch((error) => {
      console.error(error);
    });
});
app.get("/picture", function (req, res) {
  fs.readFile("./snapshot.jpg", function (err, data) {
    res.writeHead(200, { "Content-Type": "image/jpg" });
    res.end(data, "Base64");
  });
});

const options = {
  name: "mainStream",
  url: "rtsp://admin:123qwe%$@90.10.100.128:554/Streaming/Channels/101?transportmode=unicast&profile=Profile_1",
  wsPort: 3003,
};

stream = new Stream(options);
stream.start();
app.listen(port, () => console.log("Success", port));

// // console.log("Start the discovery process.");
// // onvif
// //   .startProbe()
// //   .then((device_info_list) => {
// //     console.log(device_info_list.length + " devices were found.");
// //     device_info_list.forEach((info) => {
// //       console.log("- " + info.urn);
// //       console.log("  - " + info.name);
// //       console.log("  - " + info.xaddrs[0]);
// //     });
// //   })
// //   .catch((error) => {
// //     console.error(error);
// //   })

// // let device = new onvif.OnvifDevice({
// //   xaddr: "http://90.10.100.128/onvif/device_service",
// //   user: "admin",
// //   pass: "123qwe%$",
// // });

// // device
// //   .init()
// //   .then((info) => {
// //     let profile = device.getCurrentProfile();
// //     console.log(JSON.stringify(profile, null, "  "));
// //   })
// //   .catch((error) => {
// //     console.error(error);
// //   });
