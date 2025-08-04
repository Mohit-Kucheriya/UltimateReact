import Options from "./Options";

export default function Questions({ question, dispatch, answer }) {
  console.log(question);

  return (
    <div className="">
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}
