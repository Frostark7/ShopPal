document.addEventListener('DOMContentLoaded', function()

{
  document.querySelector("#open").addEventListener("click", function() {
    popup.classList.add("open-popup");

    setTimeout(function() {
      popup.classList.remove("open-popup");
  }, 5000);

  })
})