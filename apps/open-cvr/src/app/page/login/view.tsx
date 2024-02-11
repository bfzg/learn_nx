import React from 'react'
import {Login as LoginComponent} from '@lnton-worksapce/login-lib'

const View:React.FC = () => {
	return (
		<div>
			<LoginComponent version='0.0.1' onFinish={()=>{}} refreshCaptcha={()=>{}}/>
		</div>
	)
}

export default View;
