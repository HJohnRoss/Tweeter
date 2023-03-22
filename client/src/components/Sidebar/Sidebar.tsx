import React from "react"
import Search from "./Search"
import Trending from "./Trending"
import Suggestions from "./Suggestions"

const Sidebar = () => {
  return (
    <section id="sidebar" className="sidebar">
      <Search />

      <div className="sidebar__container">
        <Trending />

        <Suggestions />
      </div>
    </section>
  )
}

export default Sidebar