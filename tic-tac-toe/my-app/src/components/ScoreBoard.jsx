/* eslint-disable react/prop-types */
const ScoreBoard = ({ scores, xPlaying }) => {
  const { xScore, oScore } = scores;
  return (
    <div className="scoreboard">
      <span className={`score x-score ${!xPlaying && 'inactive'}`}>
        X - {xScore}
      </span>
      <span className={`score o-score ${xPlaying && 'inactive'}`}>
        O - {oScore}
      </span>
    </div>
  );
};

export default ScoreBoard;
