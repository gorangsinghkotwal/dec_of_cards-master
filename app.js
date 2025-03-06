// Statement of Authorship:
// StAuth10244: I John Doe, 123456 certify that this material is my original work. No other person's work has been used without due acknowledgement. I have not made my work available to anyone else.

const { useState } = React;

const suits = ['♥', '♦', '♣', '♠'];
const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

// Creates a standard 52-card deck
const createDeck = () => suits.flatMap(suit => values.map(value => ({ suit, value })));

// Returns a shuffled copy of the deck
const shuffleDeck = (deck) => [...deck].sort(() => Math.random() - 0.5);

// Helper: gets a random card from the deck and its index
const getRandomCard = (deck) => {
  const index = Math.floor(Math.random() * deck.length);
  return { card: deck[index], index };
};

const App = () => {
  // Initialize with a shuffled 52-card deck and an empty hand
  const [deck, setDeck] = useState(shuffleDeck(createDeck()));
  const [hand, setHand] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Clicking on the deck draws one random card (if available)
  const drawCard = () => {
    if (deck.length === 0) return;
    const { card, index } = getRandomCard(deck);
    const newDeck = [...deck];
    newDeck.splice(index, 1);
    setDeck(newDeck);
    setHand([...hand, card]);
  };

  // Deal cards: return current hand to deck, then deal 'count' random cards
  const dealCards = (count) => {
    const combinedDeck = shuffleDeck([...deck, ...hand]);
    if (combinedDeck.length < count) return;
    const newHand = combinedDeck.slice(0, count);
    const newDeck = combinedDeck.slice(count);
    setHand(newHand);
    setDeck(newDeck);
    setSelectedIndex(null);
  };

  const resetGame = () => {
    setDeck(shuffleDeck(createDeck()));
    setHand([]);
    setSelectedIndex(null);
  };

  const tossCard = () => {
    if (selectedIndex === null) return;
    const newHand = hand.filter((_, i) => i !== selectedIndex);
    setHand(newHand);
    setSelectedIndex(null);
  };

  const wildcard = () => {
    // Create a new card with a random suit and value (duplicates allowed)
    const randomSuit = suits[Math.floor(Math.random() * suits.length)];
    const randomValue = values[Math.floor(Math.random() * values.length)];
    const newCard = { suit: randomSuit, value: randomValue };
    setHand([...hand, newCard]);
  };

  const regroup = () => {
    setHand(shuffleDeck(hand));
    setSelectedIndex(null);
  };

  // Handle card click: select a card or swap if one is already selected.
  const handleCardClick = (index) => {
    if (selectedIndex === null) {
      setSelectedIndex(index);
    } else if (selectedIndex === index) {
      setSelectedIndex(null);
    } else {
      const newHand = [...hand];
      [newHand[selectedIndex], newHand[index]] = [newHand[index], newHand[selectedIndex]];
      setHand(newHand);
      setSelectedIndex(null);
    }
  };

  return (
    <div className="container">
      <h1>Deck of Cards</h1>
      <div className="deck" onClick={drawCard}>
        {deck.length > 0 ? <span>Deck ({deck.length})</span> : <span>No cards remaining</span>}
      </div>
      <div className="buttons">
        <button onClick={() => dealCards(5)}>Deal 5</button>
        <button onClick={() => dealCards(7)}>Deal 7</button>
        <button onClick={resetGame}>Reset</button>
        <button onClick={tossCard} disabled={selectedIndex === null}>Toss</button>
        <button onClick={wildcard}>Wildcard</button>
        <button onClick={regroup}>Regroup</button>
      </div>
      <div className="hand">
        {hand.map((card, index) => (
          <div
            key={index}
            className={`card ${index === selectedIndex ? 'selected' : ''}`}
            onClick={() => handleCardClick(index)}
          >
            {card.value} {card.suit}
          </div>
        ))}
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
