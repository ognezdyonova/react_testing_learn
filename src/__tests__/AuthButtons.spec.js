import {render, screen} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import {createServer} from "./mock_server/server";
import AuthButtons from "../components/auth/AuthButtons";
import {SWRConfig} from "swr";

async function renderComponent() {
    render(
        <SWRConfig value={{provider: () => new Map()}}>  /*Remove all caching for components*/
            <MemoryRouter>
                <AuthButtons/>
            </MemoryRouter>)
        </SWRConfig>
    );
    await screen.findAllByRole('link');
}

describe('When user is not auth', () => {
    createServer([
        {
            path: 'api/user',
            res: () => {
                return {user: null}
            }
        }
    ])

    test('sign in and sign up are visible', async () => {
        await renderComponent()
        screen.debug()
        const signin = await screen.findByRole('link', {name: new RegExp('Sign In')});
        expect(signin).toBeInTheDocument();
        expect(signin).toHaveAttribute('href', '/signin');
        const signup = await screen.findByRole('link', {name: new RegExp('Sign Up')});
        expect(signup).toBeInTheDocument();
        expect(signup).toHaveAttribute('href', '/signup');
    })

    test('sign out is not visible', async () => {
        await renderComponent()
        const signout = await screen.queryByRole('link', {name: /sign out/i});
        expect(signout).not.toBeInTheDocument();
    })
});

describe('When user is auth', () => {
    createServer([
        {
            path: 'api/user',
            res: () => {
                return {
                    user: {id: 1, email: 'test@gmail.com'}
                }
            }
        }
    ])

    test('sign in and sign up are not visible', async () => {
        await renderComponent()
        screen.debug();
        const signin = await screen.queryByRole('link', {name: new RegExp('Sign In')});
        expect(signin).not.toBeInTheDocument();

        const signup = await screen.queryByRole('link', {name: new RegExp('Sign Up')});
        expect(signup).not.toBeInTheDocument();
    })

    test('sign out is visible', async () => {
        await renderComponent();
        const signOut = await screen.findByRole('link', {name: /sign out/i});
        expect(signOut).toBeInTheDocument();
        expect(signOut).toHaveAttribute('href', '/signout');
    })
});