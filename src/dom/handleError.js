export const handleError = message => {
    const errorAlert = document.querySelector('[data-alert=error-message]')
    const errorMessage = errorAlert.children[0]
    
    errorMessage.textContent = message
    errorAlert.classList.add('fall')
}