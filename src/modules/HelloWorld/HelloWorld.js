import React, { Component } from "react";
import Axios from "axios";
class HelloWorld extends Component {
  //console.log(this.props.config.date);
  componentDidMount() {
    Axios.get("https://newsapi.org/v2/top-headlines?country=in", {
      headers: {
        "X-Api-Key": "ef923d09f3fa40a4959181407bf0e196",
      },
    })
      .then((res) => console.log(res.data.articles[0]))
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <div>
        <p className="small">{this.props.config.date}</p>
      </div>
    );
  }
}

export default HelloWorld;
