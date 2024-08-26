//按鈕的切換
function toggleArrow() {
    const arrowIcon = document.getElementById("arrowIcon");
    const currentSrc = arrowIcon.getAttribute("src");

    if (currentSrc.includes("arrowDown_icon.png")) {
        arrowIcon.setAttribute("src", "./img/icon/arrowUp_icon.png");
        arrowIcon.setAttribute("alt", "上箭頭");
        showDiv('downPage');
    } else {
        arrowIcon.setAttribute("src", "./img/icon/arrowDown_icon.png");
        arrowIcon.setAttribute("alt", "下箭頭");
        showDiv('upPage');
    }
}


// seeVegs.js  區塊顯示與隱藏的程式 
function showDiv(divId) {
    // 隱藏所有的 div
    const divs = document.querySelectorAll('.content-div');
    divs.forEach(div => {
        div.classList.remove('active');
    });


    // 僅顯示指定的 div
    const selectedDiv = document.getElementById(divId);
    if (selectedDiv) {
        selectedDiv.classList.add('active');
    }
}

// 初始化頁面所顯示的第一個 div
document.addEventListener('DOMContentLoaded', function () {
    showDiv('upPage');
});


