let formKuNode = document.getElementById("formKu");

let namaNode = document.getElementById("nama");
let namaSpanNode = document.getElementById("namaSpan");

let usernameNode = document.getElementById("username");
let usernameSpanNode = document.getElementById("usernameSpan");

let emailNode = document.getElementById("email");
let emailSpanNode = document.getElementById("emailSpan");

let passNode = document.getElementById("password");
let passSpanNode = document.getElementById("passwordSpan");

let phoneNode = document.getElementById("phone");
let phoneSpanNode = document.getElementById("phoneSpan");

let genderNode = document.getElementById("gender");
let genderSpanNode = document.getElementById("genderSpan");

let websiteNode = document.getElementById("website");
let websiteSpanNode = document.getElementById("websiteSpan");

const diProses = (e) => {
  let errors = false;

  // Validasi nama
  let namaError = "";
  if (namaNode.value.trim() === "") {
    namaError = "Nama harus diisi";
    errors = true;
  }

  if (namaError !== "") {
    namaSpanNode.innerHTML = namaError;
    errors = true;
  }

  // Validasi username
  let usernameError = "";
  if (usernameNode.value.trim() === "") {
    usernameError = "Username harus diisi";
    errors = true;
  }

  if (usernameError !== "") {
    usernameSpanNode.innerHTML = usernameError;
    errors = true;
  }

  // Validasi email
  let emailError = "";
  if (emailNode.value.trim() === "") {
    emailError = "Email harus diisi";
    errors = true;
  } else if (!isValidEmail(emailNode.value.trim())) {
    emailError = "Format email tidak valid";
    errors = true;
  }

  if (emailError !== "") {
    emailSpanNode.innerHTML = emailError;
    errors = true;
  }

  // Validasi password
  let passError = "";
  if (passNode.value.trim() === "") {
    passError = "Password harus diisi";
    errors = true;
  }

  if (passError !== "") {
    passSpanNode.innerHTML = passError;
    errors = true;
  }

  // Validasi no telepon
  let phoneError = "";
  if (phoneNode.value.trim() === "") {
    phoneError = "No Telepon harus diisi";
    errors = true;
  }

  if (phoneError !== "") {
    phoneSpanNode.innerHTML = phoneError;
    errors = true;
  }

  // Validasi jenis kelamin
  let genderError = "";
  if (genderNode.value === "") {
    genderError = "Jenis Kelamin harus dipilih";
    errors = true;
  }

  if (genderError !== "") {
    genderSpanNode.innerHTML = genderError;
    errors = true;
  }

  // Validasi alamat website
  let websiteError = "";
  if (websiteNode.value.trim() === "") {
    websiteError = "Alamat Website harus diisi";
    errors = true;
  }  else if (!isValidWebsite(websiteNode.value.trim())) {
    websiteError = "Isi alamat website yang sesuai";
    errors = true;
  }

if (websiteError !== "") {
  websiteSpanNode.innerHTML = websiteError;
  errors = true;
}


  if (errors) {
    e.preventDefault();
  }
};

// Function untuk memeriksa format email
function isValidEmail(email) {
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(String(email).toLowerCase());
}

// Function untuk memeriksa format alamat website
function isValidWebsite(website) {
    const websiteRegex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
    return websiteRegex.test(website);
  }

const hapusError = (e) => {
  e.target.style.border = "";
  e.target.nextElementSibling.innerHTML = "";
};

formKuNode.addEventListener("submit", diProses);
namaNode.addEventListener("focus", hapusError);
usernameNode.addEventListener("focus", hapusError);
emailNode.addEventListener("focus", hapusError);
passNode.addEventListener("focus", hapusError);
phoneNode.addEventListener("focus", hapusError);
genderNode.addEventListener("focus", hapusError);
websiteNode.addEventListener("focus", hapusError);