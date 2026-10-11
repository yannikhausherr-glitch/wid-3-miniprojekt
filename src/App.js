import { useState } from "react";

export default function App() {
  const [headerColor, setHeaderColor] = useState("white");
  const [dropdown, setDropdown] = useState("Turnverein");
  const textColor = headerColor === "white" ? "red" : "white";

  return (
    <div className="App">
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: headerColor,
          padding: "20px 30px",
          border: "2px solid black",
        }}
      >
        <img
          src="https://tvdaettlikon.ch/wp-content/uploads/2021/07/cropped-Website-Header-Jubil%C3%A4ums-Logo-2022-2.png"
          alt="TV Dättlikon Logo"
          style={{
            height: "80px",
            backgroundColor: "white",
          }}
        />
        <h1
          style={{
            fontFamily: "Arial, sans-serif",
            color: textColor,
            textAlign: "center",
            flex: 1,
          }}
        >
          TV Dättlikon
        </h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <button
            onClick={() =>
              setHeaderColor(headerColor === "white" ? "red" : "white")
            }
          >
            Style ändern
          </button>
          <select
            value={dropdown}
            onChange={(e) => {
              setDropdown(e.target.value);
            }}
          >
            <option value="Turnverein">Turnverein</option>
            <option value="Aktuelles">Aktuelles</option>
            <option value="Vorstand">Vorstand</option>
            <option value="Trainingszeiten">Trainingszeiten</option>
          </select>
        </div>
      </header>
      <div
        style={{
          fontFamily: "Arial, sans serif",
          fontSize: "24px",
          fontWeight: "bold",
          padding: "10px",
        }}
      >
        {dropdown}
      </div>
    </div>
  );
}
