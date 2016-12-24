
var React = require('react');
var ReactDOM = require('react-dom');

var draft = require('draft-js');
var Editor = draft.Editor;
var EditorState = draft.EditorState;
var RichUtils = draft.RichUtils;

var connect = require('react-redux').connect;
var actions = require('../../actions/index');
var store = require('../../store');
var router = require('react-router');
var Link = router.Link;


class MyEditor extends React.Component {
        constructor(props) {
          super(props);
          this.state = {editorState: EditorState.createEmpty()};

          this.focus = () => this.refs.editor.focus();
          this.onChange = (editorState) => this.setState({editorState});
          this.logState = () => console.log(this.state, this.state.editorState, this.state.editorState.toJS());
        }

        render() {
          return (
            <div style={styles.root}>
              <div style={styles.editor} onClick={this.focus}>
                <Editor
                  editorState={this.state.editorState}
                  onChange={this.onChange}
                  placeholder="Enter some text..."
                  ref="editor"
                />
              </div>
              <input
                onClick={this.logState}
                style={styles.button}
                type="button"
                value="Log State"
              />
              <div></div>
            </div>
          );
        }
      }

      const styles = {
        root: {
          fontFamily: '\'Helvetica\', sans-serif',
          padding: 20,
          width: 600,
        },
        editor: {
          border: '1px solid #ccc',
          cursor: 'text',
          minHeight: 80,
          padding: 10,
        },
        button: {
          marginTop: 10,
          textAlign: 'center',
        },
      };

// var mapStateToProps = function(state, props) {
//     return {
//         blogState: state.text
//     };
// };

// var Container = connect(mapStateToProps)(MyEditor);

// module.exports = Container;

module.exports = MyEditor;