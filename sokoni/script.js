document.addEventListener("DOMContentLoaded", function () {

  let loginBtn = document.getElementById("loginBtn");
  let registerBtn = document.getElementById("registerBtn");

  let loginModal = document.getElementById("loginModal");
  let registerModal = document.getElementById("registerModal");

  // OPEN MODALS
  loginBtn.onclick = function () {
    loginModal.style.display = "flex";
  };

  registerBtn.onclick = function () {
    registerModal.style.display = "flex";
  };

  // CLOSE MODALS
  function closeModal() {
    loginModal.style.display = "none";
    registerModal.style.display = "none";
  }

  // CLOSE BUTTONS
  document.querySelectorAll(".close-btn").forEach(btn => {
    btn.onclick = closeModal;
  });

  // CLICK OUTSIDE CLOSE
  window.onclick = function (e) {
    if (e.target === loginModal) loginModal.style.display = "none";
    if (e.target === registerModal) registerModal.style.display = "none";
  };

});

// Get elements
const loginModal = document.getElementById("loginModal");
const registerModal = document.getElementById("registerModal");

// Buttons
document.getElementById("loginBtn").onclick = () => { loginModal.style.display = "flex"; }
document.getElementById("registerBtn").onclick = () => { registerModal.style.display = "flex"; }
document.getElementById("heroRegisterBtn").onclick = () => { registerModal.style.display = "flex"; }

// Close buttons
document.querySelectorAll(".close-btn").forEach(btn => {
    btn.onclick = () => {
        loginModal.style.display = "none";
        registerModal.style.display = "none";
    }
});

// Optional: click outside modal to close
window.onclick = function(event) {
    if (event.target === loginModal) loginModal.style.display = "none";
    if (event.target === registerModal) registerModal.style.display = "none";
}
