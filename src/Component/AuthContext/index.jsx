import { useState } from 'react'
import { useContext } from 'react'
import { createContext } from 'react'
import { authenticationservice } from '../../services/authentication.service'
import { message } from 'antd'
import { setToken, getUser, setUser, getToken } from '../../utils/token'
import { userservice } from '../../services/user.service'
const AuthContext = createContext('AuthContext')
export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const [user, _setUser] = useState(() => {
    if (getUser) {
      getUser
    } else {
      return null
    }
  })
  const login = async (data) => {
    try {
      const res = await authenticationservice.login(data)
      if (res.data) {
        setToken(res.data)
        const user = await userservice.getinfo(getToken().data)
        console.log(user)
        setUser(user.data)
        _setUser(user.data)
        console.log(res)
        message.success('Đăng nhập thành công', [3])
      }
    } catch (err) {
      console.error(err)
      message.error('Tên đăng nhập hoặc mật khẩu không đúng', [3])
    }
    // setUser({ name: 'Dang Thuyen Vuong' })
  }
  const logout = () => {
    setUser(null)
  }
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
