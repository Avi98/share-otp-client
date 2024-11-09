import * as React from 'react';

import { SmsReadViewProps } from './SmsRead.types';

export default function SmsReadView(props: SmsReadViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
