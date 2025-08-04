import { useQuiz } from "../contexts/QuizContext";

export default function Progress() {
  const { numQuestions, index, points, maxPossiblePoints, answer } = useQuiz();

  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}
