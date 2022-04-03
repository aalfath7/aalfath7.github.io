window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 310 || document.documentElement.scrollTop > 310) {
        var navs = document.getElementsByClassName('nav');
        for(var i = 0; i < navs.length; i++ ){
            navs[i].style.color = "black";
        }
        document.getElementById("welcome-section").style.marginBottom = "4em";
        document.getElementById("navbar").style.backgroundColor = "white";
        document.getElementById("navbar").style.padding = "1em 1em 1em 1em";
        document.getElementById('arrow').style.display = "block";
    } else {
        var navs = document.getElementsByClassName('nav');
        for(var i = 0; i < navs.length; i++ ){
            navs[i].style.color = "white";
        }
        document.getElementById("welcome-section").style.marginBottom = "";
        document.getElementById("navbar").style.backgroundColor = "";
        document.getElementById("navbar").style.padding = "2em 2em 4em 2em";
        document.getElementById('arrow').style.display = "none";
    }
}