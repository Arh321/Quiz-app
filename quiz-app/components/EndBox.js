const EndBox = ({ name, score, handleStartAgain }) => {
  return (
    <div className="w-full flex flex-col gap-4 px-4 py-5 bg-yellow-400 rounded-lg">
      <p className="w-full flex justify-center text-4xl font-medium">
        The End ...
      </p>
      <p className="w-full text-center text-2xl font-medium mt-4">
        {name} your score is: {score}
      </p>
      <div className="w-full flex justify-center mt-4">
        <button
          onClick={() => handleStartAgain()}
          className="text-lg font-medium border-2 px-2 rounded border-black active:scale-95"
        >
          start again
        </button>
      </div>
    </div>
  );
};
export default EndBox;
