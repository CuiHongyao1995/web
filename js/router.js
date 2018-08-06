


$(function(){

    $(".top-menu").load("btm-menu-1.html")
    $(".page1").load("page-1-1")
    $(".btm-menu").load("btm-menu-1")



    //切换
    $(".menu-item").click(function() {

        $("#dynamic").load($(this).data("page"))

    })


})