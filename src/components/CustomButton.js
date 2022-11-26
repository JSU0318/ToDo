function CustomButton(props) {
  const { color, onClick, children } = props;
  if (color) {
    return (
      <button
        style={{ backgroundColor: color, color: "white" }}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
  return <button onClick={onclick}>{children}</button>;
}

export default CustomButton;
