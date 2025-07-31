// Motivational and spiritual quotes in Roman Hindi
const quotes = {
    happy: [
        "Khushi aapka haq hai, ise hamesha apne paas rakhiye.",
        "Aapki muskurahat duniya ko roshan karti hai.",
        "Bhagwan ne aapko khushi ke liye banaya hai.",
        "Jab aap khush hote hain, to Mata Laxmi aapke ghar mein nivAS karti hain.",
        "Hanuman ji ki tarah, aapki shakti aur khushi ka koi ant nahi.",
        "Krishna bhagwan ki tarah, aapka jeevaN raas se bhara ho.",
        "Aapki positive energy sabko inspire karti hai.",
        "Khush rehna aapka sabse bada dharam hai.",
        "Sita mata ki tarah, aapka dil hamesha pavitra aur khush rahe.",
        "Radha rani ki tarah, aapka prem aur khushi sada banI rahe.",
        "Hanuman ji ki kripa se aapki khushi aur bhi badh jayegi.",
        "Bajrang Bali ki tarah, aap bhi hamesha josh aur khushi mein rahiye.",
        "Hanuman ji ka ashirwad aapko hamesha khush rakhega.",
        "Pawanputra Hanuman ki tarah, aapka hausla hamesha uncha rahe."
    ],
    neutral: [
        "Koi baat nahi, kabhi kabhi aisa lagta hai. Yeh bhi theek hai.",
        "Ganga ji ki tarah, aapke dil ki feelings bhi flow karte rahte hain.",
        "Krishna ji kehte hain - har din ek nayi shururat hai.",
        "Saraswati mata ki kripa se aapko clarity mil jayegi.",
        "Hanuman ji ki tarah, dheeraj rakhiye, sab samay ke saath theek ho jata hai.",
        "Surya bhagwan ki tarah, aap bhi har din naye josh ke saath uthiye.",
        "Mata Parvati ki tarah, aap bhi strong aur patient hain.",
        "Vishnu bhagwan ki tarah, aap bhi peace mein rahiye.",
        "Shiva ji ki tarah, jo bhi ho raha hai, usse accept kariye.",
        "Lakshmi mata ka blessing hamesha aapke saath hai.",
        "Hanuman ji kehte hain - sabr ka fal meetha hota hai.",
        "Bajrang Bali ki guidance mein, har confusion clear ho jayegi.",
        "Hanuman ji ki wisdom se aap sahi raah dhund lengi.",
        "Pawanputra ki kripa se aapko inner peace milega."
    ],
    sad: [
        "Har mushkil ka hal hota hai, bas thoda sabr rakhiye.",
        "Shri Ram ne bhi vanvas kiye the, lekin ant mein vijay unki hui.",
        "Mata Durga ki tarah, aap har mushkil ka samna kar sakti hain.",
        "Gita mein Krishna ji kehte hain - jo hota hai achhe ke liye hota hai.",
        "Hanuman ji ki shakti aapke saath hai, dar mat kar.",
        "Har raat ke baad ek nayi subah aati hai.",
        "Bhagwan aapko sirf utna dukh dete hain jitna aap jhel sakti hain.",
        "Lakshmi mata ka aashirwad aap par hamesha rahega.",
        "Mushkil waqt sikhata hai, kamzor nahi banata.",
        "Saraswati mata ki kripa se aapko samajh aayegi ki sab theek ho jayega.",
        "Ganga mata ki tarah, aapka dukh bhi beh jayega.",
        "Shiva ji ki tarah, aap har takleef ko destroy kar dengi.",
        "Hanuman ji aapke dukh ko door kar denge, bas unpar bharosa rakhiye.",
        "Bajrang Bali ki mahima se aapki har pareshani dur ho jayegi.",
        "Hanuman ji ka naam lete hi sab theek ho jata hai, tension mat lijiye.",
        "Pawanputra ki kripa se aapko naya raasta aur ummeed milegi."
    ]
};

// DOM elements
const questionScreen = document.getElementById('question-screen');
const responseScreen = document.getElementById('response-screen');
const happyBtn = document.getElementById('happy-btn');
const neutralBtn = document.getElementById('neutral-btn');
const sadBtn = document.getElementById('sad-btn');
const comfortMessage = document.getElementById('comfort-message');
const quoteText = document.getElementById('quote-text');
const quoteContainer = document.getElementById('quote-container');
const newQuoteBtn = document.getElementById('new-quote-btn');
const restartBtn = document.getElementById('restart-btn');

// Current mood state
let currentMood = '';

// Comfort messages based on mood
const comfortMessages = {
    happy: "Bahut achha! Aapki khushi dekh kar mera dil bhi khush ho gaya. 💖",
    neutral: "Samjh gaya, kabhi kabhi aisa lagta hai. Bilkul normal hai. 😌",
    sad: "Koi baat nahi beta, sab theek ho jayega. Main aapke saath hun. 🤗"
};

// Initialize the app
function init() {
    happyBtn.addEventListener('click', () => handleMoodSelection('happy'));
    neutralBtn.addEventListener('click', () => handleMoodSelection('neutral'));
    sadBtn.addEventListener('click', () => handleMoodSelection('sad'));
    newQuoteBtn.addEventListener('click', showNewQuote);
    restartBtn.addEventListener('click', restart);
}

// Handle mood selection
function handleMoodSelection(mood) {
    currentMood = mood;
    
    // Add click animation
    const btn = mood === 'happy' ? happyBtn : mood === 'neutral' ? neutralBtn : sadBtn;
    btn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        btn.style.transform = '';
    }, 150);
    
    // Transition to response screen
    setTimeout(() => {
        showResponse(mood);
    }, 300);
}

// Show response screen with message and quote
function showResponse(mood) {
    // Hide question screen
    questionScreen.classList.remove('active');
    
    // Set comfort message
    comfortMessage.textContent = comfortMessages[mood];
    
    // Update quote container background based on mood
    quoteContainer.className = `quote-container ${mood}`;
    
    // Show random quote
    displayRandomQuote(mood);
    
    // Show response screen
    setTimeout(() => {
        responseScreen.classList.add('active');
    }, 250);
}

// Display a random quote based on mood
function displayRandomQuote(mood) {
    const moodQuotes = quotes[mood];
    const randomIndex = Math.floor(Math.random() * moodQuotes.length);
    const quote = moodQuotes[randomIndex];
    
    quoteText.textContent = quote;
}

// Show new quote with animation
function showNewQuote() {
    // Add fade animation
    quoteText.classList.add('quote-fade');
    
    // Change quote after animation starts
    setTimeout(() => {
        displayRandomQuote(currentMood);
    }, 250);
    
    // Remove animation class
    setTimeout(() => {
        quoteText.classList.remove('quote-fade');
    }, 500);
}

// Restart the app
function restart() {
    // Hide response screen
    responseScreen.classList.remove('active');
    
    // Reset state
    currentMood = '';
    
    // Show question screen
    setTimeout(() => {
        questionScreen.classList.add('active');
    }, 300);
}

// Start the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

// Add touch feedback for mobile devices
function addTouchFeedback() {
    const buttons = document.querySelectorAll('button');
    
    buttons.forEach(button => {
        button.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.95)';
        });
        
        button.addEventListener('touchend', function() {
            setTimeout(() => {
                this.style.transform = '';
            }, 100);
        });
    });
}

// Initialize touch feedback
document.addEventListener('DOMContentLoaded', addTouchFeedback);
