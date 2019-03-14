
var entree = prompt("Entrer une Annee :");
var sortie = document.getElementById("affichage");

function isAnneeBissextile(Annee)
{
    if( Annee % 4 == 0 || Annee % 400 == 0)
    {
        sortie.innerHTML = entree + "est une annee bissextile"
    }
    else
    {
       sortie.innerHTML = entree + " n est pas une annee bissextile "
    }
}
isAnneeBissextile(entree);