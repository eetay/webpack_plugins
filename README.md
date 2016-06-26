<html>
<head>
  <title>
    List Unused Files Plugin
  </title>
</head>
  <body>
    <h1>List Unused Files Plugin</h1>
    <div>
      This webpack plugin compares the list of compiled js/jsx files with the list of js/jsx files on disk, and lets you know which files are not used at all, so you can clean them up
    </div>
    <h1>Installation</h1>
    <ul>
    <li>Download the source file</li>
    <li>Edit your webpack config file like so: </li>
    </ul>
      <div class="highlight highlight-source-js" style="background-color:lightgrey;">
        <pre>
          import ListUnusedFilesPlugin from 'path/to/ListUnusedFilesPlugin.js'
        </pre>
      </div>
      <div class="highlight highlight-source-js" style="background-color:lightgrey;">
        <pre>
          webpackConfig.plugins.push(
            new ListUnusedFilesPlugin()
          )
        </pre>
      </div>
    <h1>Usage:</h1>
    <div class="highlight highlight-source-js">
      <pre>
        $ npm run compile
      </pre>
    </div>
  </body>
</html>

