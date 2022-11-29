function CustomButtonDelete(props) {
  const { color, onClick, children, gap } = props;
  if (color) {
    return (
      <button
        style={{
          width: "45%",
          height: "40px",
          backgroundColor: color,
          color: "black",
          borderRadius: "8px",
          border: "2px solid red",
          cursor: "pointer",
          gap: gap,
        }}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
  return <button onClick={onclick}>{children}</button>;
}

export default CustomButtonDelete;
