if (localStorage.getItem("--headerfooter") !== null){
    document.querySelector(':root').style.setProperty('--headerfooter',localStorage.getItem("--headerfooter"));
}
if (localStorage.getItem("--askloadsec") !== null){
    document.querySelector(':root').style.setProperty('--askloadsec',localStorage.getItem("--askloadsec"));
}
if (localStorage.getItem("--ansbut") !== null){
    document.querySelector(':root').style.setProperty('--ansbut',localStorage.getItem("--ansbut"));
}
