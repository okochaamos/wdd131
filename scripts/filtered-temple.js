const date = new Date(document.lastModified);
document.getElementById("lastmod").innerHTML = `Last Modified: ${date}`;

document.querySelector('.hamburger-button').addEventListener('click', function() {
    document.querySelector('.myLinks').style.display = 
    (document.querySelector('.myLinks').style.display == 'none') ? 'flex' : 'none';
    });



  

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    
    
  
    {
        templeName: "Johannesburg South Africa Temple",
        location: "Johannesburg, Gauteng, South Africa",
        dedicated: "1985,August, 24",
        area: 19184,
        imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/johannesburg-south-africa/800x500/johannesburg-south-africa-temple-lds-83166-wallpaper.jpg"

    },

    {
        templeName: "Rome Italy Temple",
        location: "Rome, Roma, Italy",
        dedicated: "2019, March, 10",
        area: 40000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/800x500/2-Rome-Temple-2190090.jpg"
    },
    {

        templeName: "Nauvoo Illinois Temple ",
        location: "Nauvoo, Illinois, United States",
        dedicated: "2002, June,  27",
        area: 54000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/nauvoo-illinois/800x500/nauvoo-temple-756527-wallpaper.jpg"
    },
    


    {
        templeName: "Laie Hawaii Temple",
        location: "Laie, Hawaii, United States",
        dedicated:"1919, November, 27 ",
        area: 47224,
        imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/laie-hawaii/800x500/laie-temple-772761-wallpaper.jpg",


    },


    {
        templeName: "San Diego California Temple",
        location:"San Diego, California, USA",
        dedicated:"1993, April, 25",
        area:72000,
        imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/san-diego-california/800x500/san-diego-california-temple-grounds-1164680-wallpaper.jpg",

    }


        // Add more temple objects here...
    ];






let firstHeading = document.getElementById('caption');
let templeCards= document.getElementById('temple-cards');
createTempleCards("Home");


function createTempleCards(filter){
    templeCards.innerHTML = ""; 
    firstHeading.textContent = filter;   
    let filteredTemples = temples;

    if (filter === 'Old') {
        filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);

       
    } else if (filter === 'New') {
        filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
       
    } else if (filter === 'Large') {
        filteredTemples = temples.filter(temple => temple.area > 90000);

    } else if (filter === 'Small') {
        filteredTemples = temples.filter(temple => temple.area < 10000);
       
    }
    
    // Loop through the temples array and create DOM elements for each temple
    filteredTemples.forEach(temple => {
        // Create a div element for each temple
        const templeDiv = document.createElement('div');
        templeDiv.classList.add('temple');
    
        // Create and set the content for the temple's name
        const templeName = document.createElement('h3');
        templeName.textContent = temple.templeName;
        templeDiv.appendChild(templeName);
      
        // Create and set the content for the temple's location
        const templeLocation = document.createElement('p');
        templeLocation.textContent = `Location: ${temple.location}`;
        templeDiv.appendChild(templeLocation);
    
        // Create and set the content for the temple's dedication date
        const templeDedicated = document.createElement('p');
        templeDedicated.textContent = `Dedicated: ${temple.dedicated}`;
        templeDiv.appendChild(templeDedicated);
    
        // Create and set the content for the temple's area
        const templeArea = document.createElement('p');
        templeArea.textContent = `Area: ${temple.area} sq ft`;
        templeDiv.appendChild(templeArea);
    
        // Create and set the content for the temple's image
        const templeImage = document.createElement('img');
        templeImage.src = temple.imageUrl;
        templeImage.alt = `${temple.templeName} image`;
        templeImage.setAttribute("loading", "lazy");
        templeDiv.appendChild(templeImage);
    
        // Append the temple div to the container
        templeCards.appendChild(templeDiv);
    
        
    });
    
}
  
// document.getElementById("old").addEventListener("click", () => {
//     const filteredTemples = temples.filter(temple => !temple.area >10000);
//     createFilteredTempleCards(filteredTemples);
// });

// function createFilteredTempleCards(filteredTemples) {
//     const filteredTempleCards = document.getElementById("filtered-temple-cards");
//     filteredTempleCards.innerHTML = ''; // Clear any existing content

//     filteredTemples.forEach(temple => {
//         let oldCard = document.createElement("div");
//         oldCard.classList.add("filteredTemples");

//         let oldCardHeading = document.createElement("h2");
//         oldCardHeading.textContent = "Old Temples";

//         let oldCardTempleName = document.createElement("h3");
//         oldCardTempleName.innerHTML = temple.templeName;

//         let oldCardLocation = document.createElement("p");
//         oldCardLocation.innerHTML = `Location: ${temple.location}`;

//         let oldCardDedicated = document.createElement("p");
//         oldCardDedicated.innerHTML = `Dedicated: ${temple.dedicated}`;

//         let oldCardArea = document.createElement("p");
//         oldCardArea.innerHTML = `Area: ${temple.area}`;

//         let img = document.createElement("img");
//         img.setAttribute("src", temple.imageUrl);
//         img.setAttribute("alt", `${temple.templeName} image`);
//         img.setAttribute("loading", "lazy");

//         oldCard.appendChild(oldCardHeading);
//         oldCard.appendChild(oldCardTempleName);
//         oldCard.appendChild(oldCardLocation);
//         oldCard.appendChild(oldCardDedicated);
//         oldCard.appendChild(oldCardArea);
//         oldCard.appendChild(img);

//         filteredTempleCards.appendChild(oldCard);
//     });

