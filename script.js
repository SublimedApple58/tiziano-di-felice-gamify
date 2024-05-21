const navbar = document.querySelector('#navbar');
let scrollato = 0

window.addEventListener('scroll', () => {
    if(window.scrollY >= 300){
        // tutte le modifiche che vogliamo applicare quando scrolliamo verso il basso
        navbar.classList.remove('bg-body-dark');
        navbar.setAttribute('data-bs-theme', 'light');
    } else {
        // tutte le modifiche che vogliamo applciare quando torniamo su
        navbar.classList.add('bg-body-dark');
        navbar.setAttribute('data-bs-theme', 'dark');
    }
})

navbar.addEventListener('click', () => {
    if(scrollato >= 300){
        window.scrollTo({ top: scrollato - 50, behavior: 'smooth' });
        scrollato -= 50;
    } else {
        window.scrollTo({ top: scrollato + 50, behavior: 'smooth' });
        scrollato += 50;
    }
    
})