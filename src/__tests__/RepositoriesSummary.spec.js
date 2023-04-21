import {render, screen} from "@testing-library/react";
import RepositoriesSummary from "../components/repositories/RepositoriesSummary";

test('Check displays the primary language of the repository ', () => {
    const repository = {
        stargazers_count: 11,
        open_issues: 100,
        forks: 300,
        language: 'TypeScript'
    }
    render(<RepositoriesSummary repository={repository}/>)
    const language = screen.getByText('TypeScript');
    expect(language).toBeInTheDocument();
})

test('[a]Displays  information about repository', () => {
    const repository = {
        stargazers_count: 11,
        open_issues: 100,
        forks: 300,
        language: 'TypeScript'
    }
    render(<RepositoriesSummary repository={repository}/>)
    const stars = screen.getByText(11);
    const language = screen.getByText('TypeScript');

    expect(stars).toBeInTheDocument();
    expect(language).toBeInTheDocument();
})

test('[b]Displays  information about repository', () => {
    const repository = {
        stargazers_count: 11,
        open_issues: 100,
        forks: 300,
        language: 'TypeScript'
    }
    render(<RepositoriesSummary repository={repository}/>)
    for (let key in repository) {
        const value = repository[key];
        const element = screen.getByText(new RegExp(value));
        expect(element).toBeInTheDocument();
    }
})