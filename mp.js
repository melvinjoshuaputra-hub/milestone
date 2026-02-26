// kalau tekan logo
const logo = document.getElementById("logoMelby");

logo.addEventListener("click", function () {
  alert("Welcome to Melby");
});

// Kalau tekan search
const searchBtn = document.getElementById("btnSearch");

searchBtn.addEventListener("click", function (event) {
  event.preventDefault(); // supaya tidak reload
  alert("Sudah dibilang tidak ada apa-apa");
});

// login
document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const emailInput = document.getElementById("emailInput");
  const passwordInput = document.getElementById("passwordInput");

  // akun benar
  const correctEmail = "admin@melby.com";
  const correctPassword = "123456";

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // cegah reload

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // dua-duanya kosong
    if (email === "" && password === "") {
      alert("Silahkan isi data!");
      return;
    }

    // email ada, password kosong
    if (email !== "" && password === "") {
      alert("Silahkan masukkan password!");
      return;
    }

    // password ada, email kosong
    if (email === "" && password !== "") {
      alert("Silahkan masukkan email!");
      return;
    }

    // email & password ada tapi salah
    if (email !== correctEmail || password !== correctPassword) {
      alert("Email atau Password salah!");
      return;
    }

    // 5. login sukses
    alert("Selamat kamu telah log in!");
  });
});

// Onfkir
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("shippingForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const senderCountry = document.getElementById("senderCountry").value;
    const senderState = document.getElementById("senderState").value;
    const receiverCountry = document.getElementById("receiverCountry").value;
    const receiverState = document.getElementById("receiverState").value;
    const shippingCostInput = document.getElementById("shippingCost");

    // validasi kosong
    if (!senderCountry || !senderState || !receiverCountry || !receiverState) {
      alert("Harap lengkapi data pengirim dan penerima");
      return;
    }

    let cost = 0;

    // negara sama / beda
    if (senderCountry === receiverCountry) {
      cost += 20000;
    } else {
      cost += 50000;
    }

    // state sama / beda
    if (senderState !== receiverState) {
      cost += 10000;
    }

    shippingCostInput.value = "Rp " + cost.toLocaleString("id-ID");
  });
});