// Common JS functions
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie(cname) {
    let hasCookie = getCookie(cname);
    if (hasCookie) {
        return true;
    } else {
        return false;
    }
}

function deleteCookie(cname) {
    document.cookie = cname+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

function toggleThemeMode() {
    // console.log("hitted");
    // count += 1;
    // console.log(count);
    // if(count%2!=0){
    //     document.body.style ='background-color:white;color:black';
    //     document.documentElement.style.setProperty('color', 'black');
    //     document.getElementById('navbar').style='background-color:white;border-color:black';
    //     document.querySelector(".btn").style='border-color:black';
    //     document.querySelector("#btn").style='border-color:black';
    // }
    // else{
    //     document.body.style ='background-color:black;color:white';
    //     document.documentElement.style.setProperty('color', 'white');
    //     document.getElementById('navbar').style='background-color:black;border-color:white';
    //     document.querySelector(".btn").style='border-color:white';
    //     document.querySelector("#btn").style='border-color:white';
    // }
    let mode = getCookie("theme_mode");
    deleteCookie("theme_mode");
    if (mode == "dark") {
        setCookie("theme_mode", "light");
    } else {
        setCookie("theme_mode", "dark");
    }
    checkMode();
}

function checkMode() {
    let mode = getCookie("theme_mode");
    if (mode == "dark") {
        document.getElementsByTagName("body")[0].classList.remove("dark");
        document.getElementsByTagName("body")[0].classList.add("dark");
    } else {
        document.getElementsByTagName("body")[0].classList.remove("dark");
    }
}


setTimeout(()=> {
    checkMode();
}, 500);
