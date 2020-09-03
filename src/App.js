import React, { useState, useEffect } from 'react'
import Project from './components/Project'
import mockData from './db.json'
import TagCluster from './components/TagCluster'
import { sortByTags } from './utils'

export default function App() {
  const [selectedTags, setSelectedTags] = useState([])
  const [projects, setProjects] = useState([])
  useEffect(() => {
    setProjects(sortByTags(selectedTags, mockData.projects))
  }, [selectedTags])

  return (
    <>
      <TagCluster tags={mockData.tags} onTagClick={onTagClick} />
      <p>There are {projects.length} Projects fitting your search</p>
      {projects.map((project, index) => (
        <Project key={index} data={project} />
      ))}
    </>
  )
  function onTagClick(tag) {
    let set = new Set(selectedTags)
    set = set.delete(tag) ? set : set.add(tag)
    setSelectedTags([...set])
  }
}
