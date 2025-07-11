document.addEventListener("DOMContentLoaded", () => {
  const paths = document.querySelectorAll(".land");
  const tooltip = document.getElementById("tooltip");

  paths.forEach((path) => {
    path.addEventListener("mousemove", (e) => {
      const dataName = path.getAttribute("data-name");
      tooltip.textContent = dataName;
      tooltip.style.left = `${e.pageX + 15}px`;
      tooltip.style.top = `${e.pageY + 15}px`;
      tooltip.style.display = "block";
    });

    path.addEventListener("mouseleave", () => {
      tooltip.style.display = "none";
    });
  });
});
