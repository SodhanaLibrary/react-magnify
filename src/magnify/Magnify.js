import React from 'react';
import './magnify.scss';
import classNames from 'classnames';

class Magnify extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
        imgWidth:0,
        imgHeight:0
      }
      this.onMouseOver = this.onMouseOver.bind(this);
      this.onLoadImg = this.onLoadImg.bind(this);
   }

   onLoadImg() {
      const image_object = new Image();
 			image_object.src = this.props.src;
      this.setState({
        imgWidth:image_object.width,
        imgHeight:image_object.height,
        glassStyle:{
          display:'none'
        }
      });
   }

   onMouseOver(e) {
      const mx = e.pageX - (this.img.x || this.img.getBoundingClientRect().x);
      const my = e.pageY - (this.img.y || this.img.getBoundingClientRect().y);
      if(mx < this.img.offsetWidth && my < this.img.offsetHeight && mx > 0 && my > 0)
			{
        let rx = Math.round(mx/this.img.offsetWidth*this.state.imgWidth - this.glass.offsetWidth/2)*-1;
				let ry = Math.round(my/this.img.offsetHeight*this.state.imgHeight - this.glass.offsetHeight/2)*-1;
				let bgp = rx + "px " + ry + "px";

				//Time to move the magnifying glass with the mouse
				let px = mx - this.glass.offsetWidth/2;
				let py = my - this.glass.offsetHeight/2;
        const glassStyle = {
          background: 'url('+this.props.src+') '+rx+'px '+ry+'px no-repeat',
          display: 'block',
          left: px+'px',
          top: py+'px'
        };
         this.setState({glassStyle});
			} else {
        this.setState({
          glassStyle:{
            display:'none'
          }
        });
      }
   }

   render() {
     const {className, src, ...otherProps} = this.props;
     return (
       <div className="react-magnify">
       	<div style={this.state.glassStyle} onMouseLeave={this.onMouseOver} onMouseMove={this.onMouseOver} ref={ref => this.glass = ref} className="react-magnify--large"></div>
       	<img onLoad={this.onLoadImg} onMouseLeave={this.onMouseOver} onMouseMove={this.onMouseOver} ref={ref => this.img = ref} className={classNames("react-magnify--small", className)} src={src} {...otherProps}/>
       </div>
    );
   }
}

Magnify.propTypes = {
};

Magnify.defaultProps = {
};

export default Magnify;
