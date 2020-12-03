import React, { useState } from "react";
import axios from "axios";

import DrugSearchForm from "../components/DrugSearchForm";
import Loader from "../components/Loader";
import DrugList from "../components/DrugList";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState({ items: [] });
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const API_BASE_URL = `https://www.googleapis.com/books/v1/volumes`;

  const fetchBooks = async () => {
    setLoading(true);
    setError(false);
    try {
      const result = await axios.get(`${API_BASE_URL}?q=${searchTerm}`);
      setBooks(result.data);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  const onInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    fetchBooks();
  };

  return (
    <>
      <DrugSearchForm
        onSubmitHandler={onSubmitHandler}
        onInputChange={onInputChange}
        searchTerm={searchTerm}
        error={error}
      />
      <Loader searchTerm={searchTerm} loading={loading} />
      <DrugList books={books} />
    </>
  );
};

export default SearchPage;
