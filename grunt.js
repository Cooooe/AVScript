// Project configuration.
grunt.initConfig({
  concat: {
    //
    // js 디렉토리에 application.js 생성
    // syntax:
    //    from: to(array)
    //
    'js/application.js': ['src/js/common.js', 'src/js/util.js']
  }
});
