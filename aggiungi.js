"use strict"

let jsonDoc;

window.onload = function(){
    let json = localStorage.getItem("jsonBookstore");
    if(json != null)
        jsonDoc = JSON.parse(json);
    else
        jsonDoc = [];
}

function salva(){
    let libro = {};
    libro.title = document.getElementById("txtTitolo").value;
    libro.author = document.getElementById("txtAutore").value;
    libro.category = document.getElementById("txtCategoria").value;
    libro.lang = document.getElementById("txtLingua").value;
    libro.year = document.getElementById("txtAnno").value;
    libro.price = document.getElementById("txtPrezzo").value;
    jsonDoc[jsonDoc.length] = libro;

    let json_str = JSON.stringify(jsonDoc);
    localStorage.setItem("jsonBookstore", json_str);

    ritorna();
}

function ritorna(){
    window.location.href = "index.html";    //reindirizzo alla pagina tra le virgolette
}