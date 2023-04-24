import {render, screen} from "@testing-library/react";
import HomeRoute from "../routes/HomeRoute";
import {MemoryRouter} from "react-router-dom";
import {createServer} from "./mock_server/server";


// const handlers = [
//     rest.get('api/repositories', (req, res, context) => {
//         const query = req.url.searchParams.get('q');
//         const language = query.split("language:")[1];
//         return res(
//             context.json({
//                 items: [
//                     {id: 1, full_name: `${language}/test1`},
//                     {id: 2, full_name: `${language}/test2`},
//                     {id: 3, full_name: `${language}/test3`},
//                     {id: 4, full_name: `${language}/test4`},
//                     {id: 5, full_name: `${language}/test5`},
//                     {id: 6, full_name: `${language}/test6`},
//                     {id: 7, full_name: `${language}/test7`},
//                     {id: 8, full_name: `${language}/test8`},
//                     {id: 9, full_name: `${language}/test9`},
//                     {id: 10, full_name: `${language}/test1`},
//                 ]
//             })
//         )
//     })
// ];
//
// const server = setupServer(...handlers);
//
// beforeAll(() => {
//     server.listen();
// });
//
// afterEach(() => {
//     server.resetHandlers();
// });
//
// afterAll(() => {
//     server.close();
// });

createServer([
    {
        path: 'api/repositories',
        res: (req) => {
            const query = req.url.searchParams.get('q');
            const language = query.split("language:")[1];
            return {
                items: [
                    {id: 1, full_name: `${language}/test1`},
                    {id: 2, full_name: `${language}/test2`},
                    {id: 3, full_name: `${language}/test3`},
                    {id: 4, full_name: `${language}/test4`},
                    {id: 5, full_name: `${language}/test5`},
                    {id: 6, full_name: `${language}/test6`},
                    {id: 7, full_name: `${language}/test7`},
                    {id: 8, full_name: `${language}/test8`},
                    {id: 9, full_name: `${language}/test9`},
                    {id: 10, full_name: `${language}/test1`},
                ]
            }
        }
    }
])

test('renders ten links for each tables ', async () => {
    render(
        <MemoryRouter>
            <HomeRoute/>
        </MemoryRouter>
    );

    // await pause();
    // Loop over each language
    const languages = [
        "javascript",
        "typescript",
        'rust',
        'go',
        'python',
        'java'
    ];
    for (let language of languages) {
        // For each language, make sure we see two links
        const links = await screen.findAllByRole('link',
            {name: new RegExp(`${language}/`)})

        //Assert that the links have the appropriate full_name
        expect(links).toHaveLength(10);
        expect(links[0]).toHaveTextContent(`${language}/test1`);
        expect(links[0]).toHaveAttribute('href', `/repositories/${language}/test1`);
        expect(links[1]).toHaveTextContent(`${language}/test2`);
        expect(links[1]).toHaveAttribute('href', `/repositories/${language}/test2`);
        expect(links[2]).toHaveTextContent(`${language}/test3`);
        expect(links[2]).toHaveAttribute('href', `/repositories/${language}/test3`);
    }
});
