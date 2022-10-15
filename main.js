let randomColor = Math.floor(Math.random() * 16777215).toString(16);
const btn = document.querySelector("button");
const input = document.querySelector("input");

// let color;
// color.innerHTML = "#" + randomColor;

const changeBgColor = () => {
    let red = Math.ceil(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let green = Math.round(Math.random() * 256);
    let randomRGB = `rgb(${red}, ${blue}, ${green})`;
    document.body.style.backgroundColor = randomRGB;
    input.value = randomRGB;
}
// console.log(randomBg);

btn.addEventListener("click", changeBgColor);
// changeBgColor();