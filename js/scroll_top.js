var mybutton = document.getElementById("scroll_to_top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
        // mybutton.style.bottom = "25px";
        // mybutton.style.right = "25px";
        // if ($(window).scrollTop() + $(window).height() < $(document).height() - $("#footer_id").height()) {
        //     mybutton.style.position = "fixed";
        // } else {
        //     mybutton.style.position = "relative";
        //     mybutton.style.bottom = "200px";
        //     // mybutton.style.right = "25px";
        // }
    } else {
        mybutton.style.display = "none";
    }
}
