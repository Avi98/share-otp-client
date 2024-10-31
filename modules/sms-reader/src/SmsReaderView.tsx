import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { SmsReaderViewProps } from './SmsReader.types';

const NativeView: React.ComponentType<SmsReaderViewProps> =
  requireNativeViewManager('SmsReader');

export default function SmsReaderView(props: SmsReaderViewProps) {
  return <NativeView {...props} />;
}
