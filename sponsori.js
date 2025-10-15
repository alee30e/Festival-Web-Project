document.addEventListener("DOMContentLoaded", function() {
    const sponsoriContainer = document.getElementById("sponsori-container");

    function createSponsorCard(sponsor) {
      const caseta = document.createElement("div");
      caseta.style.cssText = `
        padding: 15px;
        border-radius: 8px;
        background: linear-gradient(135deg, #2e2e46, #1c1c2e);
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
        color: #ffffff;
        text-align: center;
      `;
      const nume = document.createElement("h3");
      nume.textContent = sponsor.nume;
      nume.style.color = "#ff4d4d";
  
      const editie = document.createElement("p");
      editie.textContent = `De la ediția: ${sponsor.editie}`;
      editie.style.color = "rgba(255, 255, 255, 0.8)";
  
      const contact = document.createElement("p");
      contact.textContent = `Contact: ${sponsor.contact}`;
      contact.style.color = "#4d9cff";
  
      caseta.appendChild(nume);
      caseta.appendChild(editie);
      caseta.appendChild(contact);
      sponsoriContainer.appendChild(caseta);
    }

    fetch("sponsori.json")
      .then(function(raspuns) {
        if (!raspuns.ok) {
          throw new Error("Eroare la încărcarea sponsorilor!");
        }
        return raspuns.json();
      })
      .then(data => {
        data.forEach(sponsor => createSponsorCard(sponsor));
      })
      .catch(function(error) {
        console.error(error);
        sponsoriContainer.textContent = "Nu s-au putut încărca sponsorii.";
      });
  });
  