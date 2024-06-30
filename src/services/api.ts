import React from "react";
import { Repository } from "../pages/Home/types";
import { RepositoryIssues, RepositoryTypes } from "../pages/Repository/types";
import { Filter } from "../pages/Repository/Filters/types";

export default async function fetchDataAsync(
  setLoading: React.Dispatch<React.SetStateAction<boolean>>, 
  setUserRepos: React.Dispatch<React.SetStateAction<Repository[]>>, 
  setUserInput: React.Dispatch<React.SetStateAction<string>>,
  setError: React.Dispatch<React.SetStateAction<boolean | null>>, 
  userRepos: Repository[],
  userInput: string
) {
  const apiUrl = `https://api.github.com/repos/${userInput}`;
  setLoading(true);
  setError(null);
  
  try {
    if (!userInput)
      throw new Error('Repository s name is missing');

    const response = await fetch(apiUrl, {
      headers: {
        'User-Agent': 'viniciusbavosa'
      }
    });

    const isDuplicated = userRepos.find((r) => r.name === userInput); 
    /* 
      Find() function returns a value if 
      the condition we passed matches
    */
    if (isDuplicated)
      throw new Error('Repository has already been added');

    const data = await response.json();

    if (data.status === '404')
      throw new Error('Repository does not exist');

    const repoData: Repository = {
      name: data.full_name,
    };

    setUserRepos([...userRepos, repoData]);
    setUserInput('');
  } catch (err) {
    setError(true);
    console.log(err);
  } finally {
    setLoading(false);
  };
}

export async function fetchRepositoryAsync(
  repoName: string | undefined, 
  setRepository: React.Dispatch<React.SetStateAction<RepositoryTypes>>,
  setIssues: React.Dispatch<React.SetStateAction<RepositoryIssues[]>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  page: number,
  filter: Filter[]) {
  
  const params = new URLSearchParams({
    page: String(page),
    per_page: String(5),
    state: String(filter.find(el => el.active)?.state)
  });
  const repoUrl = `https://api.github.com/repos/${repoName}`;
  const repoIssuesUrl = `https://api.github.com/repos/${repoName}/issues?${params.toString()}`;

  try {
    const [repositoryJSON, issuesJSON] = await Promise.all([
      fetch(repoUrl, {
        headers: {
          'User-Agent': 'viniciusbavosa'
        }
      }),
      fetch(repoIssuesUrl, {
        headers: {
          'User-Agent': 'viniciusbavosa'
        }
      })
    ]);

    const repositoryData = await repositoryJSON.json();
    const issuesData = await issuesJSON.json();
    setRepository(repositoryData);
    setIssues(issuesData);
  } catch (err) {
    console.log(err);
  } finally {
    setLoading(false)
  }
}