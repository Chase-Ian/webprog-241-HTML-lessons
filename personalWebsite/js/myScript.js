const buttons = document.querySelectorAll(".nav-btn");
  const pages = document.querySelectorAll(".page");

  buttons.forEach(button => {
    button.addEventListener("click", (e) => {
      e.preventDefault();

      const targetPage = button.getAttribute("data-page");

      pages.forEach(page => {
        page.classList.remove("active");
      });

      document.getElementById(targetPage).classList.add("active");
    });
  });