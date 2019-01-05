import React, {Component} from "react";

class ReactApp extends Component {
  render() {
    return (
      <div className="container-fluid" style={{height: '100%'}}>

        <div className="row" style={{height: '100%'}}>
          <div className="col-md-4 h-50 border">

            <div className="row">
              <div className="col-sm-12 border">
                <select className="form-control" id="exampleFormControlSelect1">
                  <option>RBO</option>
                  <option>MBO</option>
                  <option>Syno</option>
                </select>
              </div>
              <div className="col-sm-8 border">
                <div style={{maxHeight: '300px', overflow: 'auto'}}>
                  <nav className="nav nav-pills flex-column">
                    <a className="flex-sm-fill text-sm-center nav-link active" href="#">Бытие</a>
                    <a className="flex-sm-fill text-sm-center nav-link" href="#">Исход</a>
                    <a className="flex-sm-fill text-sm-center nav-link" href="#">Левит</a>
                    <a className="flex-sm-fill text-sm-center nav-link" href="#">Числа</a>
                    <a className="flex-sm-fill text-sm-center nav-link" href="#">Второзоконие</a>
                  </nav>
                </div>
              </div>
              <div className="col-sm-4 border">
                <div style={{maxHeight: '300px', overflow: 'auto'}}>
                  <nav className="nav nav-pills flex-column">
                    <a className="flex-sm-fill text-sm-center nav-link active" href="#">1</a>
                    <a className="flex-sm-fill text-sm-center nav-link" href="#">2</a>
                    <a className="flex-sm-fill text-sm-center nav-link" href="#">3</a>
                    <a className="flex-sm-fill text-sm-center nav-link" href="#">4</a>
                    <a className="flex-sm-fill text-sm-center nav-link" href="#">5</a>
                    <a className="flex-sm-fill text-sm-center nav-link" href="#">6</a>
                    <a className="flex-sm-fill text-sm-center nav-link" href="#">7</a>
                    <a className="flex-sm-fill text-sm-center nav-link" href="#">8</a>
                    <a className="flex-sm-fill text-sm-center nav-link" href="#">9</a>
                    <a className="flex-sm-fill text-sm-center nav-link" href="#">10</a>
                    <a className="flex-sm-fill text-sm-center nav-link" href="#">11</a>
                    <a className="flex-sm-fill text-sm-center nav-link" href="#">12</a>
                  </nav>
                </div>
              </div>
            </div>

          </div>

          <div className="col-md-8 d-flex_ flex-column_ h-100_ border">
            Bible text
          </div>

        </div>

      </div>
    )
  }
}

export default ReactApp;
