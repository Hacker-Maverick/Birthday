const button = document.getElementById('surprise-button');
const birthdayMessage = document.getElementById('birthday-message');
let clickCount = 0;
const phrases = [
    "Click Me!", "Once More!", "Try Again!", "Keep Going!", "Almost There!", 
    "Not Yet!", "Click Again!", "Don't Stop!", "Almost Done!", "There you go!"
];

button.addEventListener('click', () => {
    clickCount++;
    if (clickCount <= 10) {
        button.textContent = phrases[clickCount % phrases.length];
        moveButton();
    }
    if (clickCount == 10) {
        showBirthdayMessage();
        document.getElementById('surprise-button').style.display='none';
        document.getElementById('text').style.display='none';
        document.body.style.backgroundColor='#e0e0e0';
    }
});

function moveButton() {
    const buttonWidth = button.clientWidth;
    const buttonHeight = button.clientHeight;
    const maxX = window.innerWidth - buttonWidth;
    const maxY = window.innerHeight - buttonHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    button.style.position = 'absolute';
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}

function showBirthdayMessage() {
    birthdayMessage.classList.remove('hidden');
    birthdayMessage.classList.add('visible');
    document.getElementById('additional-content').classList.remove('hidden');
    document.getElementById('additional-content').classList.add('visible');
}
