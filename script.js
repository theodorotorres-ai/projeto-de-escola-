// ==========================================
// MENU MOBILE
// ==========================================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// ==========================================
// FECHAR MENU AO CLICAR EM UM LINK
// ==========================================

const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


// ==========================================
// FORMULÁRIO DE CONTATO
// ==========================================

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (event) {

    // Impede o formulário de recarregar a página
    event.preventDefault();

    alert("Obrigado pela mensagem! Este formulário é apenas demonstrativo.");

    // Limpa os campos
    form.reset();

});
