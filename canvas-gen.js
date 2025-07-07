export const generateCSSCanvas = async (root, w, h)=>{
    root.style.setProperty("--w", `${w}`);
    root.style.setProperty("--h", `${h}`);
    root.inert = true;
    root.innerHTML = ``;
    let I = 0;
    for (let y = 0; y < h; y++) {
        const row = document.createDocumentFragment();
        //row.classList.add("row");
        //row.style.setProperty("--y", `${y}`);
        //row.style.setProperty("--w", `${w}`);
        //row.dataset.y = `${y}`;
        //row.inert = true;
        for (let x = 0; x < w; x++) {
            const pixel = document.createElement("div"); //http://192.168.0.204:5173/
            pixel.style.setProperty("--I", `${I++}`); // sibling-count() TOO SLOW!
            //pixel.classList.add("column");
            //pixel.classList.add("pixel");
            //pixel.dataset.y = `${y}`;
            //pixel.dataset.x = `${x}`;
            //pixel.style.setProperty("--x", `${x}`);
            //pixel.style.setProperty("--y", `${y}`);
            pixel.inert = true;
            //row.appendChild(pixel);
            root.appendChild(pixel);
            //await Promise.resolve();
        }
        //root.appendChild(row);

        // avoid overpaint and overload when building DOM
        await new Promise((r)=>requestAnimationFrame(r));
    }
}

//
requestAnimationFrame(()=>requestIdleCallback(()=>generateCSSCanvas(document.querySelector(".root"), 120, 120)));
