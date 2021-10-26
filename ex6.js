let pelicula = {
    img: "",
    title: "Duro de Matar",
    desc: "clasico de Holliwood",
    clasif: "+18"
}


function printMovieCard(movie) {
    let printInSection = document.getElementById("body");
    printInSection.innerHTML = `<section id="ex6" class="cardbox">
                                    <img class="" src="" alt="">
                                    <h2 >${movie.title}</h2>
                                    <h3>${movie.desc}</h3>
                                    <h3>${movie.clasif}</h3>
                                </section>`;
}

printMovieCard(pelicula);