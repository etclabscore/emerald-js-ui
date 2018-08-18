import React from 'react';
import { storiesOf } from '@storybook/react';
import AppBar from '../../src/components/AppBar';
import CurrentBlockNumber from '../../src/smart-components/CurrentBlockNumber';
import NetworkSelector from '../../src/smart-components/NetworkSelector';
import AccountSelector from '../../src/smart-components/AccountSelector';
import { withKnobs, text, boolean, number, array, object } from '@storybook/addon-knobs/react';

storiesOf('AppBar', module)
  .addDecorator(withKnobs)
  .add('AppBar', () => (
    <AppBar title={text('title', 'Emerald')} subtitle={text('subtitle', 'AppBar')}>
      <AccountSelector />
      <CurrentBlockNumber />
      <NetworkSelector />
    </AppBar>
  ));

/* subtitle={text('subtitle', 'App Bar')}
    blockNumber={number('blockNumber', 15999999)}
    fiatBalance={number('fiatBalance', 20000.00)}
    fiatSymbol={text('fiatSymbol', 'USD')}
    balance={number('balance', 200.00)}
    symbol={text('symbol', 'ETC')} */
