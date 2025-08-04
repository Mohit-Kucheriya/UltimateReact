export default function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to The React Quiz</h2>
      <h3>{numQuestions} questions to test your React skills</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's go!
      </button>
    </div>
  );
}
