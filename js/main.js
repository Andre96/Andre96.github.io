function toggle_dn(){
    var body = document.body;
    var nav = document.getElementById("navbar");
    var elements = [body, nav];
    var i;
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.toggle("dark_mode")
    }
    if(body.classList.contains("dark_mode")){
        document.getElementById("toggle_dn").src = "images/night.png";
    } else {
        document.getElementById("toggle_dn").src = "images/light.png";
    }
}