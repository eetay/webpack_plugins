![alt text](https://eetay.github.io/webpack_plugins/images/clean.gif)

# ListUnusedFilesPlugin
This webpack plugin compares the list of compiled js/jsx files with the list of js/jsx files on disk, and lets you know which files are not used at all, so you can clean them up

## Installation
- Download the source file
- Edit your webpack config file like so:
```javascript
import ListUnusedFilesPlugin from 'path/to/ListUnusedFilesPlugin.js'

webpackConfig.plugins.push( new ListUnusedFilesPlugin() )
```
## Usage
```sh
$ npm run compile
```
