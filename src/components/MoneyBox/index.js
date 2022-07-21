import './moneyBox.css';

const MoneyBox = () => {
  return (
    <div className='header-moneybox-wrapper'>
      <ul className='moneybox-list'>
        <li className='moneybox-item'>
          <p>0.00 EUR monthly fee</p>
        </li>
        <li className='moneybox-item'>
          <p>1.75% transaction fee *</p>
        </li>
      </ul>
    </div>
  );
};

export default MoneyBox;
