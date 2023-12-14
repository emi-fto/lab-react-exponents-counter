const ExponentSix = ({count, countPow6}) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">{count}⁶</p>
    <p className="exponent-result">{count} * {count} * {count} * {count} * {count} * {count} = <span className="total">{countPow6}</span></p>
  </div>
);

export default ExponentSix;