// const btn1 = document.querySelector('btn-expand-title-1');
// const btn2 = document.querySelector('btn-expand-title-2');
// const btn3 = document.querySelector('btn-expand-title-3');
// const content1 = document.querySelector(".collapsed-1");
// const content2 = document.querySelector(".collapsed-2");
// const content3 = document.querySelector(".collapsed-3");

// btn1.addEventListener("click", () => {
//     content1.style.transform = "translateX(0)";
//   });

let dropdown = document.getElementsByClassName("dropdown-btn");
let i;

for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "none") {
        dropdownContent.style.display = "block";
      } else {
        dropdownContent.style.display = "none";
      }
    });
  }