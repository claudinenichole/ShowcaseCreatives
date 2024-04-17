var images,
    loadedImage = 0,
    loopBeat,
    checkExpand = false;

preload();

function preload() {
    images = new Array(
        "images/backgroundImage_300x600.jpg",
        "images/iconLogo_300x600.png",
        "images/yPredictLogo_300x600.png",
        "images/guy_300x600.png",
        "images/hereCopy_300x600.png",
        "images/listingCopy_300x600.png",
        "images/bitmartCopy_300x600.png",
        "images/50ktraders_300x600.png",
        "images/tradersRibbon_300x600.png",
        "images/cta_300x600.png"
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
        ctaImage.src = images[9];

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
    yPredictLogo.style.left = "-106px";
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
    copyImage4.style.top = "-146px";
    copyImage5.style.top = "-216px";
    setTimeout(frame8, 1000);
}

function frame8() {
    ctaImage.style.opacity = 1;
}