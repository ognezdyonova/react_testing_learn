import {render, screen, within} from "@testing-library/react";
import UserList from "../components/UserList";

function renderComponents() {
    const users = [
        {name: 'testname1', email: 'test1@gmail.com'},
        {name: 'testname2', email: 'test2@gmail.com'},
        {name: 'testname3', email: 'test3@gmail.com'},
        {name: 'testname4', email: 'test4@gmail.com'},
        {name: 'testname5', email: 'test5@gmail.com'},
        {name: 'testname6', email: 'test6@gmail.com'},
        {name: 'testname7', email: 'test7@gmail.com'},
        {name: 'testname8', email: 'test8@gmail.com'},
        {name: 'testname9', email: 'test9@gmail.com'},
    ]
    const {container} = render(<UserList users={users}/>);

    return {users, container};
}

test('(a)Render the correct number of rows', async () => {
    const {users} = renderComponents()
    // screen.logTestingPlaygroundURL();
    const rows = within(screen.getByTestId('users')).getAllByRole('row');
    expect(rows).toHaveLength(users.length)

});

test('(b)Render the correct number of rows', async () => {
    const {users} = renderComponents()
    const rows = screen.getAllByTestId('user');
    expect(rows).toHaveLength(users.length)
});

test('(b->query selector->not recommender)Render the correct number of rows', async () => {
    const {users, container} = renderComponents();
    const rows = container.querySelectorAll('table tbody tr');
    expect(rows).toHaveLength(users.length)
});

test('Render the email and name of each user', async () => {
    const {users} = renderComponents()
    // screen.logTestingPlaygroundURL();

    for (let user of users) {
        const name = screen.getByRole('cell', {name: user.name});
        const email = screen.getByRole('cell', {name: user.email});

        expect(name).toBeInTheDocument();
        expect(email).toBeInTheDocument();
    }
});
