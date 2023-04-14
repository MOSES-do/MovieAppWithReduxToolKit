import { Home, MovieDetail, PageNotFound, Layout } from './components/index'
import { Routes, Route, Navigate } from "react-router-dom"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>

        {/* homepage */}
        <Route index element={<Home />} />

        <Route path="movie" >
          <Route path=":imdbID" element={<MovieDetail />} />
        </Route>

        {/* 404 component */}
        <Route exact path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  )
}

export default App
