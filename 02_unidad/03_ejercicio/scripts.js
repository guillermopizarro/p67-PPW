function cargar_datos(personaje_id) {
    const xhttp = new XMLHttpRequest()

    xhttp.open('GET', 'catalogo.xml', true)
    xhttp.onreadystatechange = function() {
        if (xhttp && xhttp.readyState == 4 && xhttp.status == 200) {
            cargar_xml(xhttp.responseXML)
        }
    }
    xhttp.send()
}

function cargar_xml(xml_doc) {
    let tabla = "<table><thead><tr><th>Title</th><th>Artist</th></tr></thead><tbody>"

    let x = xml_doc.getElementsByTagName('CD')
    for (let i=0; i<x.length; i++) {
        tabla += '<tr><td>' + x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue + '</td><td>' +
                              x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue + '</td></tr>'
    }
    tabla += "</tbody></table>"
    document.getElementById('demo').innerHTML = tabla
}