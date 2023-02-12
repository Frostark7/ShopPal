img_array= new Array('/images/icon128.png', '/images/dark128.png');
i=0;
function swap()
{
     i++;
    document.getElementById("icon").src=img_array[i];
    if(i==img_array.length-1) {
   i=-1;
    }
}

function modeFunc() {
    var element = document.body;
    element.classList.toggle("bodydark");
    element.classList.toggle("titledark");
}

document.addEventListener('DOMContentLoaded', function()
{
    document.getElementById('modebtn').addEventListener("click", function() {
        modeFunc()
        swap()
    })
})