require('distill')
  .config(function() {

  })
  .load(require('./config/app.' + (process.env.NODE_ENV || 'development')))
  .run(function(express) {
    
  });
