import { memo, useEffect, useState } from "react";
import clickSound from "./ClickSound.m4a";

function Calculator({ workouts, allowSound }) {
  const [number, setNumber] = useState(workouts.at(0).numExercises);
  const [sets, setSets] = useState(3);
  const [speed, setSpeed] = useState(90);
  const [durationBreak, setDurationBreak] = useState(5);
  const [duration, setDuration] = useState(0);

  const mins = Math.floor(duration);
  const seconds = (duration - mins) * 60;

  /*
  const playSound = useCallback(
    function () {
      if (!allowSound) return;
      const sound = new Audio(clickSound);
      sound.play();
    },
    [allowSound]
  );
  */

  // Only responsible for setting the duration
  useEffect(
    function () {
      setDuration((number * sets * speed) / 60 + (sets - 1) * durationBreak);
      // playSound();
    },
    [number, sets, speed, durationBreak]
  );

  // Only responsible for playing the sound when duration changes
  useEffect(
    function () {
      const playSound = function () {
        if (!allowSound) return;
        const sound = new Audio(clickSound);
        sound.play();
      };

      playSound();
    },
    [duration, allowSound]
  );

  function handleIncrement() {
    setDuration((duration) => Math.floor(duration + 1));
    // playSound();
  }

  function handleDecrement() {
    setDuration((duration) => (duration > 1 ? Math.ceil(duration - 1) : 0));
    // playSound();
  }

  return (
    <>
      <form>
        <div>
          <label>Type of workout</label>
          <select value={number} onChange={(e) => setNumber(+e.target.value)}>
            {workouts.map((workout) => (
              <option value={workout.numExercises} key={workout.name}>
                {workout.name} ({workout.numExercises} exercises)
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>How many sets?</label>
          <input
            type="range"
            min="1"
            max="5"
            value={sets}
            onChange={(e) => setSets(e.target.value)}
          />
          <span>{sets}</span>
        </div>
        <div>
          <label>How fast are you?</label>
          <input
            type="range"
            min="30"
            max="180"
            step="30"
            value={speed}
            onChange={(e) => setSpeed(e.target.value)}
          />
          <span>{speed} sec/exercise</span>
        </div>
        <div>
          <label>Break length</label>
          <input
            type="range"
            min="1"
            max="10"
            value={durationBreak}
            onChange={(e) => setDurationBreak(e.target.value)}
          />
          <span>{durationBreak} minutes/break</span>
        </div>
      </form>
      <section>
        <button onClick={handleDecrement}>–</button>
        <p>
          {mins < 10 && "0"}
          {mins}:{seconds < 10 && "0"}
          {seconds}
        </p>
        <button onClick={handleIncrement}>+</button>
      </section>
    </>
  );
}

export default memo(Calculator);

/*

When we click on the increment button, the setDuration function is called and playSound function will also get called, as setDuration, changes the duration state, so the function playSound will get re-created on re-render.

2. As React, will see the playSound function as a new function, and will re-create it on every render and since this function is a part of the dependency array of the effect, it will run the effect as well. 

3. So duration is then set again but using the current values, which actually haven't changed. 

4. Now, to deal with helper functions like playSound, there is few things we can do. So best strategy is always to move function like this out of component. But this startegy doesn't work in this case, because the function is a reactive value that depends on the prop.

5. Second is we can move this function inside the useEffect, but this also won't work, because we that could no longer be able to use out, and we need in multiple places.

6. So, the best way to deal with this is to use useCallback hook. This will return a memoized version of the function, which will not be re-created on every render.

*/

/*

Now, when we useCallback, we need to add the 'allowSound' as a dependency, but when clicking on the ToggleSound Icon button, the allowSound state is getting updated, and the component will re-rendered, so the function playSound will get re-created, and since the useEffect dependency array, playSound is included, it will see's the allowSound state change and will run the effect again.

So the setDuration function will get called with the current values of the four pieces of state. And it will re-calculate the duration based on that, Basically ignoring that earlier we had manually changed the duration with buttons.

So what the solution for this, Instead of using useCallback, and playSound on each button click. So when do we actually want the sound to play?
Ans: We want it to play when the duration changes. So we can use useEffect to listen to the changes in the duration state, and if the duration changes, we can play the sound.

*/
