import React,{useContext} from "react";
import Navbar from "../components/Navbar";
import "../Styles/Results.css";
import {Context} from '../Context'


function Results() {
  const {data}=useContext(Context)




  return (
    <>
      <div className="container" >
        <Navbar />
        
        <div className="results_container" >
          <div className="execution_time">
          <p>About {data.queries.nextPage[0].totalResults} results ({data.searchInformation.formattedSearchTime} seconds)</p>
          </div>
      
            
          <div className="links-container">
            {data.items.map(item=><div className="links">
              <p className="display_link">
             {  item.displayLink }
              </p>
              <a target='_blank' href={item.link} className="link_title">{item.title}</a>
              <p className="link_info">
                 {item.snippet}
              </p>
            </div>)}
       
          </div>
       
        </div>
      </div>
    </>
  );
}

export default Results;
