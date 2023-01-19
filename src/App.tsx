import React, { useMemo, useState } from "react";
import { Header } from "./components/Header";
import { KommunPage } from "./components/KommunPage";
import './App.scss';
import { data } from "./api/data";
import { Actions } from "./components/Actions";
import { Person } from "./types/Person";

export const App = () => {
  const [query, setQuery] = useState('');
  const persons: Person[] = useMemo(() => {
    return data.filter((person) => (person.namn.toLowerCase().includes(query.toLowerCase())))
  }, [query, data]);

  return (
    <>
      <Header
        query={query}
        setQuery={setQuery}
      />

      <div className="app">
        <Actions />
        <KommunPage persons={persons} />
      </div>
    </>
  );
};
