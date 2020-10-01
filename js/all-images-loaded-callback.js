function allImagesLoadedCallback() {
    let imagesLoaded = 0;
    const images = document.querySelectorAll('img')
    const totalImages = images.length;

    images.forEach((img) => {
        const tempImg = document.createElement('img');
        tempImg.onload = () => {
            imageLoaded();
        }

        tempImg.src = img.src;
    });

    function imageLoaded() {
        imagesLoaded++;
        if (imagesLoaded == totalImages) {
            allImagesLoaded();
        }
    }

    function allImagesLoaded() {
        maxLineCheck();
        maxHeightCheck();
        TextFit.fit({
            selector: '.textFit'
        });        
    }
}
