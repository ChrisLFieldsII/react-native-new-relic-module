import { NativeModules } from 'react-native';

interface NewRelicModuleInterface {
  setAttribute: (key: string, value: string) => void;
}

const NewRelicModule = NativeModules.NewRelicModule as NewRelicModuleInterface;

export { NewRelicModule };
export default NewRelicModule;
