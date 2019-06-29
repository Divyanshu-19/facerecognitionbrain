import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imageUrl, box}) => {
	return(
		<div className='center ma'>
			<div className='absolute ma2'>
			<img id='inputimage' alt='' src={imageUrl} width='500px' height='auto' />
			<div className="bounding-box" style={{top:box.topRow, right:box.leftCol, bottom:box.bottomRow, left: box.rightCol}}></div>
			</div>
		</div>
		);
}

export default FaceRecognition;