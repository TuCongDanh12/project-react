import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Row, Flex, message } from 'antd'
import Field from '../../Component/Field'
import ButtonLogin from '../../Component/ButtonLogin'
import logo from '../../assets/images/login.png'
import { useForm } from '../../hooks/useForm'
import { ERROR_MESSAGE } from '../../constants/error'
import { userservice } from '../../services/user.service'
export default function ResetPassword() {
  const { validate, register, form } = useForm({
    username: [
      { required: true },
      {
        regexp: 'username',
        message: 'Vui long nhap dung username',
      },
    ],
  })
  const onSubmit = async (ev) => {
    try {
      ev.preventDefault()
      console.log(form)
      if (validate()) {
        const res = await userservice.resetpassword(form)
        console.log(res)
        message.success(res.data.message, [4])
      } else {
        console.log('validate error')
      }
    } catch (err) {
      message.error(ERROR_MESSAGE.REGISTER_FAIL, err)
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
            <h3>Forgot Password</h3>
            <form
              className='form w-100'
              onSubmit={onSubmit}
            >
              <Field
                {...register('username')}
                label='Email'
                placeholder='email'
              ></Field>

              <ButtonLogin native>Submit</ButtonLogin>
              {/* <Link to='/register'>Forgot password</Link> */}
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
              to='/signin'
            >
              <ButtonLogin>Login now</ButtonLogin>
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
