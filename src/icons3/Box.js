import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

const Box = props => (
  <SvgIcon {...props} viewBox="0 0 64 64">
    <path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="4" d="M8 8h48v48H8z"/>
  </SvgIcon>
);

export default Box;