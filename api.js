//npm 'inquirer' package allows for use of prompts
const { prompt } = require('inquirer')
//npm 'axios' package
const axios = require('axios')

//create a varialbe for category options
const categoryChoices =
  //using api, set list of cateogires equal to an array
  axios.get('https://opentdb.com/api_category.php')
    .then(({ data }) => {
      console.log(data)
    })
    .catch(err => console.log(err))

//prompt user to select category of trivia using inquirer'list
prompt([
  {
    type: 'list',
    name: 'category',
    message: 'Please select a category:',
    choices: `${categoryChoices}`
  }
])
  .then (category =>{
    console.log(category)
    for (const name in category){
      console.log(name[category])
    }
  })
  .catch(err => console.log(err))

//console.log user's choice
//prompt them with 10 questions from that category
