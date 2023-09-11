function Bill({ bill, onChangeBill }) {
  return (
    <div>
      How much was the bill?
      <input type="text" value={bill} onChange={onChangeBill} />
    </div>
  );
}

export default Bill;
