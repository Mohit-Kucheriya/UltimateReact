export default function FinishScreen({
  points,
  maxPossiblePoints,
  highscore,
  dispatch,
}) {
  const percentage = Math.ceil((points / maxPossiblePoints) * 100);
  let emoji;
  if (percentage === 100) emoji = "🎖️";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "😎";
  if (percentage >= 0 && percentage < 50) emoji = "😐";
  if (percentage === 0) emoji = "🤦‍♂️";

  return (
    <>
      <p className="result">
        <span>{emoji}</span>
        You Scored <strong>{points}</strong> out of{" "}
        <strong>{maxPossiblePoints}</strong> ({percentage}%)
      </p>
      <p className="highscore">(HighScore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}
