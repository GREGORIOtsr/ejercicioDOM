let arr = ["comprar", "barrer", "alimentar gato", "colada"];


document.getElementById("listaDiv").appendChild(document.createElement("ul"));
document.querySelector("#listaDiv ul").setAttribute("id", "ulDiv");

let listaPadre = document.getElementById("ulDiv")

for (i = 0; i < 4; i++) {
    let crearLista = document.createElement("li");
    listaPadre.appendChild(crearLista).setAttribute("class", "liDiv");
    let textNode = document.createTextNode(arr[i]);
    document.querySelector(`.liDiv:nth-child(${i+1})`).appendChild(textNode);
}