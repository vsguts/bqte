import React, {Component} from "react";
import ModuleSelector from './components/presentational/ModuleSelector.jsx';
import NavSelector from './components/presentational/NavSelector.jsx';
import TextView from "./components/presentational/TextView.jsx";

class ReactApp extends Component {
  constructor() {
    super();
    this.state = {
      module: 'syno',
      book: 'Q2',
      chapter: '2',
    };
    this.modules = [
      {code: 'rbo', name: 'RBO'},
      {code: 'syno', name: 'Synodal text'},
    ];
    this.books = [
      {code: 'Q1', name: "Бытие"},
      {code: 'Q2', name: "Исход"},
      {code: 'Q3', name: "Числа"},
      {code: 'Q4', name: "Второзоконие"},
      {code: 'Q5', name: "Иисус Навин"},
    ];
    this.chapters = [
      {code: '1', name: "1"},
      {code: '2', name: "2"},
      {code: '3', name: "3"},
      {code: '4', name: "4"},
      {code: '5', name: "5"},
      {code: '6', name: "6"},
      {code: '7', name: "7"},
      {code: '8', name: "8"},
      {code: '9', name: "9"},
      {code: '10', name: "10"},
      {code: '11', name: "11"},
      {code: '12', name: "12"},
      {code: '13', name: "13"},
      {code: '14', name: "14"},
      {code: '15', name: "15"},
      {code: '16', name: "16"},
      {code: '17', name: "17"},
      {code: '18', name: "18"},
      {code: '19', name: "19"},
      {code: '20', name: "20"},
    ];
    this.texts = {
      rbo: {
        Q1: {
          '1': "QWE",
          '2': "ASD",
          '3': "ZCX",
        },
        Q2: {
          '1': "QWE",
          '2': "ASD",
          '3': "ZCX",
        },
        Q3: {
          '1': "QWE",
          '2': "ASD",
          '3': "ZCX",
        },
      },
      syno: {
        Q1: {
          '1': "QWE",
          '2': "ASD",
          '3': "ZCX",
        },
        Q2: {
          '1': "QWE",
          '2': "ASD",
          '3': "ZCX",
        },
        Q3: {
          '1': "QWE",
          '2': "ASD",
          '3': "ZCX",
        },
      },
    };
    this.handleChangeModule = this.handleChangeModule.bind(this);
    this.handleChangeBook = this.handleChangeBook.bind(this);
    this.handleChangeChapter = this.handleChangeChapter.bind(this);
  }
  handleChangeModule(event) {
    console.log('change book', event.target.value);
    this.setState({ module: event.target.value });
    this.setState({ book: 'Q1' });
    this.setState({ chapter: '1' });
  }
  handleChangeBook(event, code) {
    console.log('change book', code);
    this.setState({ book: code });
    this.setState({ chapter: '1' });
  }
  handleChangeChapter(event, code) {
    console.log('change chapter', code);
    this.setState({ chapter: code });
  }
  render() {
    return (
      <div className="container-fluid" style={{height: '100%'}}>

        <div className="row" style={{height: '100%'}}>
          <div className="col-md-4 h-50 border">

            <div className="row">
              <div className="col-sm-12 border">
                <ModuleSelector items={this.modules} onChange={this.handleChangeModule} active={this.state.module} />
              </div>
              <div className="col-sm-8 border">
                <div style={{maxHeight: '300px', overflow: 'auto'}}>
                  <NavSelector items={this.books} onChange={this.handleChangeBook} active={this.state.book} />
                </div>
              </div>
              <div className="col-sm-4 border">
                <div style={{maxHeight: '300px', overflow: 'auto'}}>
                  <NavSelector items={this.chapters} onChange={this.handleChangeChapter} active={this.state.chapter} />
                </div>
              </div>
            </div>

          </div>

          <div className="col-md-8 d-flex_ flex-column_ h-100_ border">
            <TextView content={this.texts[this.state.module][this.state.book][this.state.chapter]} />
          </div>

        </div>

      </div>
    )
  }
}

export default ReactApp;
