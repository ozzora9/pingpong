import { useEffect, useState } from "react";

const SearchBar = ({ onSearch }) => {
  const txtList = [
    "군산 월명동 빵집",
    "전북대 근처 빵집",
    "대전 은행동 빵집",
  ];
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);
  const [idx, setIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDeleting) {
        if (count < txtList[idx].length) {
          if (count % 1 === 0) {
            setText(text + txtList[idx][Math.floor(count)]);
          }
          setCount(count + 0.5);
        } else if (count < txtList[idx].length + 5) {
          setCount(count + 1);
        } else {
          setIsDeleting(true);
        }
      } else {
        if (count > 0) {
          setText((prevText) => prevText.substring(0, count - 1));
          setCount(count - 1);
        } else {
          setIsDeleting(false);
          setIdx(idx < txtList.length - 1 ? idx + 1 : 0);
        }
      }
    }, 60);

    return () => clearInterval(interval);
  }, [count, isDeleting]);

  return (
    <div className="search-form">
      <div className="search-box">
        <span className="search-btn">
          <i className="bi bi-search"></i>
        </span>
        <input
          type="text"
          className="search-txt"
          placeholder={text}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBar;
