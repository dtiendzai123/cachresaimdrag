// cache_res_replace.js

if ($request.url.includes("cache_res.OdVY88vqa9NcdHWx8dKH1EWvhoo~3D")) {
  $httpClient.get("https://raw.githubusercontent.com/dtiendzai123/dragcontencache/main/cache_res.OdVY88vqa9NcdHWx8dKH1EWvhoo~3D.bundle.base64", (err, res, data) => {
    if (err) {
      $done({});
    } else {

      let binaryData = $text.base64Decode(data);
      $done({
        status: 200,
        headers: {
          "Content-Type": "application/octet-stream"
        },
        body: binaryData
      });
    }
  });
} else {
  $done({});
}
