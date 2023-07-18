const text=document.getElementById("quote");
const author=document.getElementById("author");
const tweetButton=document.getElementById("tweet");
const nextButton=document.querySelector(".next");

const getNewQuote = async () => {
    if (allQuotes.length === 0) {
        const url="https://type.fit/api/quotes";
        const response = await fetch(url);
        allQuotes = await response.json();
        nextButton.addEventListener('click', getNewQuote);
    }

    let quoteNumber = parseInt(localStorage.getItem('quoteNumber')) || 0;

    const quote = allQuotes[quoteNumber].text;
    let quoteAuthor = allQuotes[quoteNumber].author;

    if (quoteAuthor == null) {
        quoteAuthor = "Anonymous";
    }

    text.innerHTML = `${quoteNumber + 1}. ${quote}`;
    author.innerHTML = "~ " + quoteAuthor;

    quoteNumber = (quoteNumber + 1) % allQuotes.length;
    localStorage.setItem('quoteNumber', quoteNumber.toString());
}
function handleSubmit(event) {
    event.preventDefault();
}
