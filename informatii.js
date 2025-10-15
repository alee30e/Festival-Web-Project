document.addEventListener("DOMContentLoaded", () => {
    const bileteContainer = document.getElementById("bilete");
    const popup = document.getElementById("popup");
    const popupInfo = document.getElementById("popup-info");
    const closePopupBtn = document.getElementById("close-popup");

    fetch("info.json")
      .then(response => response.json())
      .then(data => {
        data.forEach(bilet => {
          const biletDiv = document.createElement("div");
          biletDiv.classList.add("bilet");
          biletDiv.setAttribute("data-info", bilet.detalii);
  
          biletDiv.innerHTML = `
            <h2>${bilet.titlu}</h2>
            <p class="pret">
              <span class="pret-curent">${bilet.pretCurent}</span>
              <span class="pret-initial">${bilet.pretInitial}</span>
            </p>
            <button class="detalii-btn">Detalii</button>
          `;
  
          bileteContainer.appendChild(biletDiv);
        });
  
        const detailButtons = document.querySelectorAll(".detalii-btn");
        detailButtons.forEach(button => {
          button.addEventListener("click", (event) => {
            const bilet = event.target.closest(".bilet");
            const info = bilet.getAttribute("data-info");
  
            popupInfo.textContent = info;
            popup.classList.remove("hidden");
          });
        });
      })
      .catch(error => console.error("Eroare la încărcarea datelor:", error));
    closePopupBtn.addEventListener("click", () => {
      popup.classList.add("hidden");
    });
  
    popup.addEventListener("click", (event) => {
      if (event.target === popup) {
        popup.classList.add("hidden");
      }
    });
  });
  