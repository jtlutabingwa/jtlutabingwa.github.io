const searchInput = document.getElementById("gallerySearch");
    searchInput.addEventListener("input", () => {
      const filter = searchInput.value.toLowerCase();
      document.querySelectorAll(".gallery-item").forEach((item) => {
        const caption = item.querySelector(".caption").textContent.toLowerCase();
        item.style.display = caption.includes(filter) ? "block" : "none";
      });
    });