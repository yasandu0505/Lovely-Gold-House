# ✨Lovely Gold House✨

Lovely Gold House is a simple business website built with React and JSON Server. It provides an elegant and user-friendly interface to showcase business offerings.

## Features

- Responsive UI built with Bootstrap
- Data storage using JSON Server
- Interactive and dynamic business pages
- Easy setup and deployment

## Tech Stack

- **Frontend:** React, React Router, CSS
- **Backend:** JSON Server (mock database)

## Installation and Setup

Follow these steps to run the project locally:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yasandu0505/Lovely-Gold-House.git
   cd Lovely-Gold-House
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the JSON Server:**

   ```bash
   npx json-server --watch data/bridaldb.json --port 8001
   ```
   ```bash
   npx json-server --watch data/jewelldb.json --port 8000
   ```

4. **Run the React app:**

   ```bash
   npm start
   ```

5. Open `http://localhost:3000` in your browser.

## Project Structure

```
Lovely-Gold-House/
│── public/          # Static assets
│── src/
│   ├── components/  # Reusable components
│   ├── pages/       # Page components
│   ├── services/    # API service files
│   ├── App.js       # Main App component
│   ├── index.js     # Entry point
│── db.json          # Mock database for JSON Server
│── package.json     # Project dependencies
│── README.md        # Project documentation
```

## Contributing

Contributions are welcome! Feel free to fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.

