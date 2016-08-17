////add a toggledrop down menu
//function myFunction() {
//    document.getElementById("myDropdown").classList.toggle("show");
//}
////add content to drop-down 
//    window.onmouseover = function(event) {
//        if (!event.target.matches('.dropbtn')) {
//            var dropdowns = document.getElementByClassName("dropdown-content");
//            var i;
//            for (i = 0; i < dropdowns.length; i++) {
//                var openDropdown = dropdowns[i];
//               // if (openDropdown.classList.contains('show')) {
//                 //   openDropdown.classList.remove('show');
//                 //}
//            }
//        }
//    }
//    window.onmouseout = function (event) {
//        openDropdown.classList.remove('show')
//            }

function hoverDropDown(showHide, menu) {
    var btnObj = document.getElementsByClassName('dropbtn');
    var dropObj = document.getElementById("myDropdown");

    if (showHide == 0) {
        dropObj.style.display = 'none';
        btnObj.setAttribute('class', 'mainNav');
        btnObj.setAttribute('className', 'mainNav');
    } else {
        dropObj.style.display = 'block';
        btnObj.setAttribute('class', 'dropdown-content');
        btnObj.setAttribute('className', 'dropdown-content');
        

    }
};