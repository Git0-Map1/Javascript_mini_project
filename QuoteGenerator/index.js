const quotes = ['"Any fool can write code that a computer can understand. Good programmers write code that humans can understand." – Martin Fowler',
    '"Programs must be written for people to read, and only incidentally for machines to execute." – Harold Abelson', 
    '"You might not think that programmers are artists, but programming is an extremely creative profession." – John Romero',
    '“First, solve the problem. Then, write the code.” — John Johnson',
    '“Simplicity is the soul of efficiency.” — Austin Freeman',
    '“Code is like humor. When you have to explain it, it’s bad.” — Cory House'
    ];

const usedQuotes = new Set();
const quoteElement = document.getElementById("quote");

function generateQuotes(){
    if(usedQuotes.size >= quotes.length){
        usedQuotes.clear();
    }
    while(true){
        const randomIndex = Math.floor(Math.random()*quotes.length)

        if(usedQuotes.has(randomIndex)) continue;
        
        quoteElement.innerHTML = quotes[randomIndex]
        usedQuotes.add(randomIndex)
        break
    }
}


//read the quotes 
//if the quotes arent in the list make it list to make it iterable
//randomly generate the quotes with index
//on button click run the function 
//while loop math.random value is placed in the index