import React from 'react';
import ReactSwipe from 'react-swipe';
import WxImageViewer from 'react-wx-images-viewer';
import ImgPath from "../../constants/url";
import PropTypes from 'prop-types';
Greeting.propTypes = {
    name: PropTypes.string //原为：React.PropTypes.string
  };
class SwiperContent extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            index: 0,
            imags: [
                require('./icon/horizontal.jpg'),
                require('./icon/horizontal.jpg'),
                require('./icon/horizontal.jpg'),
            ],
            isOpen: false
        };
    }
    onClose(){
        this.setState({
            isOpen: false
        })
    }
    openViewer (index){
        this.setState({
            index,
            isOpen: true
        })
    }

    render() {
        let icon =this.props.ImgDataArray;
        const {
            index,
            isOpen
        } = this.state;
        var opt = {
            startSlide:0,  //开始滚动的位置,默认为0
            auto: 5000,     //开始自动幻灯片
            continuous:true,  //创建一个无限的循环
            callback: (index) => {  //幻灯片运行中的回调函数
                this.setState({
                    index: index
                })
            }
        };
        return (
            <div className="app">
                <div className="img-list">
                    {/*直接打开*/}
                    {/*<button onClick={this.openViewer.bind(this, 0)}>点击打开图片</button>*/}
                    <ReactSwipe className="carousel" swipeOptions={opt}>
                        {
                            this.state.imags.map((item, index) => {
                                return <div className="img" key={index}>
                                    <img src={item} alt="" onClick={this.openViewer.bind(this, index)} width="100%" height="auto" className=""/>
                                </div>
                            })
                        }
                    </ReactSwipe>
                    {/*{
                        this.state.imags.map((item, index) => {
                            return <div className="img" key={index}>
                                <img src={item} alt="" onClick={this.openViewer.bind(this, index)} width="100%" height="auto" className=""/>
                            </div>
                        })
                    }*/}
                </div>
                {
                    isOpen ? <WxImageViewer onClose={this.onClose.bind(this)} urls={ this.state.imags} index={index}/> : ""
                }

            </div>
        );

    }
    componentDidMount () {

    }
}
