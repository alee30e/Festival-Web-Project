const loginSection = document.getElementById("login-section");
const logoutSection = document.getElementById("logout-section");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("login-button");
const logoutButton = document.getElementById("logout-button");
const butonBilete =  document.getElementById("buton-bilete");
const errorMessage = document.getElementById("error-message");
const userNameDisplay = document.getElementById("user-name");
const userEmailDisplay = document.getElementById("user-email");

function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@(yahoo\.com|gmail\.com)$/;
  return regex.test(email);
}

function checkLoginStatus() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    showLogoutSection(user);
  } else {
    showLoginSection();
  }
}
function showLoginSection() {
  loginSection.style.display = "block";
  logoutSection.style.display = "none";
}
function showLogoutSection(user) {
  userNameDisplay.textContent = user.name;
  userEmailDisplay.textContent = user.email;
  loginSection.style.display = "none";
  logoutSection.style.display = "block";
}
loginButton.addEventListener("click", () => {
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  if (!name || !email || !password) {
    errorMessage.textContent = "Toate câmpurile sunt obligatorii!";
    errorMessage.style.display = "block";
    return;
  }
  if (!validateEmail(email)) {
    errorMessage.textContent = "Emailul trebuie să fie @yahoo.com sau @gmail.com!";
    errorMessage.style.display = "block";
    return;
  }
  const user = { name, email, password };
  localStorage.setItem("user", JSON.stringify(user));
  errorMessage.style.display = "none";
  showLogoutSection(user);
});
butonBilete.addEventListener("click", () => {
    window.location.href = "bilete1.html";
});
logoutButton.addEventListener("click", () => {
  localStorage.removeItem("user");
  showLoginSection();
});
checkLoginStatus();
const modalBilete = document.getElementById("modal-bilete");
const closeModalButton = document.getElementById("close-modal");
function showBileteModal() {
  modalBilete.style.display = "block";
}
closeModalButton.addEventListener("click", () => {
  modalBilete.style.display = "none";
});
function showLogoutSection(user) {
  userNameDisplay.textContent = user.name;
  userEmailDisplay.textContent = user.email;
  loginSection.style.display = "none";
  logoutSection.style.display = "block";
  showBileteModal();
}




 const canvas = document.getElementById('backgroundCanvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const circles = [];
    function Circle(x, y, radius, dx, dy) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.dx = dx;
        this.dy = dy;

        this.update = function() {
            this.x += this.dx;
            this.y += this.dy;
            this.draw();
        };

        this.draw = function() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
            ctx.fill();
            ctx.closePath();
        };
    }

    function generateCircles() {
        for (let i = 0; i < 30; i++) {
            const radius = Math.random() * 20 + 10;
            const x = Math.random() * (canvas.width - radius * 2) + radius;
            const y = Math.random() * (canvas.height - radius * 2) + radius;
            const dx = (Math.random() - 0.5) * 2;
            const dy = (Math.random() - 0.5) * 2;
            circles.push(new Circle(x, y, radius, dx, dy));
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        circles.forEach(circle => circle.update());
        requestAnimationFrame(animate);
    }

    generateCircles();
    animate();
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
    
    const button = document.getElementById("changeColorButton");
const info = document.getElementById("currentColorInfo");
