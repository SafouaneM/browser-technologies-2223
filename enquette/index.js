const form = document.querySelector('form');
const fieldsets = form.querySelectorAll('fieldset');
let currentFieldsetIndex = 0;

function showFieldset(index) {
    fieldsets.forEach((fieldset, i) => {
        if (i === index) {
            fieldset.style.display = 'block';
        } else {
            fieldset.style.display = 'none';
        }
    });
}

showFieldset(currentFieldsetIndex);

document.querySelector('#prev-btn').addEventListener('click', () => {
    currentFieldsetIndex--;
    if (currentFieldsetIndex < 0) {
        currentFieldsetIndex = 0;
    }
    showFieldset(currentFieldsetIndex);
});

document.querySelector('#next-btn').addEventListener('click', () => {
    currentFieldsetIndex++;
    if (currentFieldsetIndex > fieldsets.length - 1) {
        currentFieldsetIndex = fieldsets.length - 1;
    }
    showFieldset(currentFieldsetIndex);
});

