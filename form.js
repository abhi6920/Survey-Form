// Code for the browser environment
if (typeof window !== 'undefined') {
    const form = document.getElementById('survey-form');
    const popup = document.getElementById('popup');
    const popupContent = document.getElementById('popup-content');
    const closePopup = document.getElementById('close-popup');
    const resetButton = document.getElementById('reset-button');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form values
        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const dob = document.getElementById('dob').value;
        const country = document.getElementById('country').value;
        const gender = [...document.getElementsByName('gender')]
            .filter(input => input.checked)
            .map(input => input.value);
        const profession = document.getElementById('profession').value;
        const email = document.getElementById('email').value;
        const mobile = document.getElementById('mobile').value;

        // You can add more specific validation here

        // Display the form values in the popup
        popupContent.innerHTML = `
            <p><strong>First Name:</strong> ${firstName}</p>
            <p><strong>Last Name:</strong> ${lastName}</p>
            <p><strong>Date of Birth:</strong> ${dob}</p>
            <p><strong>Country:</strong> ${country}</p>
            <p><strong>Gender:</strong> ${gender.join(', ')}</p>
            <p><strong>Profession:</strong> ${profession}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mobile Number:</strong> ${mobile}</p>
        `;

        // Display the popup
        popup.style.display = 'block';
    });

    closePopup.addEventListener('click', function () {
        popup.style.display = 'none';
        form.reset();
    });

    resetButton.addEventListener('click', function () {
        form.reset();
    });
} else {
    console.error('This code is only intended for the browser environment.');
}
