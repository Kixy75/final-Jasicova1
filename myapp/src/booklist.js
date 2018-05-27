import React from 'react';
import {Table} from 'react-bootstrap';

class BookList extends React.Component {
    constructor(){
        super();
        this.state = {
            books: [],
            booksCount: 20
        }
    }

    componentDidMount() {
        this.loadData();
    }

    //nacitanie knih z fake service do pola books
    loadData(){
        const queryString = "https://fakerestapi.azurewebsites.net/api/Books";
        if (queryString === this.lastQuery) {
        this.setState({ loading: false });
        return;
        }

        fetch(queryString)
        .then(response => response.json())
        .then(data => this.setState({
            books: data
        }))
        .catch(() => this.setState({ loading: false }));
        this.lastQuery = queryString;
    }

    render(){
        return (
        //(responsive striped bordered condensed hover) su vlastnosi tabulky 3d library ktoru pouzivam(react-bootstrap)
        <Table responsive striped bordered condensed hover>
            <thead>
                <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Description</th>
                <th>PageCount</th>
                <th>Excerpt</th>
                <th>PublishDate</th>
                </tr>
            </thead>
            <tbody>
                {this.state.books.map(book => {
                    return { id: book.ID, title: book.Title, description: book.Description, pageCount: book.PageCount, excerpt: book.Excerpt, publishDate: book.PublishDate };})
                    .filter(book => { return book.id <= this.state.booksCount; }) //pocet nacitanych knih 20
                    //slice - vyberie usek textu podla indexu, kvoli tomu ze description a excerpt su prilis dlhe
                    //toLocaleString() a new Date pretoze bolo potrebne convertovat datum do localneho casu
                    // i - tam je preto lebo je potrebny unique key per row
                    .map((book, i) => {return (
                        <tr key={i}>
                        <td>{book.id}</td>
                        <td>{book.title}</td>
                        <td>{book.description.slice(0, 100)}</td>
                        <td>{book.pageCount}</td>
                        <td>{book.excerpt.slice(0, 100)}</td>
                        <td>{new Date(book.publishDate).toLocaleString()}</td>
                        </tr>
                )})
                }
            </tbody>
        </Table>
        );
    }
}

export default BookList;
