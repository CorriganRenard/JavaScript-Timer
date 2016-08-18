////add a toggledrop down menu

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