import React, { useState, useEffect, useMemo } from 'react'

import "./Dashboard.css";
import axios from "axios";
const CorrectPage = () => {
    const [step1, SetStep1] = useState(false);
    const [step2, SetStep2] = useState(false);
    const [classId, setClassId] = useState(0);
    const [subjectId, setSubjectId] = useState(0);
    const [subjects, setSubjects] = useState([]);
    const [classes, setClasses] = useState([]);
    const [patternData, setPaternData] = useState([]);
    const [title, setTitle] = useState([])
    const [selectTitle, setSelectedTitle] = useState('')
    const [roll, setRoll] = useState()
    const [division, setDivision] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
     const [marksCheck,setMarkCheck]=useState(false)

    const [newItem, setNewItem] = useState({
        question: '',
        answer: '',
        minMarks: 0,
        total: 0,
        subQuestion: [
            {
                subquestion: '',
                subanswer: '',
                subminMarks: 0,
                subtotal: 0,
            },
        ],
    });

    const [questions, setQuestions] = useState([]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setNewItem({
            ...newItem,
            [name]: value,
        });
    };

    const handleSubQuestionChange = (event, subIndex) => {
        const { name, value } = event.target;
        const updatedSubQuestions = newItem.subQuestion.map((subQ, i) => {
            if (i === subIndex) {
                return {
                    ...subQ,
                    [name]: value,
                };
            }
            return subQ;
        });

        setNewItem({
            ...newItem,
            subQuestion: updatedSubQuestions,
        });
    };


    const addQuestion = () => {
        setQuestions([...questions, newItem]);
        setNewItem({
            question: '',
            answer: '',

            minMarks: 0,
            total: 0,
            subQuestion: [],
        });
    };

    const addSubQuestion = () => {
        setNewItem({
            ...newItem,
            subQuestion: [
                ...newItem.subQuestion,
                {
                    subquestion: '',
                    subanswer: '',

                    subminMarks: 0,
                    subtotal: 0,
                },
            ],
        });
    };
    const [data, setData] = useState({})
    const convertToJson = () => {
        const jsonData = {
            questions: questions,
        };
        setData(jsonData)

    };

    //submit result 

    const handleResultSubmit = async () => {

        try {
            const resultPayload = {
                class_id: ""
                , subject_id: '',
                name: ""
                , roll: ""
                , division: ""
                , data: JSON.stringify(data),
                totalMarks: '',
                percentage: "",
                percentile: ""
            }
            const response = await axios.post("http://localhost:3001/v1/api/add-result")

        } catch (error) {

        }
    }
    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const getAllSubject = async () => {
        try {
            const res = await axios.get("http://localhost:3001/v1/api/subjects");
            setSubjects(res.data.data);
        } catch (error) {
            console.log(error);
        }
    }
    const getAllClass = async () => {
        try {
            const res = await axios.get("http://localhost:3001/v1/api/classes");
            setClasses(res.data.data);
        } catch (error) {
            console.log(error);
        }
    }
    useMemo(() => {
        getAllClass();
        getAllSubject();
    }, [])

    const getTitle = async () => {
        try {

            const res = await axios.get(`http://localhost:3001/v1/api/paper/get-pattern-data?class_id=${classId}&subject_id=${subjectId}`)

            setTitle(res.data.data);
        } catch (error) {
            console.log(error)
        }
    }
    useMemo(async () => {
        await getTitle()
    }, [subjectId])


    useMemo(async () => {
        const response = await axios.get("http://localhost:3001/v1/api/paper/get-pattern-list");

        const filterData = await response.data.data.filter(item => item.name === selectTitle)
        setPaternData(filterData);
    }, [selectTitle])

    const handleSubmit = async (event, answer, minMarks, maxMarks) => {
        event.preventDefault();
        
        if (!selectedFile||selectedFile===null) {
            alert('Please select an image file');
            return;
        }

        const formData = new FormData();
        formData.append('file', selectedFile);
        formData.append('answer', answer);
        formData.append('minMarks', minMarks); // Replace with the actual minMarks value
        formData.append('maxMarks', maxMarks); // Replace with the actual maxMarks value
        try {
            const response = await axios.post('http://localhost:3001/v1/api/paper/check-marks', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            //console.log('Response:', response.data);
            setMarkCheck(true)
            setSelectedFile(null)
            // Handle the response as needed
        } catch (error) {
            console.error('Error:', error);
            // Handle the error
        }
    };

    return (
        <div className='container'>
            <div className="container-title">
                <p>Correct </p>
            </div>
            <div className="create-paper-wrapper">
                <p>Complete All Step to create papaer</p>
                <div className={step1 ? "step1-complete" : "step-container"}>
                    <p className='paper-title'><span>Step 1 :</span> &nbsp; Click on Start button..</p>
                    <div className="button-wrapper">
                        <button onClick={() => SetStep1(!step1)}>Start</button>
                    </div>
                </div>
                <div className={step2 ? "step2-complete" : "step-container"}>
                    <p className='paper-title'><span>Step 2 :</span> &nbsp; Select class, subject and write paper title..</p>
                    <div className="action-container">
                        <div className="filed-container">
                            <select name="" id="" onChange={(e) => setClassId(e.target.value)}>
                                <option value="#" >Select class</option>
                                {
                                    classes && classes.map((val) => {
                                        return (<>
                                            <option key={val.id} value={val.id} >{val.name}</option>
                                        </>)
                                    })
                                }

                            </select>
                        </div>
                        <div className="filed-container">
                            <select name="" id="" onChange={(e) => setSubjectId(e.target.value)}>
                                <option value="#">Select subject</option>
                                {
                                    subjects && subjects.map((val) => {
                                        return (<>
                                            <option value={val.id} key={val.id}>{val.name}</option>
                                        </>)
                                    })
                                }

                            </select>
                        </div>
                        <div className="filed-container">
                            <select name="" id="" onChange={(e) => setSelectedTitle(e.target.value)}>
                                <option value="#">Select Question Pattern </option>
                                {
                                    title && title.map((title) => {
                                        return (
                                            <>
                                                <option key={title.id} value={title.name}>{title.name} </option>
                                            </>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className="filed-container">
                            <input type="text" placeholder='Write division ' />
                        </div>
                        <div className="marks-wrapper" style={{ display: "flex" }}>
                            <div className="marks">
                                <label htmlFor="min">Roll No. start :</label>
                                <input type="number" name="" id="min" placeholder='Roll'
                                    value={roll}
                                    onChange={(e) => setRoll(e.target.value)}
                                    style={{ paddingLeft: "10px", fontSize: "18px", marginTop: "10px", width: "150px" }} />
                            </div>
                            <div className="marks">
                                <label htmlFor="max">Roll. End</label>
                                <input type="number" name="" id="max" placeholder='division'
                                    value={division}
                                    onChange={(e) => setRoll(e.target.value)}
                                    style={{ paddingLeft: "10px", fontSize: "18px", marginTop: "10px", width: "150px" }} />
                            </div>
                        </div>
                    </div>
                    <div className="button-wrapper">
                        <button onClick={() => SetStep2(!step2)}>Continue</button>
                        <button onClick={() => SetStep2(!step2)}>Cancel</button>
                    </div>
                </div>

                {
                    patternData !== null ?

                        <div className="question-output" style={{ width: "68%" }}>
                            <div className="nav-buttons">
                                <button>Previous</button>
                                <button>Next</button>
                            </div>
                            <div className="upload-details">
                                <div className="content">
                                    <h3><span>Class : </span>{ }</h3>
                                    <h3><span>Subject : </span>{ }</h3>
                                </div>
                                <div className="content">
                                    <h3><span> Division : </span>Sem1</h3>
                                    <h3><span> Roll : </span>History</h3>
                                </div>
                                <div className="content">
                                    <h3><span> Pattern : </span>{ }</h3>
                                    <h3><span> Page : </span>1</h3>
                                </div>
                            </div>
                            {
                                patternData.map((questions) => {
                                    return (
                                        <div className="questions-card">
                                            {questions.paper_data &&
                                                questions.paper_data.questions.map((item) => {
                                                    return (
                                                        <div className='main-question'>
                                                            <div className="question-main">
                                                                <div className="details">
                                                                    <h3><span>{item.id + '.'}</span>{item.question}</h3>
                                                                    <h4><span>{item.id + '.'}</span>{item.answer}</h4>
                                                                    <p><span>Minumum marks :</span>{item.totalMarks}</p>
                                                                    <p><span>Total marks: </span> {item.mark}</p>
                                                                </div>

                                                                <input type="file" name="answer" id="" onChange={handleFileChange} placeholder='Upload answer' accept='jpg' />

                                                                <button onClick={(e) => handleSubmit(e, item.answer, item.mark, item.totalMarks)}>Check Marks</button>
                                                            </div>

                                                            <div>
                                                                {
                                                                    item.subQuestion.map((subset) => {
                                                                        return (
                                                                            <div style={{ marginLeft: "19px" }} className="question-main">
                                                                                <div className="details">
                                                                                    <h3><span>{subset.id}</span>{subset.question}</h3>
                                                                                    <h4><span>{subset.id}</span>{subset.answer}</h4>
                                                                                    <p><span>Minumum marks :</span>{subset.totalMarks}</p>
                                                                                    <p><span>Total marks: </span> {subset.mark}</p>
                                                                                </div>
                                                                                <input type="file" name="answer" id="" onChange={handleFileChange} placeholder='Upload answer' accept='jpg' />
                                                                                <button onClick={handleFileChange}>{marksCheck?"Check Marks":"DONE"}</button>
                                                                            </div>

                                                                        )
                                                                    })
                                                                }
                                                            </div>
                                                        </div>

                                                    )
                                                })
                                            }
                                        </div>
                                    )
                                })
                            }

                            <button style={{ width: "150px", border: "none", marginTop: "30px", height: "40px", background: "blue", color: "#fff", cursor: "pointer" }}>Finish</button>
                        </div>
                        : ""}
            </div>
        </div>
    )
}

export default CorrectPage