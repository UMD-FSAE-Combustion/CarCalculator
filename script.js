const name1input = document.querySelector("#name-input1");
const name2input = document.querySelector("#name-input2");
const name3input = document.querySelector("#name-input3");

const load1input = document.querySelector("#load-input1");
const load2input = document.querySelector("#load-input2");
const load3input = document.querySelector("#load-input3");

const maxAmpsText = document.querySelector("#max-amps-text");
const theoSizeText = document.querySelector("#theo-size-text");
const fuseSizeText = document.querySelector("#fuse-size-text");

console.log(maxAmpsText);
console.log(theoSizeText);
console.log(fuseSizeText);

const max_amps_start = "Max Amps =";
const theo_size_start = "Theoretical Size =";
const fuse_size_start = "Fuse Size =";

const calcBtn = document.querySelector("#calc-btn");

let name1, name2, name3, load1, load2, load3;
let maxAmps, theoSize, fuseSize;

const fuseSizes = [2, 3, 4, 5, 10, 15, 20, 25, 30, 35, 40];

maxAmpsText.textContent = max_amps_start;
theoSizeText.textContent = theo_size_start;
fuseSizeText.textContent = fuse_size_start;

console.log(calcBtn);
calcBtn.addEventListener("click", function (e) {
  name1 = name1input.value;
  name2 = name2input.value;
  name3 = name3input.value;

  load1 = load1input.value;
  load2 = load2input.value;
  load3 = load3input.value;

  maxAmps = Number(load1) + Number(load2) + Number(load3);
  theoSize = 1.35 * maxAmps;
  let i = 0;
  while (i < fuseSizes.length && fuseSizes[i] < theoSize) {
    i++;
  }
  if (i == fuseSizes.length) {
    fuseSize = "TOO BIG!";
  } else {
    fuseSize = fuseSizes[i];
  }

  maxAmpsText.textContent = max_amps_start + maxAmps;
  theoSizeText.textContent = theo_size_start + theoSize;
  fuseSizeText.textContent = fuse_size_start + fuseSize;
});
