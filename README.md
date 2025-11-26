# Weather Dashboard

A full-stack weather dashboard application that provides real-time weather information and a 5-day forecast for locations worldwide. Built with Next.js for the frontend and Express.js for the backend.

## Features

- **Current Weather**: detailed current weather conditions including temperature, wind speed, humidity, visibility, and pressure.
- **5-Day Forecast**: Outlook for the next 5 days with high/low temperatures and weather conditions.
- **Location Search**: Search for any city with autocomplete suggestions.
- **Recent Searches**: Quickly access previously searched locations.
- **Dark Mode**: Toggle between light and dark themes for a comfortable viewing experience.
- **Responsive Design**: Optimized for various screen sizes.

## Tech Stack

### Frontend
- **Framework**: [Next.js](https://nextjs.org/)
- **Library**: [React](https://reactjs.org/)
- **Styling**:  Inline Styles
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **HTTP Client**: [Axios](https://axios-http.com/)

### Backend
- **Runtime**: [Node.js](https://nodejs.org/)
- **Framework**: [Express.js](https://expressjs.com/)
- **HTTP Client**: [Axios](https://axios-http.com/)
- **Middleware**: [CORS](https://www.npmjs.com/package/cors), [Dotenv](https://www.npmjs.com/package/dotenv)

## Getting Started

### Prerequisites

- Node.js installed on your machine.
- An API key from a weather provider (e.g., WeatherAPI.com).

### Installation

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd weather-dashboard
    ```

2.  **Setup Backend:**

    Navigate to the backend directory and install dependencies:

    ```bash
    cd backend
    npm install
    ```

    Create a `.env` file in the `backend` directory and add your API credentials:

    ```env
    PORT=3000
    BASEURL=http://api.weatherapi.com/v1
    APIKEY=your_api_key_here
    ```

    Start the backend server:

    ```bash
    npm start
    ```
    The backend server will typically run on `http://localhost:3000` (or the port you specified).

3.  **Setup Frontend:**

    Open a new terminal, navigate to the frontend directory, and install dependencies:

    ```bash
    cd frontend
    npm install
    ```

    Create a `.env` file in the `frontend` directory and point it to your backend:

    ```env
    NEXT_PUBLIC_BASEURL=http://localhost:3000
    ```

    Start the frontend development server:

    ```bash
    npm run dev
    ```
    The application should now be accessible at `http://localhost:3001`.
    
## DEMO 
<img width="1845" height="967" alt="image" src="https://github.com/user-attachments/assets/175d3de4-fe5c-4efe-852b-e45dc5de8496" />
<img width="1796" height="913" alt="image" src="https://github.com/user-attachments/assets/513cbdc3-4e49-49b7-ba7f-ba5c9d0967af" />


## API Endpoints

The backend exposes the following endpoints:

-   `GET /api/weather/current?q={location}`: Fetches current weather data for a specific location.
-   `GET /api/weather/forecast?q={location}&days={days}`: Fetches forecast data.
-   `GET /api/locations/autocomplete?q={query}`: Provides location suggestions based on the search query.

