import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Row, Flex } from 'antd'
import Field from '../../Component/Field'
import ButtonLogin from '../../Component/ButtonLogin'
import logo from '../../assets/images/login.png'
import { useForm } from '../../hooks/useForm'
import { useAuth } from '../../Component/AuthContext'
// import { authenticationservice } from '../../services/authentication.service'

export default function Login() {
  const { validate, register, form } = useForm({
    username: [
      { required: true },
      {
        regexp: 'username',
        message: 'Vui long nhap dung email',
      },
    ],
    password: [{ required: true }],
  })
  const { login } = useAuth()
  // const onSubmit = async (ev) => {
  //   try {
  //     ev.preventDefault()
  //     console.log(form)
  //     if (validate()) {
  //       const res = await authenticationservice.login(form)
  //       console.log(res)
  //       message.success('Đăng nhập thành công', [4])
  //     } else {
  //       console.log('validate error')
  //     }
  //   } catch (err) {
  //     message.error('Username or Password incorrect', [3])
  //   }
  // }
  const onSubmit = (ev) => {
    ev.preventDefault()
    if (validate()) {
      login(form)
    }
  }
  return (
    <div className='container-fluid'>
      <Row className='vh-100'>
        <Col
          className='h-100'
          span={10}
        >
          <Flex
            className='h-100 container-fluid'
            vertical
            justify='center'
            align='center'
          >
            <h3>Login into your account</h3>
            <form
              className='form w-100'
              onSubmit={onSubmit}
            >
              <Field
                {...register('username')}
                label='Email'
                placeholder='Email'
              ></Field>
              <Field
                {...register('password')}
                type='password'
                label='Password'
                placeholder='password'
              ></Field>
              <ButtonLogin native>Login now</ButtonLogin>
              <Link to='/resetpassword'>Forgot password</Link>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  width: '100%',
                  marginBottom: '10px',
                }}
              >
                <div
                  style={{
                    flex: 1,

                    backgroundColor: '#C2C2C2',
                    height: 2,
                  }}
                />

                <p style={{ margin: '0 10px' }}>Or</p>

                <div
                  style={{ flex: 1, backgroundColor: '#C2C2C2', height: 2 }}
                />
              </div>
            </form>
            <Link
              className='w-100'
              to='/register'
            >
              <ButtonLogin>Signup now</ButtonLogin>
            </Link>
          </Flex>
        </Col>
        <Col
          span={14}
          style={{ backgroundColor: '#F1F3F6' }}
          className='d-flex justify-content-center align-items-center'
        >
          <img
            style={{ width: '80%' }}
            src={logo}
          />
        </Col>
      </Row>
    </div>
  )
}
