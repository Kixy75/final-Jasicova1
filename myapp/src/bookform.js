import React from 'react';
import {ControlLabel, FormControl, HelpBlock, FormGroup, Row, Col, Checkbox, Grid, Button, Table, Form} from 'react-bootstrap';

class BookForm extends React.Component {
    constructor(props){
        super(props)
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        this.handleChangePageCount = this.handleChangePageCount.bind(this);
        this.handleChangeInteresting = this.handleChangeInteresting.bind(this);
        this.saveValue = this.saveValue.bind(this);
        this.state = {
            favoriteBooks: [],
            title: "",
            pageCount: "",
            description: "",
            interesting: true
        }
    }

    saveValue(){
        var currentArray = this.state.favoriteBooks.concat({title: this.state.title, pageCount: this.state.pageCount, description: this.state.description, interesting: this.state.interesting});
        this.setState({favoriteBooks: currentArray});
    }

    handleChangeTitle(e) {
        this.setState({ title: e.target.value });
    }

    handleChangePageCount(e) {
        this.setState({ pageCount: e.target.value });
    }

    handleChangeDescription(e) {
        this.setState({ description: e.target.value });
    }

    handleChangeInteresting(e) {
        this.setState({ interesting: e.target.checked });
    }

    render(){
        return(
            <div>
            <Grid>
                <Row>
                <Col md={6}>
                    <ControlLabel>Title</ControlLabel>
                    <FormControl
                        type="text"
                        value={this.state.title}
                        placeholder="Enter text"
                        onChange={this.handleChangeTitle}
                    />

                    <ControlLabel>Page Count</ControlLabel>
                    <FormControl
                        type="text"
                        value={this.state.pageCount}
                        placeholder="Enter text"
                        onChange={this.handleChangePageCount}
                    />

                    <ControlLabel>Description</ControlLabel>
                    <FormControl
                        componentClass="textarea"
                        value={this.state.description}
                        placeholder="textarea"
                        onChange={this.handleChangeDescription}
                         />

                    <Checkbox checked={this.state.interesting}
                        onChange={this.handleChangeInteresting}
                    >
                        Was interesting?
                    </Checkbox>

                <Button bsStyle="success" onClick={this.saveValue}>Submit</Button>
                </Col>
                <Col md={6}>
                <Table bordered condensed hover>
                        <thead>
                            <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>PageCount</th>
                            <th>Interesting</th>
                            </tr>
                        </thead>
                        <tbody>
                    {this.state.favoriteBooks.map(favoriteBook => {
                        return { title: favoriteBook.title, description: favoriteBook.description, pageCount: favoriteBook.pageCount, interesting: favoriteBook.interesting };})
                        .map((favoriteBook, i) => {return (
                            <tr key={i}>
                            <td>{favoriteBook.title}</td>
                            <td>{favoriteBook.description}</td>
                            <td>{favoriteBook.pageCount}</td>
                            <td>{favoriteBook.interesting.toString()}</td>
                            </tr>
                    )})
                    }
                </tbody>
             </Table>
             </Col>
             </Row>
          </Grid >
        </div>
        )
    }
}

export default BookForm;
