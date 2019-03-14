
 var Valider = document.getElementById("demande");
 var Error = document.getElementById("errorName");
 var Parametre = document.getElementById("parametre");
 Valider.addEventListener('onclick',verifierFormulaire);


function verifierFormulaire(event)
{
    if(Parametre.validity.valueMissing)
    {
        event.preventDefault();
        Parametre.textContent = 'Vous devez donner vos coordonnées complètes !';
        Parametre.style.color = 'red';
    }
}

