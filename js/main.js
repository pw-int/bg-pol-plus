/* PLEASE DO NOT COPY AND PASTE THIS CODE. */(function(){var w=window,C='___grecaptcha_cfg',cfg=w[C]=w[C]||{},N='grecaptcha';var gr=w[N]=w[N]||{};gr.ready=gr.ready||function(f){(cfg['fns']=cfg['fns']||[]).push(f);};w['__recaptcha_api']='https://www.google.com/recaptcha/api2/';(cfg['render']=cfg['render']||[]).push('onload');w['__google_recaptcha_client']=true;var d=document,po=d.createElement('script');po.type='text/javascript';po.async=true;po.src='https://www.gstatic.com/recaptcha/releases/Ya-Cd6PbRI5ktAHEhm9JuKEu/recaptcha__en.js';po.crossOrigin='anonymous';po.integrity='sha384-LtGrwKHyZsog7+2ZMGnttLhLm1n43xtnbr1O6ZcIEufTPYpnNgmYhI3mfs16H35H';var e=d.querySelector('script[nonce]'),n=e&&(e['nonce']||e.getAttribute('nonce'));if(n){po.setAttribute('nonce',n);}var s=d.getElementsByTagName('script')[0];s.parentNode.insertBefore(po, s);})();


$(function() {
    initSelectPicker();
    initFormValidation();
    initRecaptcha('6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI', ".grecaptcha");
});

function initSelectPicker() {
    $('.selectpicker').selectpicker();
    const selectPickers = document.querySelectorAll('.selectpicker')
    selectPickers.forEach(function(picker) {
        picker.addEventListener('invalid', (e) => {
            console.log("e", picker.value);
            const parentControl = picker.closest('.dropdown.bootstrap-select');
            if (parentControl) {
                parentControl.classList.add('is-invalid')
                picker.addEventListener("change", (e) => {
                    parentControl.classList.remove('is-invalid')
                }, { once: true });
            }
        })
    });
}

/**
 * Validation
 */

function initFormValidation() {
    const forms = document.querySelectorAll('.needs-validation')
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => genericFormsValidation(event, form));
    })
}

function validateFormWithDismissibleAlerts(event, form) {
    event.preventDefault()
    event.stopPropagation()

    if (form.checkValidity()) {
        // TODO: send request to server

        // cleanup the data
        form.reset();
        form.classList.remove('was-validated');

        const confirmationModal = new bootstrap.Modal(document.getElementById('requestAcceptedModal'));
        if (confirmationModal) {
            confirmationModal.show();
        }
    } else {
        form.classList.add('was-validated');
    }
}

function genericFormsValidation(event, form) {
    if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
    }

    form.classList.add('was-validated')
}

/**
 * Recaptcha
 */
function initRecaptcha(sitekey, containerSelector) {
    const recaptchaContainers = document.querySelectorAll(containerSelector);
    recaptchaContainers.forEach(recaptchaContainer => {
        // If reCAPTCHA is still loading, grecaptcha will be undefined.
        recaptchaContainer.setAttribute("data-theme", "dark");
        grecaptcha.ready(function() {
            grecaptcha.render(recaptchaContainer, {
                sitekey: sitekey,
            });

        });
    })
}
//# sourceMappingURL=main.js.map
