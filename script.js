const work1 = document.querySelector(".work-1");
const work2 = document.querySelector(".work-2");
const work3 = document.querySelector(".work-3");
const btn = document.querySelectorAll("button")
// const works = [work1, work2, work3];

btn.forEach((bt) => {

  bt.addEventListener("mouseover", function () {
    this.style.transform = "translateY(-10px)";
  });

  bt.addEventListener("mouseout", function () {
    this.style.transform = "translateY(0px)";
  });
});
