import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to SmsReader.web.ts
// and on native platforms to SmsReader.ts
import SmsReaderModule from './src/SmsReaderModule';
import SmsReaderView from './src/SmsReaderView';
import { ChangeEventPayload, SmsReaderViewProps } from './src/SmsReader.types';

// Get the native constant value.
export const PI = SmsReaderModule.PI;

export function hello(): string {
  return SmsReaderModule.hello();
}

export async function setValueAsync(value: string) {
  return await SmsReaderModule.setValueAsync(value);
}

const emitter = new EventEmitter(SmsReaderModule ?? NativeModulesProxy.SmsReader);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { SmsReaderView, SmsReaderViewProps, ChangeEventPayload };
