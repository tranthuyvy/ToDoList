import PropTypes from 'prop-types';
import CheckCircleIcon from "./CheckCircleIcon";
import CloseCircleIcon from "./CloseCircleIcon";

const TodoItem = ({ todo, loading, handleMarkDone }) => {
  return (
    <div className="border-b border-neutral-200 py-3">
      <div className="flex justify-between gap-4 mb-2">
        <div className="flex gap-4 items-center">
          <span>
            {todo.completed ? (
              <CheckCircleIcon width={20} height={20} />
            ) : (
              <CloseCircleIcon width={20} height={20} />
            )}
          </span>

          <span className="font-RobotoMedium">{todo.title}</span>
        </div>

        {!todo.completed && (
          <button
            className={`cursor-pointer rounded-md border px-2 py-1 text-right bg-green text-white font-RobotoMedium hover:bg-hoverGreen ${loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            onClick={() => handleMarkDone(todo.id)}
            disabled={loading}
          >
            {loading ? "Loading..." : "Mark done"}
          </button>
        )}
      </div>
    </div>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  handleMarkDone: PropTypes.func.isRequired
};

export default TodoItem;
