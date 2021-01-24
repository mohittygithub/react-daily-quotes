import { useState, useEffect } from "react";
import "./App.css";
// import axios from "axios";
import { quotesData } from "./quotes.data";

// advice api url = https://api.adviceslip.com/advice
// famous quotes api url = https://type.fit/api/quotes

const App = () => {
  //   const [advice, setAdvice] = useState("Click the button to get an advice");
  const [quote, setQuote] = useState({});
  const [loading, setLoading] = useState(false);
  //   const [disable, setDisable] = useState(false);

  //   const fetchAdvice = async () => {
  //     setLoading(true);
  //     const response = await axios.get(`https://api.adviceslip.com/advice`);
  //     const { advice } = response.data.slip;
  //     setLoading(false);

  //     setAdvice(advice);
  //     fetchQuotes();
  //   };
  const fetchQuotes = () => {
    // const response = await axios.get("https://type.fit/api/quotes");
    // console.log(response.data);
    setLoading(true);
    const randomQuote =
      quotesData[Math.floor(Math.random() * quotesData.length)];
    // console.log(randomQuote);
    setLoading(false);
    setQuote({ quote: randomQuote.text, author: randomQuote.author });
  };

  useEffect(() => {
    //   fetchAdvice();
    fetchQuotes();
  }, []);

  if (!loading) {
    return (
      <div className="app">
        <div className="card">
          <h1 className="heading">{quote.quote}</h1>
          <p className="author">-{quote.author}</p>
          <button
            className="button"
            onClick={fetchQuotes}
            disabled={loading && true}
          >
            Generate Quote
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="app">
      <div className="card">
        <h1 className="heading">Loading advice...</h1>
        <button
          className="button"
          onClick={fetchQuotes}
          disabled={loading && true}
        >
          Generate Quote
        </button>
      </div>
    </div>
  );
};
export default App;
