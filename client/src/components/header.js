import React, { Component } from 'react';

class Header extends Component {
	render() {
		return (
			<div id="carousel-example-1z" className="carousel slide carousel-fade" data-ride="carousel">
	    		<ol className="carousel-indicators">
        			<li data-target="#carousel-example-1z" data-slide-to="0" className="active"></li>
        			<li data-target="#carousel-example-1z" data-slide-to="1"></li>
        			<li data-target="#carousel-example-1z" data-slide-to="2"></li>
    			</ol>
	    		<div className="carousel-inner" role="listbox">
	        		<div className="carousel-item active">
            			<img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg" alt="First slide" />
        			</div>
	       	  		<div className="carousel-item">
            			<img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg" alt="Second slide" />
        			</div>
	        		<div className="carousel-item">
            			<img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg" alt="Third slide" />
        			</div>
	    		</div>
			</div>
		    );
        };
}

export default Header;

