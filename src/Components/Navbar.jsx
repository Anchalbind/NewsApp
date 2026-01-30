import React,{useEffect, useState} from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'

export default function Navbar (){
  let [languageName,setlanguageName] = useState("Hindi")
  let [search,setSearch] = useState("")
  let [q,setQ] = useState("All")
  let [language,setLanguage] = useState("hi")
  let [searchParams] = useSearchParams()

  let navigate = useNavigate()

  function postSearch(e){
    e.preventDefault()
    navigate(`/?q=${search}&language=${language}`)
    setSearch("")
  }

useEffect(()=>{
  (()=>{
    setQ(searchParams?.get("q")??"All")
    setLanguage(searchParams?.get("language")??"hi")

  })()
},[searchParams])

  return (
    <>
    <nav className="navbar navbar-expand-lg bg-info sticky-top">
  <div className="container-fluid">
    <Link className="navbar-brand text-light" to={`/?q=All&language=${language}`}>NewsApp</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link text-light active" aria-current="page" to={`/?q=All&language=${language}`}>All</Link>
        </li>
        <li className="nav-item"><Link className="nav-link text-light" to={`/?q=Politics&language=${language}`}>Politics</Link></li>
        <li className="nav-item"><Link className="nav-link text-light" to={`/?q=Education&language=${language}`}>Education</Link></li>
        <li className="nav-item"><Link className="nav-link text-light" to={`/?q=Crime&language=${language}`}>Crime</Link></li>
        <li className="nav-item"><Link className="nav-link text-light" to={`/?q=Entertainment&language=${language}`}>Entertainment</Link></li>
        <li className="nav-item"><Link className="nav-link text-light" to={`/?q=Science&language=${language}`}>Science</Link></li>
        <li className="nav-item"><Link className="nav-link text-light" to={`/?q=Technology&language=${language}`}>Technology</Link></li>
        <li className="nav-item"><Link className="nav-link text-light" to={`/?q=Economics&language=${language}`}>Economics</Link></li>
        <li className="nav-item dropdown">
          <Link className="nav-link text-light dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            others
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to={`/?q=Sports&language=${language}`}>Sports</Link></li>
            <li><Link className="dropdown-item" to={`/?q=Cricket&language=${language}`}>Cricket</Link></li>
            <li><Link className="dropdown-item" to={`/?q=Soccer&language=${language}`}>Soccer</Link></li>
            <li><Link className="dropdown-item" to={`/?q=World&language=${language}`}>World</Link></li>
            <li><Link className="dropdown-item" to={`/?q=India&language=${language}`}>India</Link></li>
            <li><Link className="dropdown-item" to={`/?q=Tour&language=${language}`}>Tour</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
        <Link className="nav-link text-light dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {languageName}
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to={`/?q=${q}&language=hi`} onClick={()=>(setlanguageName("Hindi"))}>Hindi</Link></li>
            <li><Link className="dropdown-item" to={`/?q=${q}&language=en`} onClick={()=>(setlanguageName("English"))}>English</Link></li>
            <li><Link className="dropdown-item" to={`/?q=${q}&language=es`} onClick={()=>(setlanguageName("Spanish"))}>Spanish</Link></li>
            <li><Link className="dropdown-item" to={`/?q=${q}&language=ja`} onClick={()=>(setlanguageName("Japenese"))}>Japanese</Link></li>
            <li><Link className="dropdown-item" to={`/?q=${q}&language=fr`} onClick={()=>(setlanguageName("French"))}>French</Link></li>
            <li><Link className="dropdown-item" to={`/?q=${q}&language=zh`} onClick={()=>(setlanguageName("Chinese"))}>Chinese</Link></li>
          </ul>
        </li>
      </ul>
      <form className="d-flex" role="search" onSubmit={postSearch}>
        <input className="form-control me-2" onChange={(e)=>setSearch(e.target.value)} value={search} type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-secondary" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}


