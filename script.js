/* image qui apparaît */
document.addEventListener("DOMContentLoaded", function () {
    const imageContainer = document.getElementById("imageContainer");
    const mainTitle = document.querySelector("h2");

    // Gérer l'événement de survol de la souris
    mainTitle.addEventListener("mouseenter", function () {
        // Afficher l'image
        imageContainer.style.display = "block";
    });
});


/* texte matrix */
const matrixText = document.getElementById("matrixText");
const texts = ["C̷͎̔ō̵̌ͅù̷̟̬Ç̴̼̏o̸̰̜͒̃u̶̩̒ͅ ̴̥͗T̶̩̲̆̀ő̶̮̔u̵̢̒͋t̵̞̖̍ ̵͙̭͋L̸̼͒ḛ̵̉ ̸̻́N̸̦̽ó̷̱n̸̖̂͗ͅd̵̮̈e̸̱͕̍̍  :)", "V̸̱̓̒o̴̭̔̀ȕ̸͙̻s̴̞̄ ̴̢͇̀͝ņ̶̧͘'̶͎̞̆ê̴̩͔̓̀t̷̢͒̒e̵͚͆s̵̳͋͠ ̵̢̩̽͐p̵̬̟͐a̶͓̹̿͊s̷͚͒̅ ̸̠͊s̸̻̳̏ė̷̹̜ȕ̸̞l̴͔̓s̷̤̀͝.̷͖̃̚.̷̧͈̆.̷̲͗", "M̶̪̘̍a̵̩̜͝i̵̬͛s̷̟͚̓͝ ̴̞͝v̷̯͕͆̐o̷̠͑ȗ̵̢͍͝s̸̲̉ ̷̢̻̓̓d̵͕͜͝e̷͖͐̾v̴̧̻̈́e̵͐͜z̵̝͗ ̶̤̔͝d̸̙͖͌é̵͈̰̓j̵̫̘̒à̶̬̐̈́ ̴͓͙̄l̶̳͛ę̸̘͐͠ ̴̬̙̎s̷̯͇̆̾a̴̟̞͂̄v̴̛̯͍͗o̸̮̽i̶͕̹̅̕r̷̩͖̐͐"];
let textIndex = 0;
let charIndex = 0;

function writeText() {
    if (charIndex < texts[textIndex].length) {
        matrixText.textContent += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(writeText, 20); // Vitesse d'écriture (ajustez selon vos préférences)
    } else {
        setTimeout(() => {
            matrixText.textContent = "";
            textIndex = (textIndex + 1) % texts.length;
            charIndex = 0;
            setTimeout(writeText, 0);
        }, 3000); // Attendre 3 secondes après que le texte est entièrement écrit
    }
}

setTimeout(writeText, 3000);


/* popup */
const popupContainer = document.getElementById("popupContainer");
const acceptButton = document.getElementById("acceptButton");
const cguLink = document.getElementById("cguLink");

// Fonction pour afficher la pop-up
function showPopup() {
    popupContainer.style.display = "block";
}

// Fonction pour cacher la pop-up
function hidePopup() {
    popupContainer.style.display = "none";
}

// Événement : Afficher la pop-up lorsque l'utilisateur clique sur le lien CGU
cguLink.addEventListener("click", showPopup);

// Événement : Rediriger vers la page des CGU lorsque l'utilisateur accepte
acceptButton.addEventListener("click", function () {
    // Redirection vers la page des CGU (remplacez l'URL par l'URL de votre choix)
    window.location.href = "cgu.html";
    hidePopup();
});


/* accepter */ 
const acceptText = document.getElementById("acceptText");

const acceptTexts = [
    `En cliquant sur le bouton "Ạ̴̌̅͜c̸̡̥̈́̏c̸̩͘e̶͇̟͐̚p̴̨͒̀t̶͈̆͌ẹ̶̈́̚r̷̢̺̀", vous vous engagez à lire notre charte d'adhésion.`,
    `En cliquant sur le bouton "À̷̲̙͔c̶̻̮͐̐͜c̶͉̯̑̉e̷̬̍͆p̶̍͋̂͜t̷̼̎̽̆e̷̬̺͋̾r̴̟̦͕̒̇", vous vous engagez à lire notre charte d'adhésion.`,
    `En cliquant sur le bouton "A̶̜̽̈́c̶̫̱̥̯̏̓͗c̷̼͈͍̽́̔ẽ̷̹͇̜̈́p̷̥͂̿̚t̴̨̨̹͑͐͛͊é̴̙̯̭͈͊̚r̵̩͖̓͛͛͑", vous vous engagez à lire notre charte d'adhésion.`,
    `En cliquant sur le bouton "A̸̟̾̔̿̍͜c̵̤͌͐̊c̸̙͙͖̎̂̈̏͠e̴͉̩͇̘̓̀̄͜p̴̧̪͌̌͒͐͛ͅt̵͈͊̀̓͘͘ḛ̷̡̘͎̔̓r̵̫̘̦͓͆̈́̐͒͘", vous vous engagez à lire notre charte d'adhésion.`,
];
const acceptButtonTexts = [
    `Ạ̴̌̅͜c̸̡̥̈́̏c̸̩͘e̶͇̟͐̚p̴̨͒̀t̶͈̆͌ẹ̶̈́̚r̷̢̺̀`,
    `À̷̲̙͔c̶̻̮͐̐͜c̶͉̯̑̉e̷̬̍͆p̶̍͋̂͜t̷̼̎̽̆e̷̬̺͋̾r̴̟̦͕̒̇`,
    `A̶̜̽̈́c̶̫̱̥̯̏̓͗c̷̼͈͍̽́̔ẽ̷̹͇̜̈́p̷̥͂̿̚t̴̨̨̹͑͐͛͊é̴̙̯̭͈͊̚r̵̩͖̓͛͛͑`,
    `A̸̟̾̔̿̍͜c̵̤͌͐̊c̸̙͙͖̎̂̈̏͠e̴͉̩͇̘̓̀̄͜p̴̧̪͌̌͒͐͛ͅt̵͈͊̀̓͘͘ḛ̷̡̘͎̔̓r̵̫̘̦͓͆̈́̐͒͘`,
];

let acceptTextIndex = 0;

function updateText() {
    acceptText.textContent = acceptTexts[acceptTextIndex];
    acceptButton.textContent = acceptButtonTexts[acceptTextIndex];
    acceptTextIndex = (acceptTextIndex + 1) % acceptTexts.length;
}
setInterval(updateText, 100);


/* header/footer couleur */
function triggerLightning() {
    const header = document.getElementById("header");
    const footer = document.getElementById("footer");

    // Ajoutez la classe pour déclencher l'animation d'éclair
    header.classList.add("lightning-animation");
    footer.classList.add("lightning-animation");

    // Supprimez la classe après une courte période pour permettre la répétition
    setTimeout(() => {
        header.classList.remove("lightning-animation");
        footer.classList.remove("lightning-animation");
    }, 2000); // Durée de l'animation
}
setInterval(triggerLightning, 10000);


/* Fonction qui crée un oeil à une position aléatoire */
const images = ["eye1.png", "eye2.png", "eye3.png", "eye4.png", "eye5.png"];
const interval = 1000; // Intervalle entre les images (en ms)
let currentIndex = 0;
let clickCounter = 0;

function createEye() {
    const body = document.body;
    const eyeImage = document.createElement("img");
    eyeImage.src = images[currentIndex];
    eyeImage.className = "eye-image";

    // Position horizontale aléatoire à l'intérieur de la fenêtre du navigateur
    const maxX = window.innerWidth - 36;
    eyeImage.style.left = Math.random() * maxX + "px";

    // Position verticale aléatoire à l'intérieur de la fenêtre du navigateur
    const maxY = window.innerHeight - 25;
    eyeImage.style.top = Math.random() * maxY + "px";

    // Ajoutez un gestionnaire d'événements de clic pour faire disparaître l'image
    eyeImage.addEventListener("click", () => {
        eyeImage.style.visibility = "hidden"; // Cachez l'image au lieu de la supprimer
        clickCounter++; // Augmentez le compteur de clics

        if (clickCounter >= 2) {
            // Si 5 yeux ont été cliqués, affichez le popup personnalisé
            showCustomPopup();
        }
    });

    body.appendChild(eyeImage);

    // Passez à l'image suivante
    currentIndex = (currentIndex + 1) % images.length;
}

// Appelez createEye toutes les "interval" millisecondes
setInterval(createEye, interval);

function showCustomPopup() {
    const customPopup = document.getElementById("customPopup");
    const overlay = document.querySelector(".popup-overlay-custom");
    customPopup.style.display = "block";
    overlay.style.display = "block";

    // Ajoutez un gestionnaire d'événements de clic pour le bouton "Fermer"
    const closeButton = document.getElementById("closePopup");
    closeButton.addEventListener("click", () => {
        customPopup.style.display = "none"; // Cachez le popup
        overlay.style.display = "none"; // Cachez le fond semi-transparent
        clickCounter = 0; // Réinitialisez le compteur de clics
    });
}


/* l'oeil footer */
const eyeGuideContainer = document.getElementById("eyeGuideContainer");
const guideText = document.getElementById("guideText");

eyeGuideContainer.addEventListener("mouseenter", () => {
    guideText.textContent = "Pour une fois, vous lirez les conditions d'utilisation"; // Texte au passage de la souris
});

eyeGuideContainer.addEventListener("mouseleave", () => {
    guideText.textContent = "Ľ̸͕͉̗͉̍́̌'̶̳͚͛́̐͌̿o̷̺̩͕̘̣̎̈e̴̡̤̝̜͊̃̓ĭ̶̥̟̤͇̄̎͗͠l̸̡̢̛̘̜̀̿̎̒͜ ̵̘͈͑̈́ṽ̶̫̪ͅö̸͉́̅́u̷̙͈͙̦͆͊s̵̨͒́ ̶̭͙͖̰́͌͌̋́ǧ̷̺u̶͕̗̖̤̿̒i̷͍̜̜͗̽͜d̴̡͇͕͓̉̔͌ě̶̠̜̤͇̉͛̊̚ȓ̴̨ͅá̵̢ ̷̪͖͕̗̈́̾͛̈́t̷̓̍͛̕̕ͅo̴̦̫̘͚̙̚u̵̥̺͖̔̿̈́͝t̸̡͚̼̘̐̌͋̚ ̴̨̣͎̼͗̉͂̒ȧ̶̮̳̍ủ̴̱͚̑̑͑ ̶̨͖͉̥͐̏̓͘ͅl̸̗̤̊̚ǫ̸̭͎̝͆͘̕n̸͈͕̈́g̶̹̳̊͆̓͋ ̴̛̮̭̾͂͑ͅd̵̢̳̜̟̝͗͗ȇ̵͓̫̭̊̇ ̶̲̟̖̤̑̈͘v̶̢͙̯̗̤̿ỏ̵͈̱̲̙ͅt̶̺͓̖̯̎ṙ̶̫͚̱̞ȩ̸̼̞̼͕͝ ̶̩̇͝ċ̵̨̝̦̇͜h̷̨̢̛͎̲͓ḝ̸̢̯̙m̴̫̟̱̈́̄͂i̸̢̧̱̘͍͗͠n̶͔͂̓̿̍̇"; // Texte initial
});


// Récupérer le bouton par son ID
var boutonSon = document.getElementById('sonButton');

// Créer un nouvel élément audio
var audio = new Audio('suuu.mp3'); // Remplacez 'chemin/vers/votre/son.mp3' par le chemin de votre propre fichier audio.

// Ajouter un gestionnaire d'événement de clic au bouton
boutonSon.addEventListener('click', function() {
    // Jouer le son
    audio.play();
});