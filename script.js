
const scenarios = [['🏠 A game asks for your home address.', 'keep'],
    ['🍦 You tell someone your favourite ice cream flavour.', 'share'],
    ['🔑 Someone asks for your password.', 'keep'],
    ['🐶 You tell your class your favourite animal.', 'share'],
    ['📸 A website asks you to upload a photo of yourself.', 'keep'],
    ['📱 Someone online asks for your phone number.', 'keep']];

let i = 0;


function
    answer(a) {
        document.getElementById('feedback').textContent = a === scenarios[i][1] ? '⭐ Great choice!' :
            '💡 Try again. Think about whether this information could identify or contact you.'
}

function
    nextScenario() {
        i = (i + 1) % scenarios.length; document.getElementById('scenario').textContent = scenarios[i][0];
    document.getElementById('feedback').textContent = ''
}

function
    scoreQuiz() {
        let s = 0; for (let n = 1; n <= 5; n++){
            let x = document.querySelector('input[name=q' + n + ']:checked');
            if (x) s += Number(x.value)
    } document.getElementById('score').textContent = 'You got ' + s + ' out of 5! ' + (s === 5 ?
        '🌟 Excellent safety thinking!' : 'Review the lesson and try again.')
}
