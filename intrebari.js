document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("intrebare-input");
    const adaugaBtn = document.getElementById("adauga-intrebare");
    const container = document.getElementById("intrebari-container");

    function incarcaIntrebari() {
      const intrebari = JSON.parse(localStorage.getItem("intrebari")) || [];
      intrebari.forEach((intrebare) => adaugaIntrebare(intrebare));
    }

    function salveazaIntrebare(textIntrebare) {
      const intrebari = JSON.parse(localStorage.getItem("intrebari")) || [];
      intrebari.push(textIntrebare);
      localStorage.setItem("intrebari", JSON.stringify(intrebari));
    }

    function stergeIntrebareDinLocalStorage(textIntrebare) {
      const intrebari = JSON.parse(localStorage.getItem("intrebari")) || [];
      const intrebariActualizate = intrebari.filter(
        (intrebare) => intrebare !== textIntrebare
      );
      localStorage.setItem("intrebari", JSON.stringify(intrebariActualizate));
    }

    function adaugaIntrebare(textIntrebare) {

      const intrebareDiv = document.createElement("div");
      intrebareDiv.className = "intrebare";
  
  
      const intrebareText = document.createElement("p");
      intrebareText.textContent = textIntrebare;
 
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Șterge";
      deleteButton.style.cssText = `
        background-color: #ff4d4d;
        color: white;
        border: none;
        border-radius: 5px;
        padding: 5px 10px;
        margin-left: 10px;
        cursor: pointer;
        font-size: 0.9rem;
      `;

      deleteButton.addEventListener("click", function () {
        container.removeChild(intrebareDiv);
        stergeIntrebareDinLocalStorage(textIntrebare);
      });
  
      intrebareDiv.appendChild(intrebareText);
      intrebareDiv.appendChild(deleteButton);

      container.appendChild(intrebareDiv);
    }

    adaugaBtn.addEventListener("click", function () {
      const intrebare = input.value.trim();
  
      if (!intrebare) {
        alert("Vă rugăm să introduceți o întrebare!");
        return;
      }
  
      adaugaIntrebare(intrebare);

      salveazaIntrebare(intrebare);

      input.value = "";
    });
  

    input.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        event.preventDefault(); 
        adaugaBtn.click(); 
      }
    });
  
    incarcaIntrebari();
  });
  