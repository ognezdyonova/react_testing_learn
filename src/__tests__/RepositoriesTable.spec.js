import {render, screen} from "@testing-library/react";
import RepositoriesTable from "../components/repositories/RepositoriesTable";

jest.mock('../hooks/useRepositories', ()=>{
    return ()=>{
        return ()=>{
            data:[
                {name:"Javascript"},
                {name:"Typescript"},
                {name:"Rust"},
                {name:"Go"},
                {name:"Python"},
                {name:"Java"}
            ]
        }
    }
})