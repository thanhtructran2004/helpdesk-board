Helpdesk Ticket Board
A simple Next.js web app that displays and manages helpdesk tickets with filtering, searching, and queue management features.

Setup Instructions
1. Clone the Repository
git clone https://github.com/yourusername/helpdesk-ticket-board.git
cd helpdesk-ticket-board
2. Install Dependencies
npm install
3. Run the Development Server
npm run dev
Then open http://localhost:3000 in your browser.
🗂️ Project Structure
src/
  app/
    page.js                → Renders title + Board component
    api/tickets/route.js   → Returns 15 mock tickets (API route)
    lib/severity.js        → Helper for cycling ticket priority/status
  components/
    Board.jsx              → Main client component (state, effects, filters)
    TicketList.jsx         → Maps tickets into TicketCards
    TicketCard.jsx         → Displays ticket details + Add to Queue button
    StatusFilter.jsx       → Filter by status
    PriorityFilter.jsx     → Filter by priority
    SearchBox.jsx          → Keyword search bar
    StatusMessage.jsx      → Shows loading/error/empty messages
    MyQueueSummary.jsx     → Queue list with remove/clear options
