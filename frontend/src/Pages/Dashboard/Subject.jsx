import React, {  useState } from 'react';

import "./Subject.css"
const SubjectsList = [

   {
      id: 0,
      name: "History"
   },
   {
      id: 0,
      name: "Math"
   },
   {
      id: 0,
      name: "English"
   },
];
const Subject = () => {
   const [showAddForm, setShowAddForm] = useState(false);
   const [formData, setFormData] = useState({
      boardId: '',
      classId: '',
      subjectName: '',
      description: ''
   });

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevState) => ({ ...prevState, [name]: value }))
   }
   const handleSubmit = async (e) => {
      e.preventDefault();
      if (formData !== null) {
         const payload = {
            "name": formData.clasName,
         }


      }
   }
   //  const SubjectsList = useSelector((state) => state.subjectListReducer.subjects)
   return (
      <>
         <div className="grid-one-item grid-common grid-ci container">
            <div className="quiz_topbar">
               <h3>All Subjects  List</h3>
               <button type="submit" onClick={() => setShowAddForm((prev) => !prev)}>
                  New Subject <span class="material-symbols-outlined">add</span>
               </button>
               <div className={showAddForm ? "showClassForm" : "classForm"}>
                  <h3>Add new Subject</h3>
                  <form >
                   
                     <input type="text" placeholder='Subject Name' name='subjectName' value={formData.subjectName} onChange={handleChange} />
                     <textarea placeholder='subject Description' id="" cols="10" rows="5" name='description' value={formData.description} onChange={handleChange}></textarea>
                     <button type='submit' onClick={handleSubmit}>Save</button>
                  </form>
               </div>
            </div>

            <div className="list-data-wrapper">
               <table>
                  <thead>
                     <tr>
                        <th>S.No:</th>
                        <th>Subject</th>

                     </tr>
                  </thead>
                  <tbody>
                     {(SubjectsList.length > 0) ? SubjectsList.map((val) => {
                        return (
                           <>
                              <tr key={val._id}>
                                 <td>1</td>
                                 <td>{val.name}</td>

                              </tr>

                           </>
                        );

                     }) : ""}
                  </tbody>
               </table>
            </div>
         </div>
      </>
   )
}

export default Subject