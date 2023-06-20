const text=document.getElementById("quote");
const author=document.getElementById("author");
const tweetButton=document.getElementById("tweet");

const getNewQuote = async () =>
{
    //free api for quotes found on freecodecamp.org
    var url="https://type.fit/api/quotes";    

    //In this portion of the project I am fetching the data from the api
    const response=await fetch(url);
    console.log(typeof response);
    //converting response to json and storing it in quotes array
    const allQuotes = await response.json();

    //Generating a random number between 0 and the length of the quotes array
    const indx = Math.floor(Math.random()*allQuotes.length);

    //Storing the quote present at the randomly generated index
    const quote=allQuotes[indx].text;
    
    //Storing the author of the respective quote
    const auth=allQuotes[indx].author;

    if(auth==null)
    {
        author = "Anonymous";
    }
 
    //I am using function to dynamically display the quote and the author
    text.innerHTML=quote;
    author.innerHTML="~ "+auth;

    //Giving an option for the user to tweet the quote
    tweetButton.href="https://twitter.com/intent/tweet?text="+quote+" ~ "+auth;

}

getNewQuote();
