<script>
    // Small helpers: set year and close mobile nav on nav link click
    document.getElementById('year').textContent = new Date().getFullYear();

    document.querySelectorAll('.navbar-collapse .nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
        const bsCollapse = bootstrap.Collapse.getInstance(document.querySelector('.navbar-collapse'));
        if (bsCollapse && window.getComputedStyle(document.querySelector('.navbar-toggler')).display !== 'none') {
            bsCollapse.hide();
        }
    });
});
</script>
