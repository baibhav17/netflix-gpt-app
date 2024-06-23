export const validateEmail = (email) => {
    const isValidEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
    if (!isValidEmail) {
        return 'Please enter valid email'
    } else {
        return null
    }
}

export const validatePassword = (password) => {
    const isValidPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    if (!isValidPassword) {
        return 'Please enter valid password. Password must contain one capital letter one small letter, one special symbol and must be at least 8 characters long'
    } else {
        return null
    }
}