import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const sekcja = ["Piłka nożna", "Szachy", "Robotyka", "Pływanie"];

  const [imieNazwisko, setImieNazwisko] = useState('');
  const [numerSekcji, setNumerSekcji] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const indexSekcja = parseInt(numerSekcji, 10);
    console.log(imieNazwisko);

    if (indexSekcja >= 1 && indexSekcja <= sekcja.length) {
      console.log(sekcja[indexSekcja - 1]);
    }
    else
    {
      console.log("Nieprawidłowy numer sekcji");
    }
  };

  return (
    <div className="container mt-4 text-start" style={{ maxWidth: '1000px' }}>
      <h2>Liczba sekcji: {sekcja.length}</h2>

      <ol>
        {sekcja.map((sekcja, index) => (
          <li key={index}>{sekcja}</li>
        ))}
      </ol>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="imieNazwisko" className="form-label">
            Imię i nazwisko:
          </label>
          <input
          type="text"
            className="form-control"
            id="imieNazwisko"
            value={imieNazwisko}
            onChange={(e) => setImieNazwisko(e.target.value)}
            required
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="numerSekcji" className="form-label">
            Numer sekcji:
          </label>
          <input
            type="number"
            className="form-control"
            id="numerSekcji"
            value={numerSekcji}
            onChange={(e) => setNumerSekcji(e.target.value)}
            required
          />
        </div>

      <button type="submit" className="btn btn-primary">
          Zapisz
        </button>

      </form>
    </div>
  );
}

export default App
