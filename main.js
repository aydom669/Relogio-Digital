
setInterval(
    function Relogio(){
       var h = document.getElementById("hour");
       var m = document.getElementById("min");
       var s = document.getElementById("seg");
        
        var data = new Date();
        var Hour=data.getHours();
        var Min=data.getMinutes();
        var Seg=data.getSeconds();
    
        h.textContent = Hour;
        m.textContent = Min;
        s.textContent = Seg;
    }
) 

 




