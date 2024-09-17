        const openFormLink = document.getElementById('openForm');
        const formOverlay = document.getElementById('formOverlay');
        const closeFormBtn = document.getElementById('closeForm');

        openFormLink.addEventListener('click', function(e) {
            e.preventDefault();
            formOverlay.style.display = 'block';
        });

        closeFormBtn.addEventListener('click', function() {
            formOverlay.style.display = 'none';
        });

        formOverlay.addEventListener('click', function(e) {
            if (e.target === formOverlay) {
                formOverlay.style.display = 'none';
            }
        });