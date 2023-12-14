const ExponentFour = ({count, countPow4}) => (
   <div className="exponent-counter-container">
    <p className="exponent-label">{count}⁴</p>
    <p className="exponent-result">{count} * {count} * {count} * {count} = <span className="total">{countPow4}</span></p>
  </div>
);

export default ExponentFour;