import {render, screen, waitFor} from "@testing-library/react";
import user from '@testing-library/user-event';
import App from '../App';

test('shows 6 products by default', async () => {
    render(<App/>);

    const heading = await screen.findAllByRole('heading');

    expect(heading).toHaveLength(6);
})

test('shows more 6 products after clicking by button', async () => {
    render(<App/>);

    const button = await screen.findByRole('button', {
        name: /load more/i
    });

    expect(button).toBeVisible();

    await user.click(button);

    await waitFor( async () => {

        const heading = await screen.findAllByRole('heading');

        expect(heading).toHaveLength(6);
    })
})

