import React, { useState } from 'react';
import "./Subject.css"

const ClassList = () => {
    const [showAddForm, setShowAddForm] = useState(false);
    const [formData, setFormData] = useState({
        className: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData !== null) {
            const payload = {
                "name": formData.subjectName,
                "description": formData.description,
                "boardId": formData.boardId,
                "classId": formData.classId
            }

        }
    }

    return (
        <>
            <div className="grid-one-item grid-common grid-ci container">
                <div className="quiz_topbar">
                    <h3>All Classes  List</h3>
                    <button type="submit" onClick={() => setShowAddForm((prev) => !prev)}>
                        New Class <span class="material-symbols-outlined">add</span>
                    </button>
                    <div className={showAddForm ? "showClassForm" : "classForm"}>
                        <h3>Add new Class</h3>
                        <form >

                            <input type="text" placeholder='Class Name' name='className' value={formData.className} onChange={handleChange} />
                            <textarea placeholder='subject Description' id="" cols="10" rows="5" name='description' value={formData.description} onChange={handleChange}></textarea>
                            <button type='submit' onClick={handleSubmit}>Save</button>
                        </form>
                    </div>
                </div>

                <div className="list-data-wrapper">
                    <table>
                        <thead>
                            <tr>

                                <th>Class</th>

                            </tr>
                        </thead>
                        <tbody>
                            {/* {(Classes.length > 0) ? Classes.map((val) => {
                                return (
                                    <>
                                        <tr key={val.id}>

                                            <td>{val.name}</td>

                                        </tr>

                                    </>
                                );

                            }) : ""} */}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ClassList