function printInTitle() {
    let titleToPrint = document.getElementById("TitleInput").value;
    let printInBlock = document.getElementById("body");
    printInBlock.innerHTML = `<h1>${titleToPrint}</h1>`;
}

