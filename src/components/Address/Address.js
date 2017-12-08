import React from 'react';
import PropTypes from 'prop-types';
import copy from 'copy-to-clipboard';
import injectSheet from 'react-jss';

import { Copy as CloneIcon } from '../../icons';

import styles from './styles';

export const Address = (props) => {
  const {
    classes, id, shortened, onClick, style,
  } = props;
  function copyAddressToClipBoard() {
    copy(id);
  }

  let icons = null;
  if (!shortened) {
    icons = (<CloneIcon
      onClick={copyAddressToClipBoard}
      color={classes.container.color}
      className={classes.copyIcon}
    />);
  }
  const sanitizedId = (id.startsWith('0x') ? id : `0x${id}`);
  const value = shortened ?
    `${sanitizedId.substring(0, 7)}...${sanitizedId.substring(sanitizedId.length - 6, sanitizedId.length)}` :
    sanitizedId;

  return (
    <div className={classes.container} style={style}>
      <div onClick={onClick} className={classes.address}>
        {value}
      </div>
      {icons && <div>{icons}</div>}
    </div>
  );
};

Address.propTypes = {
  onClick: PropTypes.func,
  id: PropTypes.string.isRequired,
  shortened: PropTypes.bool,
};

export default injectSheet(styles)(Address);