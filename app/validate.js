const emailValidation = (values) => {
    // Email should be required.
    // Email should be a valid email address. Use regex validation.
    // Password is required.
    // Password should be minimum 6 characters long.
    // Password confirmation should match the password.

    const emailPattern = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


    const errors = {};
    if (!values.email) {
        errors.email = 'Email is Required';
    } else if (!emailPattern.test(values.email)) {
        errors.email = 'Please enter a valid email address';
    }

    if (!values.password) {
        errors.password = 'Password is Required';
    } else if (values.password.length < 6) {
        errors.password = 'Password should be minimum 6 characters long.'
    }

    if (!values.confirmPassword) {
        errors.confirmPassword = 'Password confirmation is required';
    } else if (values.confirmPassword !== values.password) {
        errors.confirmPassword = 'Password confirmation should match the password.';
    }

    return errors
};

const dateOfBirthValidation = (values) => {

        function getAge(yyyy, mm, dd) {
            let today = new Date();
            let birthDate = new Date(yyyy, mm, dd);
            let age = today.getFullYear() - birthDate.getFullYear();
            let m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            return age;
        }

        function isValidDate(year, month, day) {
            let d = new Date(year, month, day);
            return d.getFullYear() === year && d.getMonth() === month && d.getDate() === day;

        }

        // DD should be a number and 31 ≥ DD ≥ 1.
        // MM should be a number and 12 ≥ MM ≥ 1.
        // YYYY should be a number.
        // Dates like 30/2/1991 are invalid.
        // The user must be 18 year old or more.
        // One gender option must be selected from the 3 given
        const errors = {};

        if (!values.DD) {
            errors.DD = "DD is Required";
        } else if (values.DD < 1 || values.DD > 31) {
            errors.DD = "DD should be a number and 31 ≥ DD ≥ 1";
        }

        if (!values.MM) {
            errors.MM = "MM is Required";
        } else if (values.MM < 1 || values.MM > 12) {
            errors.MM = "MM should be a number and 12 ≥ MM ≥ 1"
        }

        if (!values.YYYY) {
            errors.YYYY = "YYYY is Required";
        }
        else if (!isValidDate(values.YYYY, values.MM - 1, values.DD)) {
            errors.YYYY = "The Date is invalid";
        }
        else if (getAge(values.YYYY, values.MM - 1, values.DD) < 18) {
            errors.YYYY = "The user must be 18 year old or more";
        }

        if (!values.gender) {
            errors.gender = "One gender option must be selected from the 3 given."
        }

        return errors;
    }
;

export {dateOfBirthValidation, emailValidation};