function printTitleH1 (title){
    blockToPrint = document.getElementById("body");
    blockToPrint.innerHTML += `<h1>${title}</h1>` 
}

function printTitleHX (title,h){
    blockToPrint = document.getElementById("body");
    blockToPrint.innerHTML += `<${h}>${title}</${h}>` 
}

//printTitleH1("Titulo del H1(printTitleH1)");


//printTitleHX("Titulo H1 con printTitleHX","h1")
//printTitleHX("Titutlo H2","h2");
//printTitleHX("Titulo h3","h3")
//printTitleHX("Titulo h4","h4")