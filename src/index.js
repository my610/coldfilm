// process.env.NODE_ENV = process.env.NODE_ENV || 'production' // 'development'
const app = require('./app')
const port = app.get('port')
const server = app.listen(port)
const chalk = require('chalk')

server.on('listening', () => {
  console.log(`Feathers application started on ${app.get('host')}:${port}`)
  console.log(chalk.bgBlue.bold('INFO'), `Feathers application started on ${chalk.blue(process.env.NODE_ENV)}`)
  // console.log(`Feathers started is production:`, process.env.NODE_ENV === 'production')
})
