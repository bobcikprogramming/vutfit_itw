window.onload = function hideRocketTruck() {
    document.getElementById("rockettruck").style.display = "none";
}

function showElectroPlane() {
    var firSectionVisibility = document.getElementById("electroplane");
    var secSectionVisibility = document.getElementById("rockettruck");
    var firBtn = document.getElementById("btnFirst");
    var secBtn = document.getElementById("btnSecond");
    if (firSectionVisibility.style.display === "none") {
        secSectionVisibility.style.display = "none";
        firSectionVisibility.style.display = "block";
        firBtn.style.color = "#0c84ac";
        secBtn.style.color = "gray";
    } else if(firSectionVisibility.style.display !== "block") {
        firSectionVisibility.style.display = "none";
    }
}

function showRocketTruck() {
    var firSectionVisibility = document.getElementById("electroplane");
    var secSectionVisibility = document.getElementById("rockettruck");
    var firBtn = document.getElementById("btnFirst");
    var secBtn = document.getElementById("btnSecond");
    if (secSectionVisibility.style.display === "none") {
        firSectionVisibility.style.display = "none";
        secSectionVisibility.style.display = "block";
        secBtn.style.color = "#0c84ac";
        firBtn.style.color = "gray";
    } else if(secSectionVisibility.style.display !== "block") {
        secSectionVisibility.style.display = "none";
    }
}