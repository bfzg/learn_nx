import React from 'react'
import {Login as LoginComponent} from '@lnton-worksapce/login-lib'

const Login = () => {
	return (
		<div>
			<LoginComponent version='0.0.1' onFinish={()=>{}} refreshCaptcha={()=>{}}/>
		</div>
	)
}

export default Login
