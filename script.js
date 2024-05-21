const navbar = document.querySelector('#navbar');
let clients = document.querySelector('#clients');
let sedi = document.querySelector('#sedi');
let collaboratori = document.querySelector('#collaboratori');

window.addEventListener('scroll', () => {
    if(window.scrollY >= 20){
        // tutte le modifiche che vogliamo applicare quando scrolliamo verso il basso
        navbar.classList.remove('bg-body-dark');
        navbar.classList.add('bg-body-light');
        navbar.setAttribute('data-bs-theme', 'light');
    } else {
        // tutte le modifiche che vogliamo applciare quando torniamo su
        navbar.classList.add('bg-body-dark');
        navbar.classList.remove('bg-body-light');
        navbar.setAttribute('data-bs-theme', 'dark');
    }
})


// chiamta asincrona = chiamta che non viene eseguita in contemporanea al resto del codice
// built-in-function 
// setInterval() = crea un loop infinito ripetendo un blocco di codice all'infinito ogni tot intervallo di tempo
// clearInterval() = altra chiamata asincrona che inerrompe un altro loop infinito lanciato da setInterval

function numeroIncrementato(num, element, intervallo){
    let counter = 0;
    let interval = setInterval(() => {
        if(counter < num){
            counter++;
            element.innerHTML = counter;
        } else {
            clearInterval(interval);
        }
    }, intervallo)
}

numeroIncrementato(500, clients, 10);
numeroIncrementato(50, sedi, 50);
numeroIncrementato(400, collaboratori, 10);