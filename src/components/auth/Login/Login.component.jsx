import './Login.component.scss'
import React, { useCallback, useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import { NavLink } from 'react-router-dom'
import ButtonShare from '../../../shared/Button/Button.shared'
import { useDispatch } from 'react-redux'
import { getLoginForm } from '../../../core/redux/reducers/LoginReducer/LoginReducer.core'
import IconButton from '@mui/material/IconButton';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
const LoginComponent = ({ loginCheck, forgetPassword }) => {
    const dispatch = useDispatch()
    const [showPassword, setShowPassword] = useState(false)
   

    const [loginForm, setLoginForm] = useState({ email: '', password: '' })
    const hideIcon = loginForm.password.length > 0
    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        setLoginForm(loginForm => ({ ...loginForm, [name]: value }))
    }, [setLoginForm])

    const loginFormData = useCallback(
        () => {
            const loginForms = {
                email: loginForm.email,
                password: loginForm.password,
            }
            if (loginForms !== '') {
                dispatch(getLoginForm(loginForms))
            }
        },
        [dispatch, loginForm],
    )
    useEffect(() => {
        loginFormData()
    }, [loginFormData])
    return (
      <div className="LT-login-holder">
        <div className="imLT-main-logo uLT-img-contain one img"> </div>
        <Row className="mb-4 gap-3 two row">
          <Form.Group>
            <Form.Label className="fLT-Regular-sB cLT-support2-text mb-3 ">
              الجوال أو البريد الإلكتروني{" "}
            </Form.Label>
            <Form.Control
              autoComplete="off"
              onChange={handleChange}
              name="email"
              className="uLT-bd-f-platinum-sA inpBG inp"
              type="text"
              value={loginForm.email}
              placeholder="الجوال أو البريد الإلكتروني  "
            />
          </Form.Group>
          <Form.Group as={Col} className={"position-relative"}>
            <Form.Label className="fLT-Regular-sB cLT-support2-text mb-3">
              كلمة المرور
            </Form.Label>
            <Form.Control
              autoComplete="off"
              minLength={8}
              onChange={handleChange}
              name="password"
              className="uLT-bd-f-platinum-sA inpBG inp"
              value={loginForm.password}
              type={showPassword ? "text" : "password"}
              placeholder="كلمة المرور"
            />
            {hideIcon && (
              <IconButton
                style={{ position: "absolute", bottom: "8px", left: "18px" }}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <VisibilityOffOutlinedIcon />
                ) : (
                  <VisibilityOutlinedIcon />
                )}{" "}
              </IconButton>
            )}
          </Form.Group>
        </Row>
        <div className="three">
          <ButtonShare
            type={loginForm?.password?.length >= 8 ? "" : "disable"}
            innerText={"دخول"}
            btnClasses={"cLT-secondary-bg btn"}
            textClasses={"py-2 cLT-white-text fLT-Regular-sB"}
            loading={loginCheck}
          />
          <NavLink
            to={"/forget-password"}
            onClick={forgetPassword}
            className="uLT-list-style cLT-secondary-text fLT-Regular-sA d-flex align-items-center justify-content-center mt-3"
          >
            نسيت كلمة المرور؟
          </NavLink>
        </div>
      </div>
    );
}

export default LoginComponent
