var pars = {
    rotateNum: 8,
    body: '.wrapper',
    clickCb: clickCbFun,
    renderCb: renderCbFun
}

var lottery = new Lottery(pars);
function clickCbFun() {
    var random = Math.floor(Math.random() * 360);
    lottery.goRotate(random);
}
function renderCbFun(deg) {
    var str = '';
    if(deg >= 0 && deg < 45) {
        str = '空气';
    }else if(deg >= 45 && deg < 90 || deg >= 135 && deg < 180 || deg >= 225 && deg < 270 || deg >= 315 && deg < 360) {
        str = '微信发6块钱红包给我';
    }else if(deg >= 90 && deg < 135 || deg >= 270 && deg < 315) {
        str = '阳阳大佬一个，仅限自提';
    }else if(deg >= 180 && deg < 225) {
        str = '星爸爸';
    }
    alert('恭喜你获得'+str);
}