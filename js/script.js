// icon bar
const iconNavbar = document.getElementsByClassName("icon-navbar");
const changeDownnav = document.getElementsByClassName("down-navbar");
let clickNav = document.querySelectorAll('.navbar-top a');
for (let i = 0; i < iconNavbar.length; i++) {
    iconNavbar[i].addEventListener("click", function () {
        this.classList.toggle("change-icon");
        for (let j = 0; j < changeDownnav.length; j++) {
            changeDownnav[j].classList.toggle("active-down");
            clickNav.forEach(element => {
                element.addEventListener('click', () => {
                    changeDownnav[j].classList.remove("active-down");
                    iconNavbar[i].classList.remove("change-icon");
                });
            });
        }
    });

}

// active menu scroll
window.addEventListener('scroll', () => {
    let scrollvertical = window.scrollY;
    document.querySelectorAll('.section_active').forEach((el, i) => {
        if (el.offsetTop - 300 <= scrollvertical) {
            document.querySelectorAll('.navbar-top a').forEach((el) => {
                if (el.classList.contains('active_nav')) {
                    el.classList.remove('active_nav');
                }
            });
            document.querySelectorAll('.navbar-top a')[i].classList.add('active_nav');
        }
    });
});

//nav scroll
document.querySelectorAll('.link_nav').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        let href = this.getAttribute('href').substring(1);
        const scrollTarget = document.getElementById(href);
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - 80;
        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

//Animate
const animItems = document.querySelectorAll('.wa-animate');
if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        animItems.forEach(animItem => {
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }
            if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
                animItem.classList.add('activate-animate');
            } else {
                if (!animItem.classList.contains('animate-no')) {
                    animItem.classList.remove('activate-animate');
                    window.addEventListener("scroll", noscroll);
                }
            }
        });
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.scrollX || document.documentElement.scrollLeft,
            scrollTop = window.scrollY || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    setTimeout(() => {
        animOnScroll();
    }, 300);
}



