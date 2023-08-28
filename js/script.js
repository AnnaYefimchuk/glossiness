//Smooth scrolling animation

const allLinks = document.querySelectorAll('a:link');
allLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const href = link.getAttribute('href');

        //scroll back to top

        if (href === '#') window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });

        //Scroll to other links
        if (href !== '#' && href.startsWith('#')) {
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({
                block: 'center',
                behavior: 'smooth',
            });
        }


        //Close mobile nav 
        if (link.classList.contains('main-nav-link'))
            headerEl.classList.toggle('nav-open');
    });

});



const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

btnNavEl.addEventListener('click', function () {
    headerEl.classList.toggle('nav-open');
});




//Sticky nav 

const sectionHeroEl = document.querySelector('.section-hero');

const obs = new IntersectionObserver(function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === false) {
        document.body.classList.add('sticky')
    }

    if (ent.isIntersecting) {
        document.body.classList.remove('sticky')
    }
},
    {
        //In the viewport
        root: null,
        threshold: 0,
        rootMargin: "-80px",
    });
obs.observe(sectionHeroEl);

