import React, { useState } from "react";
import styled from "styled-components";
import Head from "next/head";
import Router from "next/router";

import categories from "../data/categories.json";
import projects from "../data/project_list.json";
import Gallery from "../components/gallery";

import "./studio.css";
import Header from "../components/header";

const CategoryButton = styled.button`
  color: ${(props) => props.active && "#494949"};
`;

function Studio() {
  const [selectedTag, setSelectedTag] = useState("");

  function handleTagClick(id) {
    setSelectedTag(id);
  }

  function handleAllClick() {
    setSelectedTag("");
  }

  function handleProjectClick(id) {
    Router.push(`/project/${id}`);
  }

  return (
    <>
      <Head>
        <title>{`Claudia Aran | Studio`}</title>
      </Head>
      <Header />
      <div className="Studio">
        <div className="Tags">
          <CategoryButton
            className="Tags-button"
            onClick={handleAllClick}
            active={selectedTag === ""}
          >
            all
          </CategoryButton>
          {categories.map((category) => (
            <CategoryButton
              key={category.id}
              className="Tags-button"
              onClick={() => handleTagClick(category.id)}
              active={category.id === selectedTag}
            >
              {category.title}
            </CategoryButton>
          ))}
        </div>

        <Gallery
          category={selectedTag}
          projects={projects}
          onProjectClick={handleProjectClick}
        />
      </div>
    </>
  );
}

export default Studio;
