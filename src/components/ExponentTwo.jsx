const ExponentTwo = ({count, countPow2}) => (
   <div className="exponent-counter-container">
    <p className="exponent-label">{count}²</p>
    <p className="exponent-result">{count} * {count} = <span className="total">{countPow2}</span></p>
  </div>
);

export default ExponentTwo;