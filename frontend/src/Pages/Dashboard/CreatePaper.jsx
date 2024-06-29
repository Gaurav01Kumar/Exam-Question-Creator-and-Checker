import React, { useEffect, useState } from 'react';

import './Dashboard.css';
import axios from "axios";
const CreatePaper = () => {
  const [step1, setStep1] = useState(false);
  const [step2, setStep2] = useState(false);
  const [step3, setStep3] = useState(false);
  const [title, setTitle] = useState('');
  

  const [classId, setClassId] = useState();
  const [subjectId, setSubjectId] = useState();
  const [subjects, setSubjects] = useState([]);
  const [classes, setClasses] = useState([]);


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

  const handleSubmit = async () => {
    try {

      const user_id = JSON.parse(localStorage.getItem('users'))

      const details = {
        "class_id": classId,
        "subject_id": subjectId,
        "name": title,
        "data": JSON.stringify(data),
        "user_id": 1
      }
      const res = await axios.post("http://localhost:3001/v1/api/paper/add", details);
      if (res.status === 201) {
        alert("succefully added data")
      }
    } catch (error) {

      console.log(error);
      alert("failed")
    }
  }

  useEffect(() => {
    getAllClass();
    getAllSubject();
  }, [])
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
console.log(classId)
  return (
    <div className="container">
      <div className="container-title">
        <h3>Create new paper pattern</h3>
      </div>
      <div className="pattern-paper-wrapper" id='paper-patterns'>
        <p>Complete all steps to create paper</p>
        {/* Step 1 */}
        <div className={step1 ? "step1-complete" : "step-container"}>
          <p className="paper-title">
            <span>Step 1:</span> &nbsp; Click on Start button..
          </p>
          <div className="button-wrapper">
            <button onClick={() => setStep1(!step1)}>Start</button>
          </div>
        </div>
        {/* Step 2 */}
        <div className={step2 ? "step2-complete" : "step-container"}>
          <p className="paper-title">
            <span>Step 2:</span> &nbsp; Select class, subject and write paper title..
          </p>
          <div className="action-container">
            <div className="filed-container">
              <select onChange={(e) => setClassId(e.target.value)}>
                <option value="#">Select class</option >
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
              <select  onChange={(e) => setSubjectId(e.target.value)}>
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
              <input
                type="text"
                placeholder="Write your title...."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

          </div>
          <div className="button-wrapper">
            <button onClick={() => setStep2(!step2)}>Continue</button>
            <button onClick={() => setStep2(!step2)}>Cancel</button>
          </div>
        </div>
        {/* Step 3 */}
        <div className={step3 ? "step2-complete" : "step-container"}>
          <p className="paper-title">
            <span>Step 3:</span> &nbsp; Write Question or sub-question!
          </p>
          <div className="action-container">
            <div className="filed-container">
              {/* <div className="main-question-container">
                <div className="input-container">
                  <div className="question">
                    <textarea
                      name="question"
                      value={newItem.question}
                      onChange={handleInputChange}
                      cols="50"
                      rows="5"
                      placeholder="Write your Question..."
                    />
                    <textarea
                      name="answer"
                      value={newItem.answer}
                      onChange={handleInputChange}
                      cols="50"
                      rows="5"
                      placeholder="Write your Answer..."
                    />
                  </div>
                  <div className="marks-wrapper">
                    <div className="marks">
                      <label htmlFor="min">Minimum marks</label>
                      <input
                        type="number"
                        name="minMarks"
                        value={newItem.minMarks}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="marks">
                      <label htmlFor="max">Maximum marks</label>
                      <input
                        type="number"
                        name="total"
                        value={newItem.total}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="question-buttons">
                  <button onClick={handleAddItem}>Next Question</button>
                  <button onClick={() => addSubQuestion(0)}>Add Sub Question</button>
                  <button>Cancel</button>
                </div>
                <div className="subset-container">
                  <p>Write your sub-question</p>
                  <div className="input-container">
                    <div className="question">
                      <textarea
                        name="subQuestion"
                        value={newItem.subQuestion[0].subquestion}
                        onChange={handleInputChange}
                        cols="50"
                        rows="5"
                        placeholder="Write your Sub Question..."
                      />
                      <textarea
                        name="subAnswer"
                        value={newItem.subQuestion[0].subanswer}
                        onChange={handleInputChange}
                        cols="50"
                        rows="5"
                        placeholder="Write your Sub Answer..."
                      />
                    </div>
                    <div className="marks-wrapper">
                      <div className="marks">
                        <label htmlFor="subMin">Minimum marks</label>
                        <input
                          type="number"
                          name="subMinMarks"
                          value={newItem.subQuestion[0].subminMarks}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="marks">
                        <label htmlFor="subMax">Maximum marks</label>
                        <input
                          type="number"
                          name="subTotal"
                          value={newItem.subQuestion[0].subtotal}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="question-buttons">
                    <button onClick={() => addSubQuestion(0)}>Next Question</button>
                    <button>Cancel</button>
                  </div>
                </div>
              </div> */}
              <div className="main-question-container">
                <div className="input-container">
                  <div className="question">
                    <textarea
                      col="50"
                      row="5"
                      name="question"
                      placeholder='write your question'
                      value={newItem.question}
                      onChange={handleInputChange}
                    />

                    <textarea
                      col="50"
                      row="5"
                      type="text"
                      name="answer"
                      placeholder='write your answer'
                      value={newItem.answer}
                      onChange={handleInputChange}
                    />

                  </div>
                  <div className="marks-wrapper">
                    <div className="marks">
                      <label htmlFor="min">Minimum marks</label>
                      <input
                        type="number"
                        name="minMarks"
                        value={newItem.minMarks}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="marks">
                      <label htmlFor="max">Maximum marks</label>
                      <input
                        type="number"
                        name="total"
                        value={newItem.total}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>


                </div>
                <button style={{ marginTop: "50px" }} onClick={addQuestion}>Add Question</button>
                <div className="subset-container">

                  {newItem.subQuestion.map((subQ, index) => (
                    <div key={index} className='input-container'>
                      <div className="question">
                        <textarea
                          col="50"
                          row="5"
                          type="text"
                          name="subquestion"
                          placeholder='Write your question.'
                          value={subQ.subquestion}
                          style={{ height: "200px" }}
                          onChange={(e) => handleSubQuestionChange(e, index)}
                        />

                        <textarea
                          col="50"
                          row="5"
                          type="text"
                          placeholder='write your answer'
                          name="subanswer"
                          value={subQ.subanswer}
                          onChange={(e) => handleSubQuestionChange(e, index)}
                        />
                      </div>
                      <div className="marks-wrapper">
                        <div className="marks">
                          <label htmlFor="min">Minimum marks</label>
                          <input
                            type="number"
                            name="subminMarks"
                            value={subQ.subminMarks}
                            onChange={(e) => handleSubQuestionChange(e, index)}
                          />
                        </div>
                        <div className="marks">
                          <label htmlFor="max">Maximum marks</label>
                          <input
                            type="number"
                            name="subtotal"
                            value={subQ.subtotal}
                            onChange={(e) => handleSubQuestionChange(e, index)}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <button style={{ marginTop: "50px" }} onClick={addSubQuestion}>Add Sub Question</button>

                <button style={{ marginTop: "50px" }} onClick={convertToJson}>Submit all</button>
              </div>
              <div className="question-button-wrapper">
                <button onClick={handleSubmit
                } >Finish</button>
                <button onClick={() => setStep3(!step3)}>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Question Output */}
      <div className="question-output" style={{ marginTop: "20%" }}>
        <h1>Your Question Pattern</h1>
        <div className="questions-card">
          {questions ? questions.map((question, index) => (
            <div key={index} className="main-question">
              <div className="question-main">
                <div className="details">
                  <h3>
                    <span>{index + 1}.</span>
                    {question.question}
                  </h3>
                  <h3>
                    <span>{index + 1}.</span>
                    {question.answer}
                  </h3>
                  <p>
                    <span>Minimum marks:</span> {question.minMarks}
                  </p>
                  <p>
                    <span>Total marks:</span> {question.total}
                  </p>
                </div>
              </div>
              <div>
                {question.subQuestion.map((subset, subIndex) => (
                  <div key={subIndex} style={{ marginLeft: "19px" }} className="question-main">
                    <h3>
                      <span>{subIndex + 1}.</span>
                      {subset.subquestion}
                    </h3>
                    <h3>
                      <span>{subIndex + 1}.</span>
                      {subset.subanswer}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          )) : ""}
        </div>
        <button
          style={{
            width: "150px",
            border: "none",
            marginTop: "30px",
            height: "40px",
            background: "blue",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Finish
        </button>
      </div>

    </div>
  );
};

export default CreatePaper;
