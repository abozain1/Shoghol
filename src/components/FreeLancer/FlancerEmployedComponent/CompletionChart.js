import "./FlancerEmployedListCard.component.scss";

function CompletionChart({ value }) {
  function convertIndx(indx, param) {
    return (indx + param) * 10;
  }
  return (
    <div className="containo32">
      <p>{value}%</p>
      {Array(10)
        .fill(true)
        .map((ele, indx) => (
          <div key={indx} className="progressHo">
            <div
              style={{
                width:
                  value >= convertIndx(indx, 1)
                    ? "100%"
                    : value < convertIndx(indx, 0)
                    ? 0
                    : `${(value - convertIndx(indx, 0)) * 10}%`,
              }}
              className="progressCh"
            />
          </div>
        ))}
    </div>
  );
}
export default CompletionChart;
