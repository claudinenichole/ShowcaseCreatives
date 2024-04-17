var images,
    loadedImage = 0,
    loopBeat,
    checkExpand = false;

preload();

function preload() {
    images = new Array(
        "images/backgroundImage_728x90.jpg",
        "images/iconLogo_728x90.png",
        "images/yPredictLogo_728x90.png",
        "images/guy_728x90.png",
        "images/hereCopy_728x90.png",
        "images/listingCopy_728x90.png",
        "images/bitmartCopy_728x90.png",
        "images/50ktraders_728x90.png",
        "images/tradersRibbon_728x90.png"
    );

    for (var i = 0; i < images.length; i++) {
        imageObj = new Image();
        imageObj.src = images[i];
        imageObj.addEventListener("load", iLoad, false)
    }

}

function iLoad() {
    loadedImage++;
    if (images.length == loadedImage) {
        backgroundImage.src = images[0];
        logoImage.src = images[1];
        yPredictLogo.src = images[2];
        guyImage.src = images[3];
        copyImage1.src = images[4];
        copyImage2.src = images[5];
        copyImage3.src = images[6];
        copyImage4.src = images[7];
        copyImage5.src = images[8];        

        init();
    }
}

function init() {
    main.style.visibility = "visible";
    backgroundImage.style.opacity= 1;
    setTimeout(frame1, 500);
}

function frame1() {
    logoImage.style.opacity = 1;
    setTimeout(frame2, 500);
}

function frame2() {
    yPredictLogo.style.left = "-275px";
    setTimeout(frame3, 1000);
}

function frame3() {
    guyImage.style.left = "-1px";
    setTimeout(frame4, 1000);
}

function frame4() {
    copyImage1.style.opacity = 1;
    setTimeout(frame5, 2000);
}

function frame5() {
    copyImage2.style.opacity = 1;
    setTimeout(frame6, 2000);
}

function frame6() {
    copyImage3.style.opacity = 1;
    setTimeout(frame7, 1000);
}

function frame7() {
    copyImage4.style.opacity = 1;
    copyImage5.style.opacity = 1;
    copyImage4.style.top = "-1px";
    copyImage5.style.top = "-53px";
}
