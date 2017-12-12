import React, {
	Component
} from 'react';

class Clock extends Component {
	static defaultProps = { 
		//类的静态属性
		shiqu: "北京"
	};

	constructor(props) {
		super(props);
		var shiqu = this.props.shiqu;
		
		this.handleClick = this.handleClick.bind(this);

		const oneHour = 1000 * 60 * 60;

		var now = new Date();

		if(shiqu == "东京") {
			now = now.getTime() + oneHour;
		} else if(shiqu == "莫斯科") {
			now = now.getTime() - oneHour * 5;
		}

		this.state = {
			clockStop: false,
			date: shiqu + '时间：' +
				(new Date(now).toLocaleTimeString())
		};
	}

	//onload
	componentDidMount() {
		this.timerID = setInterval(
			() => this.tick(),
			1000
		);
	}

	//onunload
	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick() {
		const oneHour = 1000 * 60 * 60;
		var shiqu = this.props.shiqu;
		var now = new Date();

		if(shiqu == "东京") {
			now = now.getTime() + oneHour;
		} else if(shiqu == "莫斯科") {
			now = now.getTime() - oneHour * 5;
		}

		this.setState({
			date: shiqu + '时间：' +
				(new Date(now).toLocaleTimeString())
		});

	}

	handleClick() {
		this.setState({
			clockStop: !this.state.clockStop
		});
		//console.log(this.state.clockStop);
		
		if(!this.state.clockStop) {
			clearInterval(this.timerID);
		} else {
			this.timerID = setInterval(
				() => this.tick(),
				1000
			);
		}
	}

	render() {
		return(
			<div onClick={this.handleClick}>{this.state.date+''}</div>
		);
	}
}

export default Clock;
