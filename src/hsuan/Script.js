import React from 'react';
import Script from 'react-load-script';
class DynamicScriptExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scriptStatus: 'no'
        }
    }
    handleScriptCreate() {
      this.setState({ scriptLoaded: false })
    }
     
    handleScriptError() {
      this.setState({ scriptError: true })
    }
     
    handleScriptLoad() {
      this.setState({ scriptLoaded: true, scriptStatus: 'yes' })
    }
    render() {
        return (
            <>
            <Script
              url="https://cdn.staticfile.org/jquery/3.3.1/jquery.min.js"
              onCreate={this.handleScriptCreate.bind(this)}
              onError={this.handleScriptError.bind(this)}
              onLoad={this.handleScriptLoad.bind(this)}
            />
            <div>动态脚本引入状态：{this.state.scriptStatus}</div>
            </>
        );
    }
}
export default DynamicScriptExample;