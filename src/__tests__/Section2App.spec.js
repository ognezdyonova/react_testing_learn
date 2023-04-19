import {render, screen, waitFor, within} from "@testing-library/react";
import App from "../App";
import user from "@testing-library/user-event";


async function addUser() {
    const nameInput = screen.getByTestId('name');
    const emailInput = screen.getByTestId('email');
    const submit = screen.getByTestId('submitButton');

    // Simulate typing in a name
    await user.click(nameInput);
    await user.keyboard("jane");

    // Simulate typing in an email
    await user.click(emailInput);
    await user.keyboard("jane@jane.com");

    //submit form
    await user.click(submit);
}

test('can receive a new user and show it on a list', async () => {
    render(<App/>);
    await addUser();

    await waitFor(async () => {
        const rows = within(screen.getByTestId('users')).getAllByRole('row');
        expect(rows).toHaveLength(1);

        const name = screen.getByRole('cell', {name: 'jane'});
        const email = screen.getByRole('cell', {name: 'jane@jane.com'});

        expect(name).toBeInTheDocument();
        expect(email).toBeInTheDocument();
    })

    await addUser();
    await waitFor(async () => {
        const rows = within(screen.getByTestId('users')).getAllByRole('row');
        expect(rows).toHaveLength(2);
    })
});
