import React, { Component } from 'react'
 
class PostFrom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            body: ''
        };
        // this.onChange = this.onChange.bind(this)
    }
    onChange(e) {//把当前修改的值赋入state
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    onSubmit(e) {
        // 阻止事件传递
       e.preventDefault();
        // 把表单用的最终数据从state中提取出来,传入请求
        const post ={
            title:this.state.title,
            body:this.state.body
        }
        fetch('http://localhost:3000/try-qs',{
            // post提交
            method:"POST",
            Accept: "application/json",
            "Content-Type": "application/json",
            body:JSON.stringify(post)
            //把提交的内容转字符串
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data)
        })
    }
    render() {
        return (
            <div>
                <h1>添加内容</h1>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div>
                        <label >title</label>
                        <br />
                        <input type="text" name="title" onChange={this.onChange.bind(this)} defaultValue={this.state.title} />
                    </div>
                    <div>
                        <label >body</label>
                        <br />
                        <textarea name="body" id="" cols="30" rows="10" onChange={this.onChange.bind(this)} defaultValue={this.state.body}></textarea>
                    </div>
                    <br />
                    <button type="submit">添加</button>
                </form>
            </div>
        )
    }
}
export default PostFrom