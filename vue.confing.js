module.exports = {
  // publicPath: process.env.NODE_ENV === 'production'
  //   ? '/todolist/'
  //   : '/'

  // publicPath:'./todolist'

  // publicPath:''

   publicPath: process.env.NODE_ENV === 'production'
    ? '/todolist/'
    : './'
}
