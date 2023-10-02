// side-bar
export const asideBar = () => {
    // user details object
    const userData = {
        firstName: "Daniel",
        lastName: "Haribo",
        viewsCount: 100,
        jaimesCount: 200,
        abonnesCount: 300,
    }
    // set the object to the localStorage as string
    localStorage.setItem('userDetails', JSON.stringify(userData));
    // get the object
    const storedData = localStorage.getItem("userDetails");

    // convert to json
    const userDetails = JSON.parse(storedData);
    // add the places where you want user details to be filled
    updateUser(userDetails);

    // save button
    const saveButton = document.querySelector('#popupSave');
    saveButton.addEventListener('click', () => {
        userDetails.firstName = firstName.value
        userDetails.lastName = lastName.value
        localStorage.setItem('userDetails', JSON.stringify(userDetails));
        updateUser(userDetails);
    })


    // Get the popup and link elements
    const popup = document.querySelector('.side-bar-popup')
    const popupLink = document.querySelector('#popupLink')
    const popupClose = document.querySelector('#popupClose')

    // Add a click event listener to the link
    popupLink.addEventListener('click', () => popup.style.display = 'block')
    popupClose.addEventListener('click', () => popup.style.display = 'none')

}

const updateUser = (userDetails) => {
    // places where to update userName.
    document.querySelector('#userName').textContent = userDetails.firstName + " " + userDetails.lastName;
    document.querySelector('#viewsCount').textContent = userDetails.viewsCount;
    document.querySelector('#jaimesCount').textContent = userDetails.jaimesCount;
    document.querySelector('#abonnesCount').textContent = userDetails.abonnesCount;
    document.querySelector('#userName1').textContent = `Bonjour ${userDetails.firstName + " " + userDetails.lastName} !`;
    document.querySelector('#userName2').textContent = `Playlist pour ${userDetails.firstName} !`;

    const firstName = document.querySelector('#firstName')
    firstName.value = userDetails.firstName;
    const lastName = document.querySelector('#lastName')
    lastName.value = userDetails.lastName;
}
