
/**
 * Fonction à appeler au chargement de la page
 * Cette fonction devra exécuter les actions suivantes :
 *    - charger la liste des objets depuis l'API
 *    - charger les données des objets dans la table
 */
function load_components()
{
   $("button").click(function()
    {
        $.get("/data", function(data, status){
          
          console.log(data);
        });
    });
      console.log("Chargement des données de la page");
        // Ajouter ici le code permettant de charger dynamiquement les éléments de la page     
}


function add_line_table(){


    let line = '<th style="width: 100px">xx</th>\
    <th>xx</th>\
    <th>xx</th>\
    <th style="width: 100px"><input type ="checkbox"></th>\
    <th style="width: 100px"><button class="btn-primary">xx</button></th>'

    // $('#table_body').append(line); Façon Jquery !
    document.getElementById('table_body').innerHTML += line;

}
