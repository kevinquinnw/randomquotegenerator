(function() {
    const quotes= [

        {
            quote: "If they can get you asking the wrong questions, they don't have to worry about answers.",

            author: "Thomas Pynchon"

        },
        {
            quote: "We judge others by their actions and ourselves by our intentions.",

            author: "Anonymous"

        },
        {
            quote: "Give me 6 hours to chop a tree, I will spend the first 4 sharpening my axe.",

            author: "Abraham Lincoln"

        },
        {
            quote: "Sometimes you never realize the value of a moment until it becomes a memory.",

            author: "Dr. Seuss"

        },
        {
            quote: "IF we do it now, we'll never run out of time.",

            author: "Anonymous"

        },
        {
            quote: "It is the mark of an educated mind, to entertain a thought without accepting it.",

            author: "Aristotle"

        },
        {
            quote: "No snowflake in an avalanche ever feels responsible.",

            author: "Anonymous"

        },
        {
            quote: "A ship in harbor is safe, but that's not why ships are built.",

            author: "Random Fortune Cookie"

        },
        {
            quote: "Silence is holy. It draws people together because only those who are comfortable with each other can sit without speaking.",

            author: "Anonymous"

        },
        {
            quote: "Another flaw in the human character is that everyone wants to build and nobody wants to do maintenance.",

            author: "Kurt Vonnegut"

        }
    ]; 

    const btn = document.getElementById("generate-btn")

    btn.addEventListener("click", function() {
        let random = Math.floor(Math.random()* quotes.length);
        console.log(random);

        document.getElementById("quote").textContent = quotes[random].quote;
        document.querySelector(".author").textContent = quotes[random].author;
    });
})();