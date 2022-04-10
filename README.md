# react-native-new-relic-module

Use New Relic in React Native

## Installation

```sh
npm install react-native-new-relic-module
```

## Setup Android

- Follow instructions [here](https://docs.newrelic.com/docs/mobile-monitoring/new-relic-mobile-android/install-configure/install-android-apps-gradle-android-studio#installation) to add New Relic Agent as a dependency.

## Setup iOS

- add `import react_native_new_relic_module`
- call `NewRelic.start(withApplicationToken: "INSERT_TOKEN_HERE")`

## Usage

```js
import { NewRelicModule } from 'react-native-new-relic-module';

// View `NewRelicModuleInterface` to see supported methods
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
