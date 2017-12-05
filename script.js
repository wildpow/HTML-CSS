const menuBtn = document.querySelector("#menu-btn");
menuBtn.addEventListener("click", showMenu, true);

const flyoutMenu = document.querySelector("#flyoutMenu");
flyoutMenu.addEventListener("click", hideMenu, true);


function showMenu(e) {
    menuBtn.classList.toggle("change")
    flyoutMenu.classList.add("show");
    document.body.style.overflow = "hidden";
}

function hideMenu(e) {
    menuBtn.classList.remove("change")
    flyoutMenu.classList.remove("show");
    e.stopPropagation()
    document.body.style.overflow = "auto";
}
window.addEventListener(
    'load',
    function load()
    {
        window.removeEventListener('load', load, false);
        document.body.classList.remove('fade-out');
    },
    false);
/* ..................................... */
    let isScrolling = false;
    
    window.addEventListener("scroll", throttleScroll, false);
    
    function throttleScroll(e) {
        if (isScrolling == false) {
            window.requestAnimationFrame(function() {
                scrolling(e);
                isScrolling = false;
            });
        }
        isScrolling = true;
    }

   document.addEventListener("DOMContentLoaded", scrolling, false);

    
   const mouse = document.querySelector(".Mouse__box");
    const aboutContent = document.querySelector(".About__content");

    function scrolling(e) {
        if (isFullyVisible(aboutContent)) {
            // aboutContent.style.display = 'block';
            aboutContent.classList.add("active");
            
        } else {
            // aboutContent.style.display = 'none';
            aboutContent.classList.remove("active");
        }
        // if (isPartiallyVisible(mouse)) {
        //     mouse.classList.add("hide");
        // } else {
        //     mouse.classList.remove("hide");
        // } 
    }

    function isPartiallyVisible(el) {
        var elementBoundary = el.getBoundingClientRect();

        var top = elementBoundary.top;
        var bottom = elementBoundary.bottom;
        var height = elementBoundary.height;

        return ((top + height >= 0) && (height + window.innerHeight >= bottom));
    }

    function isFullyVisible(el) {
        var elementBoundary = el.getBoundingClientRect();

        var top = elementBoundary.top;
        var bottom = elementBoundary.bottom;

        return ((top >= 0) && (bottom <= window.innerHeight));
    }