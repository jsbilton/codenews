const h = require('react-hyperscript')
const React = require('react')

module.exports = React.createClass({
    getInitialState: _ => ({
      title: '',
      link: '',
      score: 1
    }),
    setTitle: function (e) {
        this.setState({
          title: e.target.value})
    },
    setLink: function (e) {
        this.setState({
          link: e.target.value})
    },
    submit: function (e) {
        e.preventDefault()
        this.props.addNewsItem(this.state)
        this.setState({
          score: 1,
          title: '',
          link: ''
        })
    },
    render: function() {
        return (
          h('section.form.w-50', [
            h('h2.f4.white', 'Add News'),
            h('form', { onSubmit: this.submit },  [
                h('div.pb2', [
                    h('label', 'Title'),
                    h('input', {
                        onChange: this.setTitle,
                        value: this.state.title })
                ]),
                h('div.pb2', [
                    h('label', 'Link'),
                    h('input', {
                        onChange: this.setLink,
                        value: this.state.link })
                ]),
                h('div.tr', [
                      h('button.ml1.f6.link.dim.br2.ba.ph3.pv2.mb2.dib.black', 'Add News')
                    ])
                  ])
              ])
          )
        }
    })
