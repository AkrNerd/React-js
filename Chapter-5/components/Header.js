const Tilte = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2EvdQEij3J09ngqLGap5o-90-ieZLmTxb3uOqDgaRmYipP6cFAWE7ql10Zbnj16hX2Mw&usqp=CAU"
    />
  </a>
);

const Header = () => (
  <div className="header">
    {
      Tilte() //* FIRST WAY TO CALL A COMPONENT
    }
    <div className="nav">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

export default Header;