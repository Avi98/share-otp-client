import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { SmsReadViewProps } from './SmsRead.types';

const NativeView: React.ComponentType<SmsReadViewProps> =
  requireNativeViewManager('SmsRead');

export default function SmsReadView(props: SmsReadViewProps) {
  return <NativeView {...props} />;
}
