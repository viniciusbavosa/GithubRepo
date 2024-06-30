import { useState } from 'react';
import * as S from './styles';
import { Filter, FiltersProps } from './types';

export function Filters({filterState}: FiltersProps) {
  const [filterIndex, setFilterIndex] = useState(0);
  const buttonLabels: Filter[] = [
    {
      state: 'all',
      label: 'Todas',
      active: true
    }, 
    {
      state: 'open',
      label: 'Abertas',
      active: true
    }, 
    {
      state: 'closed',
      label: 'Fechadas',
      active: true
    }];

  function handleFilter(state: Filter, index: number) {
    setFilterIndex(index);
    filterState([state]);
  }

  return (
    <>
      <S.Container>
        {buttonLabels.map((filter, index) => (
          <S.Filters active={filterIndex} key={filter.label} onClick={() => handleFilter(filter, index)}>
            {filter.label}
          </S.Filters>
        ))}
      </S.Container>
    </>
  )
}