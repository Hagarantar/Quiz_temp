let activeLinks = $(".slide-control-one a , .slide-control-two a");

$(activeLinks).click( function(e){
    let activeAll = document.querySelector(".slide-control-two .active");
    $(activeAll).removeClass("active");
    $(e.target).addClass("active");
})
