# smh-concurrency-utils

Hardware Concurrency Optimizer helps developers efficiently determine the number of available hardware concurrencies on a system, even when other software or hardware resources are already in use. This package is ideal for optimizing multi-threaded or parallelized applications, ensuring that your processes can be executed without overloading the system.

## Installation
```sh
# NPM
npm install --save smh-concurrency-utils

#Yarn
yarn add smh-concurrency-utils
```

## Parameters


| Parameter                 | Type   | Optional | Default      | Description                                                                            |
| -------------------- | ------ | -------- | ------------ | -------------------------------------------------------------------------------------- |
| memoryLimitThreshold         | number | Yes      | 0.8           | Value Range from 0 to 1       |

## Usage

```js

import { getDynamicConcurrency } from 'smh-concurrency-utils'

console.log(getDynamicConcurrency()) // 2 - output depends on the hardware and threshold
```

And we're done 🎉
## Contributing

Contribution are always welcome, no matter how large or small !

We want this community to be friendly and respectful to each other.Please follow it in all your interactions with the project.

Please feel free to drop me a mail [S MUNI HARISH](mailto:samamuniharish@gmail.com?subject=[GitHub])

## Acknowledgements

Thanks to the authors of these libraries for inspiration

## Sponsor & Support

To keep this library maintained and up-to-date please consider [sponsoring it on GitHub](https://github.com/sponsors/smuniharish). Or if you are looking for a private support or help in customizing the experience, then reach out to me on Linkedin [@smuniharish](https://www.linkedin.com/in/smuniharish).

## License

[Apache License 2.0](./LICENSE)

---

Made with ❤️

