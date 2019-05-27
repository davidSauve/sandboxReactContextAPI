import React, {Component} from "react";

import './Avatar.css';

interface AvatarProperties {
	picture : string
}

interface AvatarState {
}

class Avatar extends Component<AvatarProperties, AvatarState> {

	constructor(props: AvatarProperties) {
		super(props);
	}

	render() {
		return (
			<div className="Avatar">
				<img src={this.props.picture} alt=""/>
			</div>
		);
	}
}

export default Avatar;
