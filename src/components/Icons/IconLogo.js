/* eslint-disable max-len */
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';

const IconLogo = ({ theme, width =106.581, height = 120.186, ...props }) => {
  return (
    <svg 
    width={width} height={height} 
    viewBox="0 0 106.581 120.186" {...props}
    id="logo"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    style={{ overflow: 'visible' }}
    >
      <g fill={theme.brand.primary}>
        <path d="M48.579 33.048 48.4664 124.7849 50.2313 124.7849 50.2313 126.6791 76.4227 126.8098 76.1429 31.9889 49.849 32.007 49.823 33.023M84.6331 32.1156 84.5711 51.513 85.8409 51.513 85.8409 52.8937C100.3226 51.8602 101.5819 72.175 84.4906 72.4522L84.414 92.3776 85.8502 92.3776 85.836 93.704C131.1394 98.8416 141.7918 29.1614 84.7519 32.0918M43.6484 116.4504 45.9096 116.4768 45.9096 124.9116 43.7118 124.9116 43.6418 116.4768M80.5226 83.2603 83.0029 83.2603 83.004 92.318 80.549 92.318 80.5226 83.2603M77.88 32.0641 80.2006 32.0641 80.0897 40.5715 77.88 40.5715 77.8246 32.0641" />
      </g>
    </svg>
  );
};

IconLogo.propTypes = {
  theme: PropTypes.object,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default withTheme(IconLogo);
