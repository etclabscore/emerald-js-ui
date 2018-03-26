import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import { Edit as EditIcon } from '../../icons';
import Address from '../Address';
import IdentityIcon from '../IdentityIcon';

import styles from './styles';

const showIdentity = (show, id, identityProps) => {
  if (show) {
    return (
      <div style={{marginRight: '5px'}}>
        <IdentityIcon id={id} {...identityProps}/>
      </div>
    );
  }
  return null;
};

export const Account = (props) => {
  const {
    classes, primary, secondary, addr, abbreviated, description, name, editable,
  } = props;
  const { onAddressClick, onEditClick, identity, identityProps } = props;

  return (
    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}} className={classes.container}>
      {showIdentity(identity, addr, identityProps)}
      <div>
        <div className={classes.primaryContainer}>
          {primary ||
          <div onClick={onEditClick} className={classes.accountName}>
            <div>{ name }</div>
            {editable && <div style={{ marginLeft: '5px' }}><EditIcon style={styles.editIcon} /></div>}
          </div>}
        </div>
        <div style={{display: 'flex', alignItems: 'center'}}>
          {secondary || <Address
            onClick={onAddressClick}
            id={addr}
            shortened={abbreviated}
          />}
        </div>
      </div>
    </div>
  );
};

Account.defaultProps = {
  editable: false,
  onAddressClick: () => {},
};

Account.propTypes = {
  identity: PropTypes.bool,
  identityProps: PropTypes.bool,
  editable: PropTypes.bool,
  onAddressClick: PropTypes.func,
  onEditClick: PropTypes.func,
};


export default injectSheet(styles)(Account);
