var c = document.getElementById("gold-tier");
var ctx = c.getContext("2d");document.getElementById("gold-tier");
const height = 500;
const width = 1000;

var sparkles = [];//format: x, y, size, angle, rotspeed
var star = document.getElementById("star");
//draw loop
setInterval(function(){
    ctx.clearRect(0, 0, width, height);
    ctx.font = "100px georgia";
    ctx.fillStyle = "##ffd761";
    ctx.textAlign = "center";
    ctx.fillText("Gold Tier Sponsor", width/2, 100);

    if (Math.random() < 0.08 && sparkles.length < 2) { 
        sparkles.push([Math.random() * width * 0.9 + 0.05 * width, Math.random() * 70 + 25, 0, Math.random() * 6.28, Math.random() * 0.08 - 0.04]);
     }
    console.log(sparkles.length)
    for (var i = 0; i < sparkles.length; i++){
        var size;
        if (sparkles[i][2] > 50){
            size = 50 - Math.abs(50 - sparkles[i][2]);
        } else {
            size = sparkles[i][2];
        }
        if (size < 0) {
            sparkles[i] = [Math.random() * width, Math.random() * 100, 0, Math.random() * 6.28, Math.random() * 0.08 - 0.04];
            continue;
        }
        ctx.save();
        ctx.translate(sparkles[i][0], sparkles[i][1]);
        ctx.rotate(sparkles[i][3]);
        ctx.drawImage(star, -size/2, -size/2, size, size);
        ctx.restore();
        sparkles[i][2]+=0.5;
        sparkles[i][3]+=sparkles[i][4];
    }
}, 16)