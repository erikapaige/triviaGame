//npm 'inquirer' package allows for use of prompts
const { prompt } = require('inquirer')

//view 2 user options 'new game or view leaderboard'
//execute this by using inquirer list

function userChoice () {
  prompt([
    {
      type: 'list',
      name: 'new game',
      message: 'Would you like to play a new game?'
    choices: 'true'
    }
  ])
}
  //if answer true then pull api categories
  //if answer false then show leaderboard


  // module.exports = option selcted by user