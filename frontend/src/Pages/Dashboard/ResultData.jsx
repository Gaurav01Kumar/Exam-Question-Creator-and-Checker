import React from 'react'

import "./Result.css"
import resulData from '../../data/resultData';
import {CSVLink} from "react-csv"
const ResultData = () => {
  const headers=[
    {label:"Roll",key:'roll'},
    {label:"Division",key:'division'},
    {label:"class",key:'class'},
    {label:"subject",key:'subject'},
    {label:"pattern",key:'pattern'},
    {label:"totalMarks",key:'totalMarks'},
    {label:"percentage",key:'percentage'},
    {label:"percentile",key:'percentile'},
  ]
    return (
        <main className='container'>
            <div className="main-title">
                <h3>RESULT</h3>
            </div>
         
            <div className="result-list">
                <div className="company-list-title">

                    <h3> Recently Correction results lists</h3>

                    <div id="action-group">
                      <CSVLink data={resulData} headers={headers} filename='results.csv'>
                        <button className='download-btn'><ion-icon name="download-outline" />Download Excel file</button>
                        </CSVLink>
                        
                    </div>
                </div>
                <div className="result-grid">
                    {/* <div className="company-sidebar">
            <div className="category-item">
              <div className="heading">
                <h4>Company Type</h4>
                <ion-icon name="chevron-down-outline"></ion-icon>
              </div>

              <div className="category-main-item">
                {
                  companyCategory.map((item) => {
                    return (
                      <div className="category-item" key={item.id}>
                        <input type="checkbox" name="" id="" />
                        <p>{item.item}</p>
                      </div>
                    )
                  })
                }

              </div>
            </div>
            <div className="category-item">
              <div className="heading">
                <h4>Star Value</h4>
                <ion-icon name="chevron-down-outline"></ion-icon>
              </div>
              <div className="category-main-item">

                <div className="star-items">
                  <div className="item">
                    <div className="star">
                      <input type="checkbox" name="" id="" />
                      <ReactStars
                        count={5}
                        size={24}
                        color="yellow"
                        filledIcon={3}
                      />
                    </div>
                    <h4>5</h4>
                  </div>
                  <div className="item">
                    <div className="star">
                      <input type="checkbox" name="" id="" />
                      <ReactStars
                        count={4}
                        size={24}
                        color="yellow"
                        filledIcon={3}
                      />
                    </div>
                    <h4>4</h4>
                  </div>
                  <div className="item">
                    <div className="star">
                      <input type="checkbox" name="" id="" />
                      <ReactStars
                        count={3}
                        size={24}
                        color="yellow"
                        filledIcon={3}
                      />
                    </div>
                    <h4>3</h4>
                  </div>
                  <div className="item">
                    <div className="star">
                      <input type="checkbox" name="" id="" />
                      <ReactStars
                        count={2}
                        size={24}
                        color="yellow"
                        filledIcon={3}
                      />
                    </div>
                    <h4>2</h4>
                  </div>
                  <div className="item">
                    <div className="star">
                      <input type="checkbox" name="" id="" />
                      <ReactStars
                        count={1}
                        size={24}
                        color="yellow"
                        filledIcon={3}
                      />
                    </div>
                    <h4>1</h4>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
                    <div className="result-lists">
                        <div className="result-header">
                            <div className="header-col">
                                {/* <input type="checkbox" name="" id="" /> */}
                                <p>Roll No</p>
                            </div>
                            <div className="header-col">
                                <p>Division</p>
                            </div>
                            <div className="header-col">
                                <p>Class</p>
                            </div>
                            <div className="header-col">
                                <p>Subject</p>
                            </div>
                            <div className="header-col">
                                <p>Pattern</p>
                            </div>
                            <div className="header-col">
                                <p>Total Marks</p>
                            </div>
                            <div className="header-col">
                                <p>Percentage</p>
                            </div>
                            <div className="header-col">
                                <p>Percentile</p>
                            </div>
                        </div>
                        {
                            resulData.map((val)=>{
                                return(
                                    <div className="result-collections">
                                    <div className="header-col">
                                        {/* <input type="checkbox" name="" id="" /> */}
                                        <div className="comapny-details">
                                            <p>{val.roll}</p>
        
                                        </div>
                                    </div>
                                    <div className="header-col">
                                        <p>{val.division}</p>
                                    </div>
                                    <div className="header-col">
                                        <p>{val.class}</p>
                                    </div>
                                    <div className="header-col">
                                        <p>{val.subject}</p>
                                    </div>
                                    <div className="header-col">
                                        <p>{val.pattern}</p>
                                    </div>
                                    <div className="header-col">
                                        <p>{val.totalMarks}</p>
                                    </div>
                                    <div className="header-col">
                                        <p>{val.percentage}%</p>
                                    </div>
                                    <div className="header-col">
                                        <p>{val.percentile}</p>
                                    </div>
        
                                </div>
                                )
                            })
                        }
                      
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ResultData