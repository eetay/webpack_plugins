import walk from 'walk';
var valid = (path) => (!path.match(/node_modules/)) && path.endsWith('.js')

var ListUnusedFilesPlugin = function() {};
ListUnusedFilesPlugin.prototype.apply = function(compiler) {
  compiler.plugin('emit', function(compilation, callback) {
    let files = []
    compilation.chunks.forEach(function(chunk) {
      chunk.modules.forEach(function(module) {
        // Explore each source file path that was included into the module:
        if (module.fileDependencies) {
            module.fileDependencies.forEach(function(path) {
                if (valid(path)) files.push(path)
            });
        }
      });
    });

    var walker  = walk.walk(files[0].split('js_source')[0]+'js_source', { followLinks: false })
    var unused_files = []
    walker.on('file', function(root, stat, next) {
        let check_file = root+'/'+stat.name
        if (valid(check_file) && (files.indexOf(check_file) == -1)) unused_files.push(check_file)
        next();
    });
    walker.on('end', () => {
        console.log('\n\n' + unused_files.length + ' unused files')
        console.log(unused_files)
    })
    callback();
  });
};


export default ListUnusedFilesPlugin
