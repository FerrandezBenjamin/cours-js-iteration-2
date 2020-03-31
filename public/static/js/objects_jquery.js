
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

function refresh() {
  // 1 = vider la table
  // 2 = remplir la table 
  document.getElementById('table_body').innerHTML = "";
  load_components();
  console.log(document.getElementById('table_body').innerHTML);
}

function add_line_table(data) {

  let checked = "";

  if (data.status) {
    checked = "checked";
  } else {
    checked = "";
  }

  if (!data.image){
    addImage(data);
  }

  let line = ' <tr>\
  <th style="width: 100px">'+ data.serial + '</th>\
    <th><img style="max-width:30%; heigth:10%;" src=" static/images/'+ data.image + '"></th>\
    <th>'+ data.description + '</th>\
    <th style="width: 100px"><input type ="checkbox" '+ checked + '></th>\
    <th style="width: 100px"><button class="btn-primary"></button></th>\
    </tr>'

  // $('#table_body').append(line); Façon Jquery !

  document.getElementById('table_body').innerHTML += line;
}

function addImage(data_objects){
  $.get('/data', function (data){
    for (let i of document.getElementById('table_body').childNodes) {
      if (i.nodeName == 'TR') {
        if (i.childNodes[1].childNodes[0].textContent == data_objects.serial) {
          i.childNodes[3].childNodes[0].setAttribute('src', '/static/images/' +data.types.Digital_CO2.default_image);;
        }
      }
    }
  });
}


