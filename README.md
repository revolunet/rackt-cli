# rackt-cli

Command line interface for automating common tasks when building React.js components.

Maintained fork of https://github.com/mzabriskie/rackt-cli with some improvements

## Installing

```bash
$ npm install -g rackt-cli-revolunet
```

## About

The motivation for this CLI is to make it simple to get started when creating a new component, and eliminate the boilerplate that is commonly copy/pasted from one project to another. This CLI provides all config, dev dependencies, and scripts for building, testing, and releasing. There is even a command for generating a new component structure. By leveraging `rackt-cli`, you are able to focus on writing code.

## Usage

| Command             | Purpose                                                                     |
| ------------------- | --------------------------------------------------------------------------- |
| `rackt`             | Prints out a list of available commands.                                    |
| `rackt init <name>` | Creates a folder called `<name>` and generates a fresh component structure. |
| `rackt build`       | Builds the component to `build/` for CommonJS.                              |
| `rackt lint`        | Lint sources and examples                                                   |
| `rackt server`      | Starts the dev server using port `8080`.                                    |
| `rackt release`     | Publish a new release to npm. Use `--preview` to preview release.           |
| `rackt test`        | Runs the test suite. Use `--single-run` for single run.                     |
| `rackt pages`       | Deploys the examples to gh-pages.                                           |


#### `init`

The `init` command generates a component structure based on the opinions of this CLI.
It provides a basic working component, along with a simple example, and a failing test.

rackt-cli use [originate](https://www.npmjs.com/package/originate) to initialize the project boilerplate, and use [react-component-revolunet](https://www.npmjs.com/package/originate-react-component-revolunet) by default. If you want a custom boilerplate, provide the name as second argument.


#### `build`

The `build` command uses [webpack](http://webpack.github.io/), along with [babel](https://babeljs.io/) to transpile your code.
This means you are free to use JSX, and ES6 in your source, as it will be transpiled before shipping.

The `build/` folder will contain a transpiled version of your original source, un-bundled, for releasing to npm.

Note : use the `build` folder if you need to `npm link` this package.

#### `server`

The `server` command uses [webpack-dev-server](http://webpack.github.io/docs/webpack-dev-server.html) to serve your examples in the browser.
You may also run `npm start` as an alias to this command.

#### `release`

The `release` command runs `test`, and `build` command, then updates your CHANGELOG, creates a new tag, and releases to npm.

#### `test`

The `test` command runs [testem](https://github.com/airportyh/testem), using [mocha](http://mochajs.org/).
It will look for files under `lib/__tests__/` subfolder.

#### `pages`

The `pages` command will deploy your examples to a `gh-pages` branch.

## License

MIT
