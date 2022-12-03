function CustomButton(props) {
  const { color, onClick, children } = props;
  if (color) {
    return (
      <button
        style={{
          backgroundColor: color,
          height: "40px",
          width: "140px",
          color: "white",
          borderRadius: "10px",
          border: "0px solid white",
          cursor: "pointer",
        }}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
  return <button onClick={onclick}>{children}</button>;
}
//수정본
export default CustomButton;
