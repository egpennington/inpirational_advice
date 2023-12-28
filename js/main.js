let quotesInDB = [
   "The greatest glory in living lies not in never falling but in rising every time we fall. -Nelson Mandela",
   "The way to get started is to quit talking and begin doing. -Walt Disney",
   "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living wit		h the results of other people's thinking. -Steve Jobs",
   "If life were predictable it would cease to be life, and be without flavor. -Eleanor Roosevelt",
   "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll n		ever have enough. -Oprah Winfrey"
]

const quotesEl = document.getElementById("quotes-el")
const publishBtn = document.getElementById("btn-el")
const fromSomeoneEl = document.getElementById("from-someone-el")
const toSomeoneEl = document.getElementById("to-someone-el")

const fromEl = document.getElementById("from-el")
const quoteAreaEl = document.getElementById("quote-area-el")
const toEl = document.getElementById("to-el")

publishBtn.addEventListener("click", function() {
    
		let quoteWriten = quotesEl.value
    let fromPerson = fromSomeoneEl.value
    let toPerson = toSomeoneEl.value    
    let newEl = document.createElement("li")
    let breakEl = document.createElement("br")
    newEl.innerHTML = `
              <strong>From: ${fromPerson}</strong> <br>
              ${quoteWriten} <br>
              <strong>To: ${toPerson}</strong`
              
    quoteAreaEl.prepend(newEl)              
    clearInput()		
})

function clearInput() {
    quotesEl.value = ""
    fromSomeoneEl.value = ""
    toSomeoneEl.value = ""
}

function clearQuotesListEl() {
    quotesListEl.innerHTML = ""
}