let calcScrollValue = () => {
    let scrollProgresss = document.getElementById
    ("progresss");
    let progresssValue = document.getElementById
    ("progresss-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight = 
        document.documentElement.scrollHeight - 
        document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100)/calcHeight);
    if(pos>100){
        scrollProgresss.style.display = "grid";
    }
    else{
        scrollProgresss.style.display = "none";
    }
    scrollProgresss.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });
    scrollProgresss.style.background = `conic-gradient(#d400ff ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;
