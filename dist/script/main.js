(function () {
    try {
        let btnDrops = document.querySelectorAll(".btn__dropdown");
        btnDrops.forEach(function (btnClick) {
            btnClick.addEventListener("click", function () {
                let dropdowns = document.getElementsByClassName("dropdown__items");
                let thisdropdown = this.nextSibling.nextSibling;
                if (thisdropdown) {
                    if (!thisdropdown.classList.contains('active')) {
                        let i;
                        for (i = 0; i < dropdowns.length; i++) {
                            dropdowns[i].classList.remove('active');
                        }
                    }
                    thisdropdown.classList.toggle("active");
                }
            })
        })
    } catch (error) {
        console.log(error.message);
    }

    // Close the dropdown if the user clicks outside of it
    window.onclick = function (event) {
        if (!event.target.matches('.btn__dropdown')) {
            let dropdowns = document.getElementsByClassName("dropdown__items");
            let i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('active')) {
                    openDropdown.classList.remove('active');
                }
            }
        }
    }



    /*  ***** Mynotebooke ***** */
    const Mynotebooke = document.querySelector(".noetbook__body--row");
    const createELmetP = document.createElement("p");
    createELmetP.innerText = "یادداشتی وجود ندارد";
    createELmetP.classList.add("nofiction__p");
    const noteBookFirstChile = Mynotebooke.firstElementChild;
    if (noteBookFirstChile === null) {
        Mynotebooke.appendChild(createELmetP)
    }
    /*  ***** Mynotebooke ***** */

    /* more list notif */
    const notif__item = document.querySelectorAll(".notif__item");
    const more__notif = document.getElementById("more__notif");
    if (notif__item.length < 5) {
        more__notif.style.display = "none"
    }
    /* more list notif */


    /* ****  notifContainer *** */
    const notifContainer = document.querySelector(".notif__container");
    const firtChildNotifContainer = notifContainer.firstElementChild;
    const crtNotiTag_P = document.createElement("p");
    crtNotiTag_P.innerText = "اطلاعاتی وجود ندارد";
    crtNotiTag_P.classList.add("nofiction__p");
    if (firtChildNotifContainer === null) {
        notifContainer.appendChild(crtNotiTag_P)
    }
    /* ****  notifContainer *** */



    var navItems = document.querySelectorAll(".nav__item")
    try {
        for (var i = 0; i < navItems.length; i++) {
            navItems[i].addEventListener("click", function () {
                var current = document.getElementsByClassName("active");
                if (current.length > 0) {
                    current[0].className = current[0].className.replace(" active", "");
                }
                this.className += " active";
            });
        }
    } catch (e) {
        console.log(e)
    }
}())