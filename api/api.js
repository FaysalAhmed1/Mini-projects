const loadQuotes = () => {

    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuote(data));

}

const displayQuote = quote => {

    console.log(quote.quote);
}

console.log("zebra");