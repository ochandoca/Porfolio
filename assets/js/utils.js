const containers = document.querySelectorAll(".is-code-toggle-block").forEach((container) => {
  container.addEventListener("click", function (event) {
    const targetId = this.getAttribute("target-block-id");
    if (targetId != null) {
      const element = document.getElementById(targetId);
      const isExpanded = (element.getAttribute("block-expanded") == "true");
      if (isExpanded) {
        element.classList.add("code-block-hidden");
        this.classList.remove("is-code-toggle-block-expanded");
      } else {
        element.classList.remove("code-block-hidden");
        this.classList.add("is-code-toggle-block-expanded");
      }
      element.setAttribute("block-expanded", !isExpanded);
    }
  });
});