// tutorial1.js
var CommentBox = React.createClass({
	render: function() {
		return (
			<div className="commentBox">
				Hello, world! I am a CommentBox.
			</div>
		);
	}
});
ReactDom.render(
	<CommentBox />,
	document.getElementById('content')
);