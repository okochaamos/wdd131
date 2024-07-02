const date = new Date(document.lastModified);
document.getElementById("lastmod").innerHTML = `Last modified: ${date}`;

document.querySelector('.hamburger-button').addEventListener('click', function() {
    document.querySelector('.myLinks').style.display = 
    (document.querySelector('.myLinks').style.display == 'none') ? 'flex' : 'none';
    })



                
                


            