//your JS code here. If required.
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btns button');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const buttonText = this.textContent;
        if (buttonText === 'C') {
            display.value = '';
        } else if (buttonText === '=') {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'Error';
            }
        } else {
            display.value += buttonText;
        }
    });
});
