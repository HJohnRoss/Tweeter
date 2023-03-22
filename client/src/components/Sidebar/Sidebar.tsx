import React from "react"
import Search from "./Search"
import Trending from "./Trending"
import Suggestions from "./Suggestions"

const Sidebar = () => {
  return (
    <section id="sidebar">
      <Search />

      <Trending />

      <Suggestions />
    </section>
  )
}

export default Sidebar