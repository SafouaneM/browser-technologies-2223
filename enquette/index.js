const form = document.querySelector('form');
const fieldsets = form.querySelectorAll('fieldset');
let currentFieldsetIndex = 0;


const message = document.createElement('div');
message.textContent = 'Your previous responses have been loaded.';
message.classList.add('message');

// append message to form element
form.appendChild(message);

// remove message after 3 seconds
setTimeout(() => {
    message.remove();
}, 3000);

function showFieldset(index) {
    fieldsets.forEach((fieldset, i) => {
        if (i === index) {
            fieldset.style.display = 'block';
        } else {
            fieldset.style.display = 'none';
        }
    });
    updateProgressBar();
    updateButtonState();

    const nextButton = document.querySelector('#next-btn');
    const currentFieldset = fieldsets[currentFieldsetIndex];
    const requiredInputs = currentFieldset.querySelectorAll('[required]');
    const filledInputs = currentFieldset.querySelectorAll('[required]:valid');
    if (nextButton.disabled && filledInputs.length === requiredInputs.length) {
        nextButton.disabled = false;
    }
}

function updateButtonState() {
    const nextButton = document.querySelector('#next-btn');
    const currentFieldset = fieldsets[currentFieldsetIndex];
    const requiredInputs = currentFieldset.querySelectorAll('[required]');
    const filledInputs = currentFieldset.querySelectorAll('[required]:valid');
    if (filledInputs.length === requiredInputs.length) {
        nextButton.disabled = false;
    } else {
        nextButton.disabled = true;
    }
}

function updateProgressBar() {
    const progressBar = document.querySelector('.survey-progress-bar');
    const progressText = document.querySelector('.survey-progress-text');
    const currentProgress = currentFieldsetIndex + 1;
    const totalProgress = fieldsets.length;
    const progressPercentage = (currentProgress / totalProgress) * 100;
    progressBar.style.width = `${progressPercentage}%`;
    progressText.textContent = `Vraag ${currentProgress} van ${totalProgress}`;
}

function saveFormData() {
    const currentFieldset = fieldsets[currentFieldsetIndex];
    const inputs = currentFieldset.querySelectorAll('input');
    inputs.forEach(input => {
        localStorage.setItem(input.name, input.value);
    });
}

function restoreFormData() {
    const inputs = form.querySelectorAll('input');
    inputs.forEach(input => {
        const value = localStorage.getItem(input.name);
        if (value) {
            input.value = value;
        }
    });
}

showFieldset(currentFieldsetIndex);
restoreFormData();

document.querySelector('#prev-btn').addEventListener('click', () => {
    saveFormData();
    currentFieldsetIndex--;
    if (currentFieldsetIndex < 0) {
        currentFieldsetIndex = 0;
    }
    showFieldset(currentFieldsetIndex);
    restoreFormData();
});

document.querySelector('#next-btn').addEventListener('click', () => {
    saveFormData();
    currentFieldsetIndex++;
    if (currentFieldsetIndex > fieldsets.length - 1) {
        currentFieldsetIndex = fieldsets.length - 1;
    }
    showFieldset(currentFieldsetIndex);
    restoreFormData();
});

document.addEventListener('input', () => {
    updateButtonState();
});
