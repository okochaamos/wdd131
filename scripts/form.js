


const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averageRating: 4.5,
    },

    {
      id: "fc-2050",
      name: "power laces",
      averageRating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averageRating: 3.5,
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averageRating: 3.9,
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averageRating: 5.0,
    }
  ];

// createOption(filteredProducts);
// let productCards= document.getElementById("products");
// let filteredProducts = productsArray ;


// function createOption(){
    


//     filteredProducts.forEach(product =>{
//         productCards.innerHTML="";

//         const productOption = document.createElement('option');
//         productOption.classList.add('product');

//         const productName = document.createElement('value');
//         productName.textContent = productsArray.Name;
//         productOption.appendChild(productName);

//         productCards.appendChild(productOption);
     

        
//     });
// }
document.addEventListener('DOMContentLoaded', () => {
    const productSelect = document.getElementById('productSelect');



    products.forEach(product => {
        
        const option = document.createElement('option');
        
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
});


const date = new Date(document.lastModified);
document.getElementById("lastmod").innerHTML = `Last modified: ${date}`;

document.querySelector('.hamburger-button').addEventListener('click', function() {
    document.querySelector('.myLinks').style.display = 
    (document.querySelector('.myLinks').style.display == 'none') ? 'flex' : 'none';
    })

