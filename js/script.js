function togglemobilMenu(menu) {
  menu.classList.toggle('nyit')
}

// --- Nyitvatartási idők ---
let napok = ["Hétfő:", "Kedd:", "Szerda:", "Csütörtök:", "Péntek:", "Szombat:", "Vasárnap:", "Ünnep-napokon:"]
let orak = ["07:00 - 18:00", "07:00 - 18:00", "07:00 - 18:00", "07:00 - 18:00", "07:00 - 18:00", "08:00 - 20:00", "09:00 - 16:00", "09:00 - 12:00"]

for (let i = 0; i < napok.length; i++) {
  $("#open").append("<div class='bal_oszlop'><p>" + napok[i] + "</p></div><div class='jobb_oszlop'><p>" + orak[i] + "</p></div>")
}

// ----- ! -G A L É R I A- ! ----
let kepek1 = ["img/coffeeLove.jpg", "img/woman1.webp", "img/KreatorCoffee.jpg", "img/coffee.jpg", "img/Mille-Kreator.jpg", "img/coffeeLeather.jpg", "img/coffee4.jpg", "img/kafe-spark.jpg"];
let alt1 = ["CoffeeLove", "Coffee Girl", "Kreator Coffee", "Coffee maker", "Mille Petrozza", "Kafe-Spark", "kotyogó kávéfőző", "Kafe-Spark"];
for (let i = 0; i < kepek1.length; i++) {
  $("#oszlop1").append("<img src='" + kepek1[i] + "' class='galeriakep' alt='" + alt1[i] + "' title='" + alt1[i] + "'>");
}

let kepek2 = ["img/frapuccino.jpg", "img/kavezo2.jpg", "img/kaves-churros.jpg", "img/wolfCoffee.jpg", "img/latte.png", "img/KaffeeKatze.jpg", "img/woman2.jpg", "img/barista.jpg"];
let alt2 = ["Frapuccino", "Kávézó", "Kávés-churros", "Wolf Coffee", "Latte", "KaffeeKatze", "Let us coffee", "Barista hölgy"];
for (let i = 0; i < kepek2.length; i++) {
  $("#oszlop2").append("<img src='" + kepek2[i] + "' class='galeriakep' alt='" + alt2[i] + "' title='" + alt2[i] + "'>");
}

let kepek3 = ["img/kv.jpg", "img/americano.png", "img/caffeine.jpg", "img/capuccino.png", "img/coffee4.jpeg", "img/coffee2.jpg", "img/coffee3.webp", "img/TheBarn-Kreator.jpg", "img/tiramisu_k.png"];
let alt3 = ["Kreator-Black-Sunrise", "Americano", "Koffein", "Capuccino", "Kávézó lány", "Coffee", "Kávé", "Kávés sütik", "Tiramisu"];
for (let i = 0; i < kepek3.length; i++) {
  $("#oszlop3").append("<img src='" + kepek3[i] + "' class='galeriakep' alt='" + alt3[i] + "' title='" + alt3[i] + "'>");
}

let kepek4 = ["img/kavezo.jpg", "img/Kaffeart.jpg", "img/kave.png", "img/kavesbrownie_k.png", "img/kavescroissant_k.png", "img/kavesmuffin_k.png", "img/kreator-flag.jpg", "img/melange.jpg", "img/mako.jpg", "img/ozzySlash.jpg"];
let alt4 = ["Kávézónk", "Kaffeart", "Kávé", "Kávés Brownie", "Kávés Croissant", "Kávés Muffin", "Kreator", "Melange", "Makó", "Ozzy&Slash"];
for (let i = 0; i < kepek4.length; i++) {
  $("#oszlop4").append("<img src='" + kepek4[i] + "' class='galeriakep' alt='" + alt4[i] + "' title='" + alt4[i] + "'>");
}

let modalElem = document.querySelector(".modal");
let modalImage = document.querySelector(".modalImage");
let captionText = document.getElementById("caption");
Array.from(document.querySelectorAll(".galeriakep")).forEach(item => {
  item.addEventListener("click", event => {
    modalElem.style.display = "block";
    modalImage.src = event.target.src;
    captionText.innerHTML = event.target.alt;
  });
});


/*
//------   Bejelentkező SCRIPT ---------------

function belep() {
  var nev = document.urlap2.username.value
  var jel = document.urlap2.pass.value

  if (nev === "admin" && jel === "jelszo") {
    alert("Rendben. Sikeresen beléptél.")
    document.getElementById("neved").innerHTML = "Belépve mint: " + nev
    document.getElementById('id01').style.display = 'none'
  }

  else if (nev != "admin") {
    alert("Helytelen a felhasználónév")
    document.getElementById("kerdes").reset()
  }

  else if (jel != "jelszo") {
    alert("Helytelen a jelszó")
    document.getElementById("kerdes").reset()
  }
}*/