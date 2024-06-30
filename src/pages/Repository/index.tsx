import { useParams } from "react-router-dom";
import * as S from './styles'
import { useEffect, useState } from "react";
import { fetchRepositoryAsync } from "../../services/api";
import { RepositoryIssues, RepositoryTypes } from "./types";
import { FaArrowLeft } from "react-icons/fa";
import { Filters } from "./Filters";
import { Filter } from "./Filters/types";


export function Repository() {
  let { repositorio } = useParams();
  const [repository, setRepository] = useState<RepositoryTypes>({});
  const [issues, setIssues] = useState<RepositoryIssues[]>([]);
  const [filter, setFilter] = useState<Filter[]>([{state: 'all', label: 'Todas', active: true}]);
  const [page, setPage] = useState(1); // Stores the current page
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRepositoryAsync(repositorio, setRepository, setIssues, setLoading, page, filter);

  }, [repositorio, page, filter]); 


  function handlePage(action: string) {
    setPage(action === 'back' ? page - 1 : page + 1);
  }
  if (loading) {
    return (
      <S.Loading>
        <h1>Carregando...</h1>
      </S.Loading>
    )
  }
  return (
    <>
      <S.Container>
        <S.ReturnButton to={'/'}>
          <FaArrowLeft color="#000" size={35} />
        </S.ReturnButton>
        <S.Owner>
          <img 
            src={repository.owner?.avatar_url} 
            alt="Repository Avatar" />
          <h1>
            {repository.name}
          </h1>
          <p>
            {repository.description}
          </p>
        </S.Owner>
        
        <Filters filterState={setFilter}/>
        <S.Issues>
          {issues.map((issue) => (
            <li key={String(issue.id)}>
              <img src={issue.user.avatar_url} alt="User Avatar" />

              <div>
                <strong>
                  <a href={issue.html_url}>{issue.title}</a>
                </strong>
                <p>
                  {issue.user.login}
                </p>
              </div>
            </li>
          ))}
        </S.Issues>

        <S.Pagination>
          <button type="button" disabled={page === 1} onClick={() => handlePage('back')}>Voltar</button>
          <button type="button" onClick={() => handlePage('next')}>Proxima</button>
        </S.Pagination>
      </S.Container>
    </>
  )
}