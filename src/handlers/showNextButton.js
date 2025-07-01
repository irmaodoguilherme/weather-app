export const showNextButton = (e, buttonsArr) => {
        e.target.setAttribute('aria-hidden', true)
        e.target.disabled = true
        e.target.classList.add('hidden')
        
        const nextButtonToBeDisplayed = buttonsArr.find(button => button !== e.target)

        setTimeout(() => {
            e.target.classList.add('d-none')
            
            requestAnimationFrame(() => {
                nextButtonToBeDisplayed.classList.remove('d-none')

                requestAnimationFrame(() => {
                    nextButtonToBeDisplayed.classList.remove('hidden')
                    nextButtonToBeDisplayed.setAttribute('aria-hidden', false)
                    nextButtonToBeDisplayed.disabled = false
                })
            })
        }, 230)
    }