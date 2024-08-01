import { render, screen } from "@testing-library/react"
import Login from "./Login"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import appStore from "../utils/store/appStore"

it('should check login form on the screen',()=>{
    render(
        <Provider store={appStore}>
        <BrowserRouter>
            <Login />
        </BrowserRouter>
        </Provider>
    )
    expect(screen.getByTestId('Sign-in-form')).toBeInTheDocument
})