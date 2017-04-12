var canv = document.createElement("canvas");
canv.width = 600;
canv.height = 600;
document.body.appendChild(canv);
var w = canv.attributes.width.value;
var h = canv.attributes.height.value;
ctx.fillStyle = "rgb(0,0,0)";
ctx.fillRect(0, 0, w, h);
var imgdata = ctx.getImageData(0, 0, w, h);
var pixels = imgdata.data;
var i = 0;
for(var y = 0; y < h; y++)
    for (var x = 0; x < w; x++){
        pixels[i++] = x / w *255;
        pixels[i++] = y / w *255;
        pixels[i++] = 0;
        pixels[i++] = 255;
    }
ctx.putImageData(imgdata, 0, 0);