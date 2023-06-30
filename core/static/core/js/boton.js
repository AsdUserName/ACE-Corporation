
(function() {
    const ishow = 115
    const $divtop = document.getElementById("div-totop")
    window.addEventListener("scroll", function() {
        if(document.documentElement.scrollTop > ishow){
            $divtop.style.display = "inherit"
        } else {
            $divtop.style.display = "none"
        }
    })
})()
