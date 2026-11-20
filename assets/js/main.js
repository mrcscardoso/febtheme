/* Mobile menu burger toggle */
(function () {
    const navigation = document.querySelector('.gh-navigation');
    const burger = navigation.querySelector('.gh-burger');
    if (!burger) return;

    const mobile = window.matchMedia('(max-width: 767px)');
    const root = document.documentElement;
    let scrollPosition = 0;

    function closeMenu() {
        if (!navigation.classList.contains('is-open')) return;

        navigation.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
        root.classList.remove('gh-navigation-open');
        root.style.removeProperty('--gh-navigation-scroll-top');
        window.scrollTo({top: scrollPosition, behavior: 'instant'});
    }

    burger.addEventListener('click', function () {
        if (!navigation.classList.contains('is-open')) {
            if (!mobile.matches) return;

            scrollPosition = window.scrollY;
            root.style.setProperty('--gh-navigation-scroll-top', `${-scrollPosition}px`);
            root.classList.add('gh-navigation-open');
            navigation.classList.add('is-open');
            burger.setAttribute('aria-expanded', 'true');
        } else {
            closeMenu();
        }
    });

    /* Close the menu before Portal opens its modal (Entrar / Inscrever-se) */
    navigation.querySelectorAll('.feb-mobile-menu [data-portal]').forEach(function (link) {
        link.addEventListener('click', closeMenu);
    });

    mobile.addEventListener('change', function () {
        if (!mobile.matches) closeMenu();
    });
})();

/* Add lightbox to gallery and feature images */
(function () {
    lightbox(
        '.kg-image-card > .kg-image[width][height], .kg-gallery-image > img, .gh-feature-image'
    );
})();

/* Responsive video in post content */
(function () {
    const sources = [
        '.gh-content iframe[src*="youtube.com"]',
        '.gh-content iframe[src*="youtube-nocookie.com"]',
        '.gh-content iframe[src*="player.vimeo.com"]',
        '.gh-content iframe[src*="kickstarter.com"][src*="video.html"]',
        '.gh-content object',
        '.gh-content embed',
    ];
    reframe(document.querySelectorAll(sources.join(',')));
})();

/* Turn the main nav into dropdown menu when there are more than 5 menu items */
(function () {
    dropdown();
})();

/* Infinite scroll pagination */
(function () {
    if (!document.body.classList.contains('home-template') && !document.body.classList.contains('post-template')) {
        pagination();
    }
})();

/* Newsletter: replace the browser's native validation bubble with the theme's inline hint.
   Submission itself is untouched: an invalid field still blocks submit, and Portal handles valid ones. */
(function () {
    document.querySelectorAll('.feb-form [data-members-email]').forEach(function (input) {
        const form = input.closest('.feb-form');
        const hint = form.querySelector('.feb-form-hint');
        if (!hint) return;

        input.addEventListener('invalid', function (event) {
            event.preventDefault();
            hint.textContent = input.validity.valueMissing ? hint.dataset.missing : hint.dataset.mismatch;
            form.classList.add('is-invalid');
            input.setAttribute('aria-invalid', 'true');
            input.focus();
        });

        input.addEventListener('input', function () {
            if (!form.classList.contains('is-invalid')) return;
            form.classList.remove('is-invalid');
            input.removeAttribute('aria-invalid');
            hint.textContent = '';
        });
    });
})();

/* Responsive HTML table */
(function () {
    const tables = document.querySelectorAll('.gh-content > table:not(.gist table)');
    
    tables.forEach(function (table) {
        const wrapper = document.createElement('div');
        wrapper.className = 'gh-table';
        table.parentNode.insertBefore(wrapper, table);
        wrapper.appendChild(table);
    });
})();
