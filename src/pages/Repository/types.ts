export interface RepositoryTypes {
  name?: string;
  description?: string;
  owner?: {
    avatar_url: string;
  }
}

export interface RepositoryIssues {
  id: number;
  html_url: string;
  title: string;
  user: {
    avatar_url: string;
    login: string;
  }
}