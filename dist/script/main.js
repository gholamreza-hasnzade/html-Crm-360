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


    function dropdownSelect() {
        $('.m-form--control--select').each(function (i, select) {
            $(this).after('<div class="dropdown-select ' + ($(this).attr('class') || '') + ' " tabindex="0">' +
                '<span class="dropdown-select__current"></span>' +
                '<div class="dropdown-select__list">' +
                '<ul class="dropdown-select__ul"></ul>' +
                '</div>' +
                '</div>');

            var dropdown = $(this).next();
            var options = $(select).find('option');
            var selected = $(this).find('option:selected');
            dropdown.find('.dropdown-select__current').html(selected.text());

            options.each(function (j, o) {
                var dropdown__option = '<li class="dropdown-select__option  ' + ($(o).is(':selected') ? 'dropdown-select--selected' : '') + ' " data-value="' + $(o).val() + '" tabindex="0">' + $(o).text() + '</li>';
                dropdown.find('ul').append(dropdown__option);
            })
        })
        $(document).on('click', '.dropdown-select', function () {
            $('.dropdown-select').not($(this)).removeClass('dropdown-select--open');
            $(this).toggleClass('dropdown-select--open');
            if ($(this).hasClass('dropdown-select--open')) {
                $(this).find('.dropdown-select__option').attr('tabIndex', 0);
                $(this).find('dropdown-select--selected').focus();
            } else {
                $(this).find('.dropdown-select__option').removeAttr('tabIndex');
                $(this).focus();
            }
        })
        $(document).on('click', function (e) {
            if ($(e.target).closest('.dropdown-select').length === 0) {
                $('.dropdown-select').removeClass('dropdown-select--open');
                $('.dropdown-select__option').removeAttr('tabIndex');
            }
        })


        $(document).on('click', '.dropdown-select__option', function () {
            $(this).closest('.dropdown-select__list').find('.dropdown-select--selected').removeClass('dropdown-select--selected');
            $(this).addClass('dropdown-select--selected');
            var text = $(this).text();
            $(this).closest('.dropdown-select').find('.dropdown-select__current').text(text);
            var data__value = $(this).data('value')
            $(this).closest('.dropdown-select').prev('select').val(data__value).trigger('change');
        })
    }
    dropdownSelect()


    const btnOpenModals = document.querySelectorAll('.btn__Open--Modal[data-type="modal"]'),
        btnCloseModals = document.querySelectorAll('.btnCloseModal');
    btnOpenModals.forEach(btnOpen => {
        btnOpen.addEventListener('click', showModal)
    });
    function showModal(e) {
        const targetModalID = e.target.getAttribute('data-target-modal-id');
        const modal = document.querySelector(`#${targetModalID}`);
        if (modal) {
            modal.classList.add('active-modal');
            document.body.style.overflow = "hidden";
        }
    }

    btnCloseModals.forEach(btnClose => {
        btnClose.addEventListener("click", closeModal)
    })

    function closeModal(e) {
        const targetModalID = e.target.getAttribute('data-bs-dismiss-id');
        const modal = document.querySelector(`#${targetModalID}`);
        if (modal) {
            modal.classList.remove('active-modal');
            document.body.style.overflow = "unset";
        }
    }





    /*  let allCB = $('input[name="selected[]"]');
     let mainCB = $('input[name="select__all"]')
     mainCB.on('click', function () {
         let status = $(this).is(':checked');
         allCB.prop('checked', status);
     });
     allCB.on('change', function () {
         let status = $('input[name="selected[]"]:checked').length === allCB.length;
         $('input[name="select__all"]').prop('checked', status);
     }); */

    const checkedAll = document.querySelectorAll('* [data-type="checked-all"]');
    checkedAll.forEach(checkBox => {
        checkBox.addEventListener('change', e => {
            const isChecked = e.target.checked;
            const targetName = e.target.getAttribute('data-target');
            const targets = document.querySelectorAll(`*[data-checked-value="${targetName}"]`);
            targets.forEach(target => {
                target.checked = isChecked;
            });
        });
    });
    function showEditPenCil() {
        const formGroups = document.querySelectorAll(".m-form--group");
        try {
            formGroups.forEach(function (formGroup) {
                const pencilIcon = formGroup.children[0].children[0].children[1];
                const showInputs = formGroup.children[1].children[0];
                const showInfo = formGroup.children[1].children[1];
                const closeRow = formGroup.children[0].children[1];
                if (pencilIcon) {
                    pencilIcon.addEventListener("click", function () {
                        if (pencilIcon) {
                            showInputs.classList.remove("hidden");
                            pencilIcon.classList.add("hidden");
                            closeRow.classList.remove("hidden");
                            showInfo.classList.add("hidden");
                        }
                    })
                }
                if (closeRow) {
                    const closeIcon = formGroup.children[0].children[1].children[1];
                    closeIcon.addEventListener("click", function () {
                        showInputs.classList.add("hidden");
                        pencilIcon.classList.remove("hidden");
                        closeRow.classList.add("hidden");
                        showInfo.classList.remove("hidden");
                    })
                }
            })
        } catch (error) {
            console.log(error);
        }
    }
    showEditPenCil();
    function datePickerPersion() {
        const datePickers = document.querySelectorAll(".form__control__Datepiker");
        if (datePickers) {
            datePickers.forEach(function (datepicker) {
                $(datepicker).pDatepicker({
                    observer: true,
                    initialValue: false,
                    format: 'YYYY/MM/DD',
                    altField: '.observer-example-alt'
                });
            })
        }
    }
    datePickerPersion();

    function showEditeBtn() {
        const actionsBtnGroup = document.querySelectorAll(".actions-btn-group");
        if (actionsBtnGroup) {
            actionsBtnGroup.forEach(function (actionsBtn) {
                const btnClick = actionsBtn.children[1];
                btnClick.addEventListener("click", function () {
                    const parentEl = btnClick.parentElement;
                    parentEl.classList.add("hidden");
                    parentEl.nextElementSibling.classList.remove("hidden")
                })
            })
        }
    }
    showEditeBtn();

    function closeEditBtn(){
        const editeBtnGroup = document.querySelectorAll(".edite-btn-group")
        if (editeBtnGroup) {
            editeBtnGroup.forEach(function (actionsBtn) {
                const btnClick = actionsBtn.children[1];
                btnClick.addEventListener("click", function () {
                    const parentEl = btnClick.parentElement;
                    parentEl.classList.add("hidden");
                    parentEl.previousElementSibling.classList.remove("hidden");
                })
            })
        }
    }
    closeEditBtn();

    function clearInputs() {
    }
}())

