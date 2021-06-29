var images = ["mom.jpg","dad.jpg","sis.jpg","lil_bro.png"];
var names = ["Mom","Dad","Sis","Lil Bro"];
    var j = 0;
    function nextslide()
    {
       
        if(j == 4)
        {
            
            j = 0;
        }
        document.getElementById("album").src = images[j];
        document.getElementById("label").innerHTML = names[j];
        j++;
    }