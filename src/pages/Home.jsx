import React, {useEffect, useState} from "react"
import Navbar from "../components/Navbar/Navbar"
import Banner from "../components/Banner/Banner"
import ListTwibbons from "../components/ListTwibbons/ListTwibbons"
import Footer from "../components/Footer/Footer"
import { fetchCampaigns } from "../api"
import ReactPaginate from "react-paginate"

const Home = () => {
  const [listCampaigns, setListCampaigns] = useState([])
  const [page, setPage] = useState(0)
  const [limit, setLimit] = useState(12)
  const [pages, setPages] = useState(0)
  const [rows, setRows] = useState(0)

  useEffect(() => {
    getAllCampaigns(page, limit)
  }, [page, limit])
  
  const getAllCampaigns = async (page, limit) => {
    const {data} = await fetchCampaigns(page, limit)
    setListCampaigns(data.campaigns)
    setPage(data.page)
    setLimit(data.limit)
    setPages(data.totalPage)
    setRows(data.totalRows)
  }

  const changePage = ({ selected }) => {
    setPage(selected)
  }

  return (
    <>
      <Navbar />
      <Banner />
      <ListTwibbons data={listCampaigns} />
      <nav
        className="pagination is-centered"
        key={rows}
        role="navigation"
        aria-label="Page navigation example"
      >
        <ReactPaginate 
          previousLabel={"< Prev"}
          nextLabel={"Next >"}
          pageCount={Math.min(10, pages)}
          onPageChange={changePage}
          containerClassName={"pagination-list"}
          pageLinkClassName={"pagination-link"}
          previousLinkClassName={"pagination-previous"}
          nextLinkClassName={"pagination-next"}
          activeLinkClassName={"pagination-link is-current"}
          disabledLinkClassName={"pagination-link is-disabled"}
        />
      </nav>
      <Footer />
    </>
  )
}

export default Home