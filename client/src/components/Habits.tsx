interface HabitProps {
  completed: number;
}

export function Habits(props: HabitProps) {
  return (
    <>
      <div className="w-10 h-10 rounded bg-purple-700 text-white text-center m-1 flex justify-center items-center">
        {props.completed}
      </div>
    </>
  );
}
