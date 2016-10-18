const h = require('react-hyperscript')

const ListItem = require('./ListItem')

// this is a stateless function
const List = props => h('section.list', [
  h('ul', props.items.map(item=>
   h(ListItem, { item, onScoreChange: props.onScoreChange })
  ))
])
module.exports = List
