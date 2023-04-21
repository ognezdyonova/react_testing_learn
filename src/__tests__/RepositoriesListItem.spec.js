import {render, screen} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import RepositoriesListItem from "../components/repositories/RepositoriesListItem";

function renderRepositoryListItemComponent() {
    const repository = {
        full_name: 'jakevdp/PythonDataScienceHandbook',
        language: "Jupyter Notebook",
        description: 'Python Data Science Handbook: full text in Jupyter Notebooks',
        owner: {login: 'jakevdp'},
        name: 'PythonDataScienceHandbook',
        html_url: 'https://github.com/jakevdp/PythonDataScienceHandbook'
    }
    render(<MemoryRouter>
            <RepositoriesListItem repository={repository}/>
        </MemoryRouter>
    )

    return {repository};
}

test('shows a link to the github homepage for this repo ', async () => {
    const {repository} = renderRepositoryListItemComponent();

    await screen.findByRole('img', {name: "Jupyter Notebook"})

    const link = screen.getByRole('link', {
        name: /github repository/i,
    });
    expect(link).toHaveAttribute('href', repository.html_url);
})


test('shows a fileicon with the appropriate icon', async () => {
    renderRepositoryListItemComponent();
    const icon = await screen.findByRole('img', {name: "Jupyter Notebook"});
    expect(icon).toHaveClass("jupyter-icon")
})

test('shows a link to the code editor page', async () => {
    const {repository} = renderRepositoryListItemComponent();
    await screen.findByRole('img', {name: "Jupyter Notebook"});

    const link = await screen.findByRole('link', {
        name: new RegExp(repository.owner.login)
    });

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', `/repositories/${repository.full_name}`);
})