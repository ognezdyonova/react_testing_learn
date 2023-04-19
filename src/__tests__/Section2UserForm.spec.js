import {render, screen} from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "../components/UserForm";

test('it shows two inputs and button', async ()=>{
    render(<UserForm />);
    const nameInput = screen.getByTestId('name');
    const emailInput = screen.getByTestId('email');
    const submit = screen.getByTestId('submitButton');

    expect(nameInput).toBeVisible();
    expect(nameInput).toBeInTheDocument();

    expect(emailInput).toBeVisible();
    expect(emailInput).toBeInTheDocument();

    expect(submit).toBeVisible();
    expect(submit).toBeInTheDocument();

})

test('(a) it shows two inputs and button', async ()=>{
    //NOT BEST IMPLEMENTATION
    const listArg = [];
    const callBack= (...args)=>{
        listArg.push(args);
    }
    //
    render(<UserForm onUserAdd={callBack}/>);

    const [nameI, emailI] = screen.getAllByRole("textbox");
    const submit = screen.getByRole('button');
    // Simulate typing in a name
    await user.click(nameI);
    await user.keyboard("jane");

    // Simulate typing in an email
    await user.click(emailI);
    await user.keyboard("jane@jane.com");

    //submit button
    await user.click(submit);

    // assertions
    console.log(listArg)
    expect(listArg).toHaveLength(1);
    expect(listArg[0][0].name).toStrictEqual('jane');
    expect(listArg[0][0].email).toStrictEqual('jane@jane.com');
    expect(listArg[0][0]).toEqual({ name: 'jane', email: 'jane@jane.com' });
})

test('(b) it calls onUserAdd when the form is submitted', async ()=>{
    //NOT BEST IMPLEMENTATION
    const listArg = [];
    const callBack= (...args)=>{
        listArg.push(args);
    }
    //
    render(<UserForm onUserAdd={callBack}/>);

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

    // assertions
    console.log(listArg)
    expect(listArg).toHaveLength(1);
    expect(listArg[0][0].name).toStrictEqual('jane');
    expect(listArg[0][0].email).toStrictEqual('jane@jane.com');
    expect(listArg[0][0]).toEqual({ name: 'jane', email: 'jane@jane.com' });

})