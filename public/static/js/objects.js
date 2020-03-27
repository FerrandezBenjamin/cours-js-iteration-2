
/**
 * Fonction à appeler au chargement de la page
 * Cette fonction devra exécuter les actions suivantes :
 *    - charger la liste des objets depuis l'API
 *    - charger les données des objets dans la table
 */
function load_components() {
  $.get("/objects", function (data) {
    for (let object of data.objects) {
      add_line_table(object);
    }
  });
}

function add_line_table(data) {
  
  let checked ="";

    if (data.status){
      checked = "checked";
    } else{
       checked = "";
    }

  let line = ' <tr>\
  <th style="width: 100px">'+data.serial+'</th>\
    <th><img style="max-width:30%; heigth:10%;" src=" static/images/'+data.image+'"></th>\
    <th>'+data.description+'</th>\
    <th style="width: 100px"><input type ="checkbox" '+checked+'></th>\
    <th style="width: 100px"><button class="btn-primary"></button></th>\
    </tr>'

  // $('#table_body').append(line); Façon Jquery !

  document.getElementById('table_body').innerHTML += line;
}
