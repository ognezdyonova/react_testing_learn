import {act, render} from "@testing-library/react";
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
}

const pause = () => new Promise(resolve => setTimeout(resolve, 100));

test('[module mock] shows a link to the github homepage for this repo ', async () => {
    renderRepositoryListItemComponent();
    await act(async () => {
        await pause();
    })
})

