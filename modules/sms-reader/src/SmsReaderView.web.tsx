import * as React from 'react';

import { SmsReaderViewProps } from './SmsReader.types';

export default function SmsReaderView(props: SmsReaderViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
