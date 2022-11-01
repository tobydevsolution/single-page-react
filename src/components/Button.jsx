import React from "react";

function Button() {
  return (
    <div className="container">
      <div className="twitter box" id="twitter_link">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          Twitter Link
        </a>
        <br />
        <sub className="sub">contact me on twitter</sub>
      </div>
      <div className="zuri box" id="btn_zuri">
        <a
          href="https://training.zuri.team"
          target="_blank"
          rel="noopener noreferrer"
        >
          Zuri Team
        </a>
        <br />
        <sub className="sub">Join The Zuri team</sub>
      </div>
      <div className="zuri_books box" id="books">
        <a
          href="https://books.zuri.team"
          target="_blank"
          rel="noopener noreferrer"
        >
          Zuri Books
        </a>
        <br />
        <sub className="sub">can you purchase the zuri books</sub>
      </div>
      <div className="python box" id="book_python">
        <a
          href="https://books.zuri.team"
          target="_blank"
          rel="noopener noreferrer"
        >
          Python Books
        </a>
        <br />
        <sub className="sub">checkout this python book for beginners</sub>
      </div>

      <div className="pitch box" id="pitch">
        <a
          href="https://background.zuri.team"
          target="_blank"
          rel="noopener noreferrer"
        >
          Background Check for Coders
        </a>
        <br />
        <sub className="sub">Search and probe for Coders</sub>
      </div>
      <div className="design box" id="book_design">
        <a
          href="https://books.zuri.team/design-rules"
          target="_blank"
          rel="noopener noreferrer"
        >
          Design Books
        </a>
        <br />
        <sub className="sub">
          Explore These books to learn design and coding
        </sub>
      </div>
    </div>
  );
}

export default Button;
