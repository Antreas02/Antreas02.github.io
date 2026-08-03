document.getElementById('year').textContent = new Date().getFullYear();

var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!prefersReduced && 'IntersectionObserver' in window) {
    var revealEls = document.querySelectorAll('.reveal');
    var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('in');
                io.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
} else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
}
