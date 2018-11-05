function myFunction(x) {
    x.classList.toggle("change");
};

$(document).ready(function(){
    $(".menu").click(function(){
        $('.header-menu').toggleClass("header-menu_active");
        $('html, body').toggleClass("overflow_delete");
        })
    });

$(document).ready(function(){
    $('.nav__link').click(function(){
        $('.header-menu').removeClass('header-menu_active');
        $('html, body').removeClass("overflow_delete");
        $('.menu__btn').removeClass('change');
    });
});

    function openTab(evt, tab__link) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" tab_active", "");
    }
    document.getElementById(tab__link).style.display = "block";
    evt.currentTarget.className += " tab_active";
}

     document.getElementById("defaultOpen").click();