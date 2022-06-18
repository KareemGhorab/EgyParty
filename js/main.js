const animtionTime = 500;

const sideNav = $("nav");
const navWidth = sideNav.innerWidth();
sideNav.css("left", `${-navWidth}px`);
$("header .open-btn, nav i").click(function() {
    if (sideNav.css("left") == "0px") {  //Opened
        $(".header-content").animate({paddingLeft:0}, animtionTime);
        sideNav.animate({left:`${-navWidth}px`}, animtionTime);
    }
    else {
        $(".header-content").animate({paddingLeft:`${navWidth}px`}, animtionTime);
        sideNav.animate({left:`0`}, animtionTime);
    }
})

$("nav a").click(function() {
    $("body,html").animate({scrollTop: $($(this).attr("href")).offset().top}, animtionTime);
})

$("#details blockquote").css("display", "none");
$("#details .filter").click(function() {
    let slide = false;
    if ($(this).next().css("display") == "none") {
        slide = true;
    }
    $(this).siblings("blockquote").slideUp(animtionTime*2);
    if (slide) {
        $(this).next().slideDown(animtionTime*2);
    }
})

let charsLeft = 100;
$("textarea").on("input", (function () {
    charsLeft = 100 - $(this).val().length;
    if (charsLeft < 0) {
        $(this).val($(this).val().slice(0, 100));
        return;
    }
    $("#chars").html(`${charsLeft}`);
}))