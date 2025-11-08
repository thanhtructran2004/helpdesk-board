# Helpdesk Ticket Board

A simple Next.js web app that displays and manages helpdesk tickets with filtering, searching, and queue management features.

---

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/thanhtructran2004/helpdesk-board.git
   cd helpdesk-ticket-board
2. Install Dependencies
npm install
3. Run the server
npm run dev
Then open http://localhost:3000 in your browser

### ✅ Rubric Check

- **Project Setup & Structure (15 pts)**  
  - Next.js config and folders organized correctly  
  - App runs locally with `npm run dev`  
  - README file present  

- **Components + JSX + Keys (20 pts)**  
  - All UI sections separated into components (`Board`, `TicketList`, `TicketCard`, etc.)  
  - Proper JSX syntax used  
  - Stable `key` props assigned by `id`  

- **Props + Lifting State (20 pts)**  
  - `Board.jsx` holds lifted state  
  - Child components receive props and callbacks correctly  

- **State + Controlled Inputs (15 pts)**  
  - `useState` implemented for filters and search inputs  
  - Controlled components with immutable updates  

- **Effects + Cleanup (20 pts)**  
  - Data fetching handled with `useEffect` on mount  
  - Cleanup implemented for intervals or subscriptions  

- **UX + Conditional Rendering (10 pts)**  
  - Proper loading, error, and empty states  
  - Buttons disabled when actions unavailable  

- **Total: 100 pts**
