let allQuotes = []; 

const init = async () => {
    displayFavoriteQuote();
    await getNewQuote();
}

const displayFavoriteQuote = () => {
    var dis = document.getElementById("favoriteQuoteDisplay");
    var favoriteQuote = JSON.parse(localStorage.getItem("favoriteQuote"));
    console.log(favoriteQuote);
    if (favoriteQuote == null) {
        favoriteQuote = "You haven't set a favorite quote yet.";
    }
    dis.innerHTML = `<h3>Your latest chosen Quote was #: ${favoriteQuote}</h3>`;
}

const gatherData = async () => {
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const age = document.getElementById("age");
    const email = document.getElementById("email");
    const favoriteQuote = document.getElementById("favoriteQuote");

    if (!firstName.value || !lastName.value || !age.value || !email.value || !favoriteQuote.value) {
        alert('Please provide your inforation so we can work our magic');
        return;
    }

    console.log(`First Name: ${firstName.value}`);
    console.log(`Last Name: ${lastName.value}`);
    console.log(`Age: ${age.value}`);
    console.log(`Email: ${email.value}`);
    console.log(`Favorite Quote: ${favoriteQuote.value}`);

    confirmation.innerText = "Awesome, see you soon in your Inbox!";

    localStorage.setItem('favoriteQuote', JSON.stringify(favoriteQuote.value));

    displayFavoriteQuote();

    document.getElementById('userInfo').reset();
}

document.addEventListener('DOMContentLoaded', init);
