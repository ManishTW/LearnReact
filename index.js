const title = React.createElement(
	'h1',//tag type of element to be created
    {id:'title',className:'header'}, //Properties of the above tag
    'Hello world'
)

ReactDOM.render(
    title,
    document.getElementById('react-container')
)