function PayText({ totalBill, bill, tip, myPercentage, friendPercentage }) {
  if (bill === 0) return;
  return (
    <div>
      <h1>
        You pay ${totalBill} (${bill} + ${tip} tip)
      </h1>
    </div>
  );
}

export default PayText;
