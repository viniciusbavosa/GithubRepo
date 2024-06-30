import React, { useState, useCallback } from "react";
import { FaBars, FaGithub, FaPlus, FaSpinner, FaTrash } from 'react-icons/fa'
import * as S from "./styles";
import { Repository } from "./types";
import fetchDataAsync from "../../services/api";
import { Link } from "react-router-dom";

export function Home() {
  const [userInput, setUserInput] = useState('');
  const [userRepos, setUserRepos] = useState<Repository[]>(() => {
    const repoStorage = localStorage.getItem('repositories');
    return repoStorage ? JSON.parse(repoStorage) : [];
  });
  const [loading, setLoading] = useState(false); // This state implement button behavior while fetching data
  const [error, setError] = useState<boolean | null>(null);

  localStorage.setItem('repositories', JSON.stringify(userRepos));

  const handleSubmit = useCallback((event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    fetchDataAsync(setLoading, setUserRepos, setUserInput, setError, userRepos, userInput);
  }, [userInput, userRepos]);

  const handleDelete = useCallback((repoName: string) => {
    const newRepo = userRepos.filter((r) => r.name !== repoName);
    /* 
      Filter() function returns a new array if 
      the condition we passed matches
    */
    setUserRepos(newRepo)
  }, [userRepos]) 

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setUserInput(event.target.value);
    setError(null);
  };
  
  return (
    <S.Container>
      <h1>
        <FaGithub size={25}/>
        Meus Repositórios
      </h1>

      <S.Form onSubmit={handleSubmit} $error={error}>
        <input 
          type="text" 
          placeholder="Adicionar repositórios" 
          value={userInput}
          onChange={handleInputChange}
          />

        <S.SubmitButton type="submit" disabled={loading ? true : false}>
          {loading ? <FaSpinner color="white" size={14} /> : <FaPlus color="white" size={14} />}
        </S.SubmitButton>
      </S.Form>

      <S.ReposList>
        {userRepos.map((repo) => (
          <li key={repo.name}>
            <span>
              <S.DeleteRepo onClick={() => handleDelete(repo.name)} type="button">
                <FaTrash size={16} />
              </S.DeleteRepo>
              {repo.name}
            </span>
            <Link to={`/repository/${encodeURIComponent(repo.name)}`}><FaBars size={20}/></Link>
          </li>
        ))}
      </S.ReposList>

    </S.Container>
  )
}