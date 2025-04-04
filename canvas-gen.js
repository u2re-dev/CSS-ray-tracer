const generateCSSCanvas = (root, w, h)=>{
    root.style.setProperty("--w", `${w}`);
    root.style.setProperty("--h", `${h}`);
    for (let y = 0; y < h; y++) {
        const row = document.createElement("div");
        row.classList.add("row");
        row.style.setProperty("--y", `${y}`);
        row.style.setProperty("--w", `${w}`);
        row.dataset.y = `${y}`;
        for (let x = 0; x < w; x++) {
            const pixel = document.createElement("div");
            pixel.classList.add("column");
            pixel.classList.add("pixel");
            pixel.dataset.y = `${y}`;
            pixel.dataset.x = `${x}`;
            pixel.style.setProperty("--x", `${x}`);
            row.appendChild(pixel);
        }
        root.appendChild(row);
    }
}

//
generateCSSCanvas(document.querySelector(".root"), 160, 120);
