//add a toggledrop down menu
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
//add content to drop-down 
    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                 }
            }
        }
    }