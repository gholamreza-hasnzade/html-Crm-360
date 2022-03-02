const contacForm = document.getElementById("form__login");

const ShowloginToast = (title, message) => {
    const loginAlertElem = document.createElement("div");
    const strongElem = document.createElement("strong");
    const pElem = document.createElement("p");
    const iElem = document.createElement("i");
    loginAlertElem.classList.add("login__alert");
    strongElem.classList.add("login__alert--title");
    pElem.classList.add("login__alert--text");
    iElem.classList.add("login__alert--close");
    strongElem.innerText = title;
    pElem.innerText = message;
    loginAlertElem.appendChild(strongElem);
    loginAlertElem.appendChild(pElem);
    loginAlertElem.appendChild(iElem);
    setTimeout(function () { loginAlertElem.style.opacity = "1"; }, 200)


    return loginAlertElem;
}
const showTooltip = (message = null) => {
    const tooltipEleEl = document.createElement("div");
    const spanEle = document.createElement("span");
    tooltipEleEl.classList.add("tooltip");
    spanEle.classList.add("tooltiptext");
    spanEle.innerText = message;
    tooltipEleEl.appendChild(spanEle);
    return tooltipEleEl;

}
const closeloginToast = () => {
    const login__alertClose = document.querySelector(".login__alert--close");
    login__alertClose.addEventListener("click", () => {
        const prentStyle = login__alertClose.parentElement;
        if (prentStyle.style.opacity === "1") {
            setTimeout(
                function () {
                    prentStyle.style.opacity = "0";
                    prentStyle.remove();
                }, 200);
        }
    })
}

if (contacForm !== null) {
    contacForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const username = document.getElementById("username__login");
        const password = document.getElementById("password__login");
        const parentItem = username.parentElement
        const parentUserName = username.parentElement;
        const parentPassword = password.parentElement;
        if (username.value.trim() === "" || password.value.trim() === "") {
            parentUserName.classList.add("isErros");
            parentPassword.classList.add("isErros");
            contacForm.appendChild(ShowloginToast("خطا", "نام کاربری یا کلمه عبور اشتباه است"));
            parentItem.appendChild(showTooltip("نام کاربری نمیتواند خالی باشد"))
            closeloginToast()

        } else {
            parentUserName.classList.remove("isErros");
            parentPassword.classList.remove("isErros");
        }

    });
}

const togglePassword = document.querySelector('.showPassword');
if (togglePassword !== null) {
    togglePassword.addEventListener('click', function (e) {
        const password = document.querySelector('#password__login');
        // toggle the type attribute
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
        // toggle the eye slash icon
        this.classList.toggle('isToggle');
    });

}









