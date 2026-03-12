# Setup and Run Instructions

### 1. Clone the repository

```
git clone https://github.com/Wesamdah/Crypto-Market-Dashboard.git
```

### 2. Navigate to the project directory

```
cd crypto-dashboard
```

### 3. Install dependencies

```
npm install
```

### 4. Run the development server

```
npm run dev
```

Open your browser and navigate to:

```
http://localhost:3000
```

---

# Environment / Setup Notes

This project does **not require any environment variables**.

Market data is retrieved from the public **Binance API**.

REST API used for initial market data:

```
https://api.binance.com/api/v3/ticker/24hr
```

WebSocket stream used for real-time updates:

```
wss://stream.binance.com:9443/ws/<symbol>@ticker
```

No authentication or API keys are required.

---

# Key Assumptions

Several assumptions were made during development:

* Only a small set of markets (10 trading pairs) are displayed to keep the UI simple and focused.
* Real-time WebSocket updates are applied only on the **market details page**.
* Favorites and recently viewed markets are stored locally using **localStorage**.
* Binance public API is assumed to be stable and available.
* WebSocket messages are expected to arrive frequently, so UI updates are optimized to avoid unnecessary re-renders.

---

# Technical Trade-offs

Some implementation decisions were made to balance simplicity and functionality within the assignment time constraints.


### REST + WebSocket Combination

REST API is used for the **initial markets list**, while WebSocket is used only for **real-time updates on the details page**.
This prevents opening unnecessary WebSocket connections for multiple markets.

### LocalStorage Persistence

Favorites and recently viewed markets are stored using **localStorage** instead of a backend service.
This keeps the application self-contained and simple.

### UI Scope

Advanced features such as trading charts or analytics were intentionally excluded to keep the focus on the core requirements of the assignment.

---

# Notes on Architecture

### Application Structure

The application follows a **component-based architecture** using the Next.js App Router.

---

UI components are separated from logic using **custom React hooks**.

---

### Real-Time Data Handling

Real-time updates are handled using a custom hook:

```
useWebSocket()
```

This hook:

* opens a WebSocket connection to the Binance ticker stream
* parses incoming messages
* updates React state with the latest price data
* provides connection status to the UI

This keeps WebSocket logic isolated from UI components.

---

### State Management

State management relies primarily on:

* React local state
* custom hooks

Examples:

* `useWebSocket` for live market data
* `useFavorites` for managing favorite markets
* `useRecentMarkets` for recently viewed markets

User preferences are stored using **localStorage**.

---

### Failure Handling and Reconnection

The WebSocket hook includes **automatic reconnection logic**.

If the connection closes:

1. The status changes to `disconnected`
2. A reconnection attempt is scheduled
3. The hook reconnects after a short delay

Connection status is reflected in the UI using indicators such as:

* Connected
* Connecting
* Reconnecting
* Disconnected

This ensures the interface remains responsive even when network interruptions occur.

