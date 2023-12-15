const btn1 = document.querySelector("#btn1");

btn1.addEventListener("click", function () {
  document.body.classList.add("warnaBody");
});

const btn2 = document.querySelector("#btn2");

btn2.addEventListener("click", function () {
  const r = Math.floor(Math.random() * 255 + 1);
  const g = Math.floor(Math.random() * 255 + 1);
  const b = Math.floor(Math.random() * 255 + 1);

  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});

const range = document.querySelectorAll("input");

for (let i = 0; i < range.length; i++) {
  range[i].addEventListener("input", function () {
    const r = range[0].value;
    const g = range[1].value;
    const b = range[2].value;

    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  });
}

// const rWarna = document.querySelector("input[name=rWarna]");
// const gWarna = document.querySelector("input[name=gWarna]");
// const bWarna = document.querySelector("input[name=bWarna]");

// rWarna.addEventListener("input", function () {
//   const merah = rWarna.value;
//   const hijau = gWarna.value;
//   const biru = bWarna.value;
//   document.body.style.backgroundColor = `rgb(${merah}, ${hijau}, ${biru})`;
// });
// gWarna.addEventListener("input", function () {
//   const merah = rWarna.value;
//   const hijau = gWarna.value;
//   const biru = bWarna.value;
//   document.body.style.backgroundColor = `rgb(${merah}, ${hijau}, ${biru})`;
// });
// bWarna.addEventListener("input", function () {
//   const merah = rWarna.value;
//   const hijau = gWarna.value;
//   const biru = bWarna.value;
//   document.body.style.backgroundColor = `rgb(${merah}, ${hijau}, ${biru})`;
// });

document.body.addEventListener("mousemove", function (e) {
  const x = Math.round((e.clientX / window.innerWidth) * 255);
  const y = Math.round((e.clientY / window.innerHeight) * 255);
  const b = Math.floor(Math.random() * 255 + 1);

  document.body.style.backgroundColor = `rgb(${x},${y},100)`;
});
