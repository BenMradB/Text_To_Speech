const button = document.getElementById('btn');
const text = document.getElementById('text-box');

button.addEventListener('click', () => {
    const speech = new SpeechSynthesisUtterance(text.value);
    speechSynthesis.speak(speech)
});