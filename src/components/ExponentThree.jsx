const ExponentThree = ({count, countPow3}) => (
   <div className="exponent-counter-container">
    <p className="exponent-label">{count}³</p>
    <p className="exponent-result">{count} * {count} * {count} = <span className="total">{countPow3}</span></p>
  </div>
);

export default ExponentThree;