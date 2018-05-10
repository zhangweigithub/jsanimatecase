



function getStyle(ele,attr){
    if(window.getComputedStyle){
        return window.getComputedStyle(ele,null)[attr];
    }
    return ele.currentStyle[attr];
}





function animate(ele,json,time,fn) {
    clearInterval(ele.timer);
    ele.timer=setInterval(function () {
        var bool=true;
        for (var k in json){
            var star=0;
            if(k==="opacity"){
                star=(getStyle(ele,k)*100||1);
            }else {
                star=parseInt(getStyle(ele,k)||0);
            }


            var speed=(json[k]-star)/10;
            if (speed>0){
                speed=Math.ceil(speed);
            }else if (speed<0){
                speed=Math.floor(speed);
            }else {
                speed=0;
            }


            if (k==="opacity"){
                ele.style[k]=(star+speed)/100;
                ele.style.filter="alpha(opacity="+star+")";
            } else if (k==="zIndex"){
                ele.style.zIndex=json[k];
            } else {
              ele.style[k]=star+speed+"px";
            }

            if (Math.abs((json[k]-star))>Math.abs(speed)){
                bool=false;
            }
        }
            if (bool){
            star=json[k];
            clearInterval(ele.timer);
            if (fn){
                fn();
            }
            }

    },time);


}





