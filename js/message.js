

export function showError(message) {
    const errorElement = document.createElement('div');
    errorElement.classList.add('error');
    errorElement.textContent = message;
    document.body.appendChild(errorElement);

    
    setTimeout(() => {
        errorElement.remove();
    }, 2000);
}


export function showSuccess(message) {
    const successElement = document.createElement('div');
    successElement.classList.add('success');
    successElement.textContent = message;
    document.body.appendChild(successElement);

    
    setTimeout(() => {
        successElement.remove();
    }, 2000);
}