
# Deck of Cards Web App Installation Instructions

## Prerequisites

- **Git:** Install Git from [https://git-scm.com/downloads](https://git-scm.com/downloads) if you don't have it.
- **Node.js (Optional):** While the app is static and runs in the browser, having Node.js installed is useful for running a local development server. Download Node.js from [https://nodejs.org/](https://nodejs.org/).

## Steps to Install and Run

1. **Clone the Repository**

   Open your terminal or command prompt and run:
   ```sh
   git clone https://github.com/elonmasai7/dec_of_cards.git
   ```

2. **Navigate to the Project Directory**
   ```sh
   cd dec_of_cards
   ```

3. **(Optional) Install a Local Static Server**

   The project uses CDN links for React, ReactDOM, and Babel, so there are no local dependencies. However, to serve the app via a local server, you can install a simple static server such as `serve`:
   ```sh
   npm install -g serve
   ```

4. **Run the Application**

   You have two options:

   - **Option 1: Open Directly in the Browser**

     Simply open the `index.html` file in your browser by double-clicking it or right-clicking and selecting "Open with".

   - **Option 2: Serve with a Local Server**

     Run the following command in the project directory:
     ```sh
     serve .
     ```
     This will start a local server (typically at `http://localhost:5000` or a similar URL). Open that URL in your browser to view the application.

## Application Usage

- **Deck Rectangle:** When the app loads, you’ll see a rectangle that represents an overturned deck of cards. Clicking this rectangle draws a card (if available).
- **Deal 5 / Deal 7 Buttons:** Clicking these buttons resets any current hand and deals 5 or 7 random cards, respectively.
- **Reset Button:** Resets the deck and clears the hand.
- **Toss Button:** Removes the currently selected card from the hand (click on a card to select it first).
- **Wildcard Button:** Adds a new randomly generated card to the hand (duplicates allowed).
- **Regroup Button:** Randomly shuffles the current hand.
