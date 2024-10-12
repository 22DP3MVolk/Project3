// Modālais logs funkcionalitāte
const modal = document.getElementById('modal');
const learnMoreButtons = document.querySelectorAll('.learn-more');
const closeModal = document.querySelector('.close');

learnMoreButtons.forEach(button => {
    button.addEventListener('click', () => {
        modal.style.display = 'flex';
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
});

const toggleSwitch = document.getElementById('theme-toggle');
const body = document.body;

// Ielādē esošo režīmu no localStorage
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    toggleSwitch.checked = true;
}

// Pārslēdz režīmu
toggleSwitch.addEventListener('change', () => {
    if (toggleSwitch.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    }
});
