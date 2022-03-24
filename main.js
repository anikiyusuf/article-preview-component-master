const shareBtn = document.querySelector("#shareBtn");
const tooltip = document.querySelector(".tooltip");

shareBtn.addEventListener("click", () => {
  console.log("button clicked");
  tooltip.classList.toggle("active");
  shareBtn.classList.toggle("active");
});

shareBtn.addEventListener("blur", (e) => {
  // When a mouse click is detected outside the tooltip, the tooltip is closed
  // e.target is the element that triggered the event
  // e.relatedTarget is the element that was clicked
  console.log(e.target, e.relatedTarget);
  if (e.relatedTarget !== tooltip) {
    tooltip.classList.remove("active");
    shareBtn.classList.remove("active");
  }
});
tooltip.addEventListener("blur", (e) => {
  tooltip.classList.remove("active");
  shareBtn.classList.remove("active");
});