export interface FiltersProps {
  filterState: React.Dispatch<React.SetStateAction<Filter[]>>
}

export interface Filter {
  state: string;
  label: string;
  active: boolean;
}

export interface Button {
  active: number;
}