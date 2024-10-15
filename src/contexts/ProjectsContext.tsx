import React, { createContext } from 'react';
import { type ProjectInfo } from '../data/projectsData';
import { type ProviderProps } from '../types/Provider.props';

interface Projects {
  projects: ProjectInfo[];
}

export const ProjectsContext = createContext<Projects>({
  projects: [],
});

export const ProjectsProvider = ({ children }: ProviderProps): JSX.Element => {
  return (
    <ProjectsContext.Provider
      value={{
        projects: [],
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};
