import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';
import { ReactComponent as GreenDogeIcon } from './images/greendoge.svg';

export default function Keys(props: SvgIconProps) {
  return <SvgIcon component={GreenDogeIcon} viewBox="0 0 150 58" {...props} />;
}
