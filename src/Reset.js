function Reset({ bill, onReset }) {
  if (bill === 0) return;
  return (
    <>
      <button onClick={onReset}>Reset</button>
    </>
  );
}

export default Reset;
