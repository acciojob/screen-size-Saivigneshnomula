//your JS code here. If required.
const sizeInfo = document.querySelector("#sizeInfo h1");

function updateSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    sizeInfo.textContent = `Width: ${width} and Height: ${height}`;
}

// Display initial window size
updateSize();

// Update whenever window is resized
window.addEventListener("resize", updateSize);