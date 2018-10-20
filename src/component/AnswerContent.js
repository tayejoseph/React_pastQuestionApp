import React from "react";
import {Modal, Button} from "react-bootstrap";

const AnswerContent = (props) => {
        console.log(props.answerData)
        const {uniTitle, semester, exam, courseName, courseDepartment, courseTitle, year} = props.uni_course_info;
        let content = (
            <div>
            <hgroup>
            <h2>{uniTitle}</h2>
            <h2>{courseDepartment}</h2>
            {props.answerData.answersData.topics ? <h2>Filtered Questions for {courseName}</h2> : "" }
            <h2>{courseName} - {courseTitle}</h2>
            {props.answerData.topics ? props.answerData.topics.length < 1 ? <h2>{year} {semester} {exam} Answers</h2> : "" : ""}
            {console.log(props.answerData.topics, "111111111")}
            {props.answerData.topics ? props.answerData.topics.length >= 1 ? (<h3>Filtered Topics: {
                props.answerData.topics.map((topic, index) => (
                    <span key = {index}>
                    {
                    (props.answerData.topics[props.answerData.topics.length -1] === topic) ? (
                        <span>{topic} .</span>
                    ) : (
                        <span>{topic}, </span>
                    )
                    }
                </span>
                ))
            }</h3>) : "" : "" }
            </hgroup>
            {props.answerData.answersData.map((answer, index) => (
                <div key = {index}>
                {props.answerData.topics ? <p>{answer.semester}</p> : "" }
                <p><span style = {{"marginRight": "10px"}}>{answer.num}. </span>{answer.answer}</p>
                </div>
            ))
            }
            </div>
        )
        return (
 <Modal 
    keyboard
    backdrop = "static"
    animation = {false} 
    bsSize="lg" 
    show={props.answerModal} 
    onHide={props.handleAnswerModalHide}
>
<Modal.Header closeButton>
<Modal.Title>Modal heading</Modal.Title>
</Modal.Header>
<Modal.Body>
{content}
</Modal.Body>
<Modal.Footer>
<Button onClick={props.handleAnswerModalHide}>Close</Button>
</Modal.Footer>
</Modal>
            )
    }



export default AnswerContent;