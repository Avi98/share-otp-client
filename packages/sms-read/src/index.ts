import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to SmsRead.web.ts
// and on native platforms to SmsRead.ts
import SmsReadModule from './SmsReadModule';
import SmsReadView from './SmsReadView';
import { ChangeEventPayload, SmsReadViewProps } from './SmsRead.types';

// Get the native constant value.
export const PI = SmsReadModule.PI;

export function hello(): string {
  return SmsReadModule.hello();
}

export async function setValueAsync(value: string) {
  return await SmsReadModule.setValueAsync(value);
}

const emitter = new EventEmitter(SmsReadModule ?? NativeModulesProxy.SmsRead);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { SmsReadView, SmsReadViewProps, ChangeEventPayload };
