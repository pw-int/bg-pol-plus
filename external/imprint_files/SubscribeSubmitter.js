function SubscribeSubmitter() {
    this.alreadySubmitted = false;

    this.submit = function (url, showAlert = true) {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }

        if (warningMessage) {
            if (!showAlert) {
                return;
            }

            $('.btn-success').removeAttr('data-bs-toggle').removeAttr('data-bs-target');

            $.fancyAlert({
                title: '',
                message: warningMessage,
                closeText: ''
            });

            return;
        }

        if (this.alreadySubmitted) {
            return;
        }

        this.alreadySubmitted = true;
        window.location.href = url.trim();
    };
}

window.subscribeSubmitter = new SubscribeSubmitter();