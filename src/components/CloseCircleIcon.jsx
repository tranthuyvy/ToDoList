import PropTypes from 'prop-types';

const CloseCircleIcon = ({ width, height }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Close-Circle">
          <rect id="Rectangle" fillRule="nonzero" x="0" y="0" width="24" height="24"></rect>
          <circle id="Oval" stroke="#DE3039" strokeWidth="2" strokeLinecap="round" cx="12" cy="12" r="9"></circle>
          <line x1="14.1213" y1="9.87866" x2="9.8787" y2="14.1213" id="Path-1" stroke="#DE3039" strokeWidth="2" strokeLinecap="round"></line>
          <line x1="9.87866" y1="9.87866" x2="14.1213" y2="14.1213" id="Path-2" stroke="#DE3039" strokeWidth="2" strokeLinecap="round"></line>
        </g>
      </g>
    </svg>
  );
};

CloseCircleIcon.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CloseCircleIcon;
