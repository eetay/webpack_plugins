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
    edit your webpack config file like so:
    <div class="highlight highlight-source-js">
      <pre>
        webpackConfig.plugins.push(
          new ListUnusedFilesPlugin()
        )
      </pre>
    </span>
  </body>
</html>

