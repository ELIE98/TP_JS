
var fenetre;

//ouverture de la fenetre

function open_window()
{
    fenetre = window.open();
   fenetre.alert("cette fenetre se fermera dans 3 secondes");

    function close()
    {  fenetre = window.close();

    
    }


}
open_window();

setTimeout("window.close();",3000);



