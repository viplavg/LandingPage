window.onscroll = () => {
    if(window.pageYOffset >= 200){
        document.getElementById("myNav").classList.add("bg-light");
        document.getElementById("myNav").style.boxShadow = "0 0 6px gray";

    } else {
        document.getElementById("myNav").classList.remove("bg-light");
        document.getElementById("myNav").style.boxShadow = "none";
    }
}

