const $btnLogo = document.getElementById("btn-logo");
const $menuResponsive = document.getElementById("menu");
const $logoNav = document.getElementById("logo-animado");

$btnLogo.addEventListener("click", (e) => {
  $menuResponsive.classList.toggle("menu-responsive");
  $logoNav.classList.toggle("logo-animado");
});

const $name = document.getElementById("name");
const $email = document.getElementById("email");
const $asunto = document.getElementById("asunto");
const $msj = document.getElementById("msj");
const $check = document.getElementById("check");
const $form = document.getElementById("form");
const $alert = document.querySelector(".alert");

$form.addEventListener("submit", (e) => {
  $alert.replaceChildren("");

  const regexName = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
  const regexEmail =
    /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;

  if (!regexName.test($name.value)) {
    const spanName = document.createElement("span");
    spanName.textContent = "El nombre no es válido";
    $alert.appendChild(spanName);
    e.preventDefault();
  }
  if (!regexEmail.test($email.value)) {
    const spanEmail = document.createElement("span");
    spanEmail.textContent = "El email no es válido";
    $alert.appendChild(spanEmail);
    e.preventDefault();
  }
  if (!$asunto.value) {
    const spanAsunto = document.createElement("span");
    spanAsunto.textContent = "El asunto no es válido";
    $alert.appendChild(spanAsunto);
    e.preventDefault();
  }
  if (!$msj.value) {
    const spanMsj = document.createElement("span");
    spanMsj.textContent = "El mensaje no es válido";
    $alert.appendChild(spanMsj);
    e.preventDefault();
  }
  if (!$check.checked) {
    const spanCheck = document.createElement("span");
    spanCheck.textContent = "Debes aceptar los términos y condiciones";
    $alert.appendChild(spanCheck);
  } else {
    const spanOK = document.createElement("p");
    spanOK.textContent = "Mensaje enviado correctamente";
    $alert.appendChild(spanOK);
  }
});
