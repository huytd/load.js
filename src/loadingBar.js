var loadingBar={
    width:5,
    keepAfterEnd: false,
    add:function(colorClass, isKeep){
        var e=document.createElement("div");
        e.setAttribute("id","loading-bar");
        e.setAttribute("class","loading-bar");
        if (colorClass != undefined || colorClass != null) {
            e.setAttribute("class","loading-bar " + colorClass);
        }
        if (isKeep != undefined || isKeep != null) {
            this.keepAfterEnd = isKeep;
        }
        e.innerHTML='<div id="loading-bar-head" class="head"><div class="head-right"></div></div>';
        document.body.appendChild(e)
    }
    ,inc:function(e){
        var t=document.getElementById("loading-bar");
        this.width+=e;
        t.style.width=this.width+"%"
    }
    ,end:function(){
        var e=document.getElementById("loading-bar");
        this.width=100;
        e.style.width=this.width+"%";
        setTimeout(function(){
            if (!loadingBar.keepAfterEnd) {
                document.body.removeChild(e)
            } else {
                document.getElementById("loading-bar-head").style.display = "none";
            }
        },1200)}
}
