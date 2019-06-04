import React, { useState, useEffect } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import { Select } from 'semantic-ui-react'
import Sidebar from '../../presentationals/Sidebar';
import Title from '../../presentationals/Title';
import Table from '../../presentationals/Table';
import Button from '../../presentationals/Button';
import Modal from '../../presentationals/Modal';
import Input from '../../presentationals/ModalInput';
import { getRenatQuizQuestions, createRenatQuizQuestion, deleteRenatQuizQuestion } from '../../../store/actions/Renat/renat';

import './questions.scss';

function Questions({ getQuestions, questions, createQuestion, deleteQuestion }) {
  useEffect(() => {
    getQuestions();
  }, []);
  const [isAddQuestionOpen, setIsAddQuestionOpen] = useState(false);
  const [isDeleteQuestionOpen, setIsDeleteQuestionOpen] = useState(false);
  // const [addQuestionTableBodies, setAddQuestionTableBodies] = useState([['Andres', 'Red', 'negative']]);
  const [addQuestionTableBodies, setAddQuestionTableBodies] = useState([]);
  const [isAddAnswerOpen, setIsAddAnswerOpen] = useState(false);

  const [questionText, setQuestionText] = useState('');

  // states for adding a new answer
  const [answerText, setAnswerText] = useState(''); 
  const [answerColor, setAnswerColor] = useState('');
  const [answerDirection, setAnswerDirection] = useState('');
  const addNewAnswer = () => {
    const cloneArray = [...addQuestionTableBodies];
    cloneArray.push([answerText, answerColor, answerDirection]);
    setAddQuestionTableBodies(cloneArray);
    setIsAddAnswerOpen(false);
  };

  const headerCells = ['Id', 'Question', 'Answers', 'Actions'];
  const bodyCells = questions.map((question) => [
    question.colorQuestionId.toString(),
    question.question,
    question.answers.map((answer) => `Answer: ${answer.answer}, Color: ${answer.color}, Direction: ${answer.direction}`),
  ]);
  const addQuestionTableHeaders = ['Answer', 'Color', 'Direction'];
  const colorOptions = [
    {
      key: 'white',
      text: 'white',
      value: 'white',
    },
    {
      key: 'red',
      text: 'red',
      value: 'red',
    },
    {
      key: 'yellow',
      text: 'yellow',
      value: 'yellow',
    },
    {
      key: 'blue',
      text: 'blue',
      value: 'blue',
    },
  ];

  const directionOptions = [
    {
      key: 'positive',
      text: 'positive',
      value: 'positive',
    },
    {
      key: 'negative',
      text: 'negative',
      value: 'negative',
    }
  ];

  const addAnswerActions = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '15px',
    alignItems: 'center',
  };

  const modalStyles = {
    width: '40%',
    padding: '30px 60px'
  };
  return (
    <div className="questions-container">
      <Sidebar />
      <Grid className="questions-wrapper">
        <Row>
          <Col md={6}>
            <Title fontSize="36px">Questions</Title>
            <p className="questions-text">In this page, you'll be able to manage the questions that you've already created, create new ones, delete, and edit.</p>
          </Col>
          <Col md={6} className="questions-add">
            <Button classList="questions-add-button" text="Add New Question" onClick={() => setIsAddQuestionOpen(true)} />
          </Col>
        </Row>
        <Row>
          <Table headerCells={headerCells} bodyCells={bodyCells} editable deletable onDeleteQuestion={(id) => deleteQuestion(id)} />
        </Row>
      </Grid>
      {isAddQuestionOpen && <Modal onClose={() => setIsAddQuestionOpen(false)} style={modalStyles} closeTop='25%'>
          <div className="questions-modal">
            {isAddAnswerOpen
              ? (
                <React.Fragment>
                  <Title fontSize="24px">Add Answer</Title>
                  <Input label="Answer" value={answerText} placeholder="Happy" type="text" margin="20px 0" required onChange={(e) => setAnswerText(e.target.value)} />
                  <div style={addAnswerActions}>
                    <Select placeholder="Select a Color" options={colorOptions} style={{ marginRight: '10px' }} onChange={(e, data) => setAnswerColor(data.value)} />
                    <Select placeholder="Select a Direction" options={directionOptions} onChange={(e, data) => setAnswerDirection(data.value)} />
                  </div>
                  <div style={addAnswerActions} className="questions-modal-submit">
                    <a onClick={() => setIsAddAnswerOpen(false)} style={{ marginRight: '15px', cursor: 'pointer' }}>Cancel</a>
                    <Button text="Create" classList="questions-modal-button" onClick={() => addNewAnswer()} />
                  </div>
                </React.Fragment>
              )
              : (
                <React.Fragment>
                  <Title fontSize="24px">Add New Question</Title>
                  <Input
                    label="Question Text"
                    value={questionText}
                    placeholder="How do you feel today?"
                    type="text"
                    margin="20px 0"
                    onChange={(e) => setQuestionText(e.target.value)}
                    required
                  />
                  <Table
                    headerCells={addQuestionTableHeaders}
                    bodyCells={addQuestionTableBodies}
                    hasFooter
                    footerContent={
                      <a
                        onClick={() => {
                          setAnswerText('')
                          setAnswerColor('')
                          setAnswerDirection('')
                          setIsAddAnswerOpen(true)
                        }}
                      >
                        Add new Answer
                      </a>
                    }
                  />
                  <div className="questions-modal-submit">
                    <Button classList="questions-modal-button" text="Create Question" onClick={() => createQuestion(questionText, addQuestionTableBodies)} />
                  </div>
                </React.Fragment>
              )
            }
          </div>
        </Modal>
      }
    </div>
  )
};

const mapStateToProps = (state) => ({
  questions: state.renatReducer.questions ? state.renatReducer.questions : [],
});

const mapDispatchToProps = dispatch => ({
  getQuestions: () => dispatch(getRenatQuizQuestions()),
  createQuestion: (question, answers) => dispatch(createRenatQuizQuestion(question, answers)),
  deleteQuestion: (questionId) => dispatch(deleteRenatQuizQuestion(questionId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Questions);