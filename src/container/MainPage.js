import React from "react";
import {Grid, Row, Col} from "react-bootstrap";
import ToolBar from "./ToolBar"
import NavSideBar from "./NavSideBar";
import SideBar from "./SideBar";
import ContentArea from "./ContentArea";
import FeedBackArea from "./FeedBackPage";
import DownloadArea from "./DownloadPage";
import UploadArea from "./UploadPage";
import WelcomeArea from "./WelcomePage";
import Bottomsection from "./Bottomsection";



class MainArea extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        disableToolBarBtn: true,
        disableModeBtn: true,
        showSolution: false,
        showUploadArea: false,
        showContentArea: false,
        showWelcomeArea: true,
        showFeedBackArea: false,
        showDownloadArea: false,
        showBottomSection: false

    }
}
enableToolBarBtn = () => {
    this.setState({
        disableToolBarBtn: false,
        disableModeBtn: false
    })
}
toggleContentSolution = () => {
    (this.state.showSolution) ? 
    this.setState({
        showSolution: false
    }) : 
    this.setState({
        showSolution: true
    })
}
handleModeChange = (value) => {
    if(value === "Exam") {
    this.setState({
        showSolution: false,
        disableToolBarBtn: true
    })
    } else {
    this.setState({
        disableToolBarBtn: false
    })
    }
}
handleShowDownloadArea = () => {
    this.setState({
        disableToolBarBtn: true,
        disableModeBtn: true,
        showUploadArea: false,
        showContentArea: false,
        showFeedBackArea: false,
        showWelcomeArea: false,
        showDownloadArea: true,
        showBottomSection: true
    })
}
 handleShowUploadArea = () => {
    this.setState({
        disableToolBarBtn: true,
        disableModeBtn: true,
        showUploadArea: true,
        showContentArea: false,
        showFeedBackArea: false,
        showWelcomeArea: false,
        showDownloadArea: false,
        showBottomSection: true
    })
}
handleShowContentAreaArea = () => {
this.setState({
        // showSolution: false
        disableToolBarBtn: true,
        disableModeBtn: true,
        showUploadArea: false,
        showContentArea: true,
        showFeedBackArea: false,
        showWelcomeArea: false,
        showDownloadArea: false,
        showBottomSection: false
    })    
}
handleShowFeedBackArea = () => {
    this.setState({
        disableToolBarBtn: true,
        disableModeBtn: true,
        showUploadArea: false,
        showContentArea: false,
        showFeedBackArea: true,
        showWelcomeArea: false,
        showDownloadArea: false,
        showBottomSection: true
    })
}

handleAnswerModal = () => {
    this.setState({
        answerModal: true
    })
}
handleAnswerModalHide = () => {
    if(this.state.answerModal) {
        this.setState({
            answerModal: false
        })
    }
}
handleFilterModal = () => {
    this.setState({
        filterModal: true
    })
}
handleFilterModalHide = () => {
    if(this.state.filterModal) {
        this.setState({
            filterModal: false
        })
    }
}

render () {
    return (
        <Grid fluid>
            <Row>
                <ToolBar
                toggleContentSolution = {this.toggleContentSolution}
                handleModeChange = {this.handleModeChange}
                enableBtn = {this.state.disableToolBarBtn}
                enableModeBtn = {this.state.disableModeBtn}
                handleAnswerModal = {this.handleAnswerModal}
                handleFilterModal = {this.handleFilterModal}
                showFeedBack = {this.handleShowFeedBackArea}
                showDownload = {this.handleShowDownloadArea}
                showUpload = {this.handleShowUploadArea}
                />
            </Row>
            <Row style = {{"marginTop": "50px", "height": "calc(100vh - 50px)"}}>
                <Col className = "Column" sm = {2}>
                <NavSideBar 
                enableToolBarBtn = {this.enableToolBarBtn}
                handleShowContentArea = {this.handleShowContentAreaArea}
                />
                </Col>
                <Col className = "Column" style = {{}} sm = {10}>
                {this.state.showWelcomeArea ? <WelcomeArea /> : 
                <React.Fragment>
                {this.state.showContentArea ? 
                <ContentArea 
                answerModal = {this.state.answerModal} 
                filterModal = {this.state.filterModal}
                showSolution = {this.state.showSolution} 
                handleAnswerModalHide = {this.handleAnswerModalHide}
                handleFilterModalHide = {this.handleFilterModalHide}
                /> : 
                <React.Fragment>
                {this.state.showUploadArea ? <UploadArea /> : ""}
                {this.state.showDownloadArea ? <DownloadArea /> : ""}
                {this.state.showFeedBackArea ? <FeedBackArea /> : ""}
                {/* {this.state.showBottomSection ? 
                    <Bottomsection />
                 : ""} */}
                </React.Fragment>
                }
                </React.Fragment>
                }
                {/* <div style = {{"height": "80px"}}>
               
                {/* </div> */}
                </Col>
                {/* <Col sm = {2}>
                <SideBar />
                </Col> */}
            </Row>
         
        </Grid> 
        )
    }
}

export default MainArea;