import "./style.css";
import { animate, stagger, inView, scroll, timeline } from "motion";

// Lav en variabel, der refererer til ".toggle-btn"
// btn = button
// kalder på HTML ".toggle.btn"
const btn = document.querySelector(".toggle-btn");
// Lav en variabel, der refererer til "nav"
// menulinje
const nav = document.querySelector("nav");

// Lav en function, der hedder toggleMenu()
// toggle = skifter - En menu er kan folde sig ud og lukke igen
function toggleMenu() {
  // 1. Toggle en klasse på nav vha. classList.toggle
  // 2. Toggle en klasse, der hedder "shown"
  // når man klikker kommer classen shown frem som er defineret i samlet.css
  nav.classList.toggle("shown");

  // 1. Lav en variabel, der hedder menuShown
  // 2. Den skal være lig med, om nav-variablen indeholder klassen "shown" vha. classList.contains("")
  const menuShown = nav.classList.contains("shown");

  // 1. Lav en if/else sætning => if (...) {...} else {...}
  // 2. Spørg om menu i if-sætningen => if (menu)
  if (menuShown) {
    // hvis nav har klassen "shown", sæt da btn.textContent til "Luk"
    btn.textContent = "✕";
  } else {
    // hvis IKKE nav har klassen "shown", sæt da btn.textContent til "Menu"
    btn.textContent = "☰";
  }
}
/* Tilføj et klik-event til btn, der sætter toggleMenu-funktionen i gang */
btn.addEventListener("click", toggleMenu);

/*Animation på desktop og op */
if (window.innerWidth > 760) {
  inView(".fotoinvie_venstre", ({ target }) => {
    animate(target, { translateX: [400, 0] }, { duration: 2 });
    return () => {
      animate(target, { translateX: [400, 0] }, { duration: 2 });
    };
  });
  inView(".fotoinview_hojre", ({ target }) => {
    animate(target, { translateX: [-400, 0] }, { duration: 2 });
    return () => {
      animate(target, { translateX: [-400, 0] }, { duration: 2 });
    };
  });
}

/*Animation på mobile */
inView(".fotoinvie_venstre", ({ target }) => {
  animate(target, { translateX: [400, 0] }, { duration: 2 });
  return () => {
    animate(target, { translateX: [400, 0] }, { duration: 2 });
  };
});
inView(".fotoinview_hojre", ({ target }) => {
  animate(target, { translateX: [-300, 0] }, { duration: 2 });
  return () => {
    animate(target, { translateX: [-300, 0] }, { duration: 2 });
  };
});
