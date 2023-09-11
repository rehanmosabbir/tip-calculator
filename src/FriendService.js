function FriendService({ friendPercentage, onChangeFriendPercentage }) {
  return (
    <div>
      How did your friend like the service?
      <select value={friendPercentage} onChange={onChangeFriendPercentage}>
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>It was okay (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

export default FriendService;
