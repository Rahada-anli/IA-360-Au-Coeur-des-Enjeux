console.log("charger ! ") ;



let menu_list = document.getElementById("menu_list");

menu_list.style.maxHeight = "0px";

function toggle_menu(){

    if(menu_list.style.maxHeight == "0px")
    {
        menu_list.style.maxHeight = "300px";
    }
    else
    {
        menu_list.style.maxHeight = "0px";
    }

}

