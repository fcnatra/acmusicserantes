// Definición de los elementos a cargar
const elements = [
    
    // BILONGO LT
    {
        url: "http://www.bilongolt.com",
        image: "https://www.premiosrockvillamadrid.es/wp-content/uploads/2024/04/BILONGO-LT.jpg",
        title: "Bilongo LT"
    },


    // LOS COJONES
    {
        url: "https://open.spotify.com/artist/5p2Ez16VSkHhN9ZG8SNNd8?si=ZOGU1ep2QJyzpFvPGxBkJw",
        image: "https://s1.ppllstatics.com/elcorreo/www/multimedia/202202/09/media/cortadas/rock2-kzvB-U160871286370NdH-624x385@El%20Correo.jpg",
        title: "Los Cojones"
    },


    // VALKYRIA
    {
        url: "https://www.instagram.com/valkyria_oficial/",
        image: "https://fanmusicfest.com/sites/default/files/styles/escrec_125x125/public/Valkyria.jpg",
        title: "Valkyria"
    },


];

// Función para mezclar el array de forma aleatoria (Fisher-Yates)
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Mezcla los elementos
shuffle(elements);

// Selecciona el contenedor de destino
const container = document.getElementById('dynamic-items');

// Para cada elemento, crea la ancla y la imagen
elements.forEach(item => {
    // Crear el elemento <a>
    const link = document.createElement('a');
    link.href = item.url;
    link.target = "_blank";

    // Crear la imagen
    const img = document.createElement('img');
    img.src = item.image;
    img.title = item.title;
    img.style.maxWidth = "500px";
    img.style.width = "100%";
    // Opcional: agrega el mismo id o clase si se requirió para estilos (por ejemplo 'other-images')
    img.id = "other-images";

    // Agrega la imagen al link y el link al contenedor
    link.appendChild(img);

    // Agrega un salto de línea antes y después para separar los elementos
    container.appendChild(document.createElement('br'));
    container.appendChild(document.createElement('br'));
    container.appendChild(link);
});
