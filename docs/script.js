const burger = document.getElementById("menu");
const nav = document.getElementById("nav");
burger.addEventListener('click', () =>{
    nav.classList.toggle('trouve');
})

const entres = document.querySelectorAll(".textarea");

entres.forEach((element, index)=> {
    element.addEventListener('keydown', function(e){
        if (e.key === 'Enter'){
            e.preventDefault(); 

            // aller au champ suivant s'il existe
            const suivant = entres[index +1];
            if(suivant) {
                suivant.focus();
            }
        }
    });
});

const formulaire = document.getElementById("formulaire");

formulaire.addEventListener('submit', function(e){
    e.preventDefault();
    alert ("Message envoyé");
    formulaire.reset();
});