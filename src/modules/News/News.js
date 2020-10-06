import React, { Component } from "react";
import Axios from "axios";
class News extends Component {
  //console.log(this.props.config.date);
  state = {
    news: [],
    loaded: false,
    index: 0,
  };
  componentDidMount() {
    Axios.get("https://newsapi.org/v2/top-headlines?country=in", {
      headers: {
        "X-Api-Key": "ef923d09f3fa40a4959181407bf0e196",
      },
    })
      .then((res) => {
        //console.log(res.data.articles[0]);
        this.setState({
          news: res.data.articles,
          loaded: true,
        });
      })
      .catch((err) => console.log(err));
    this.timeout = setInterval(() => {
      let currentIdx = this.state.index;
      this.setState({ index: currentIdx + 1 });
    }, 60000);
  }

  render() {
    const { news } = this.state;
    let changeNews = news[this.state.index % news.length];
    const newsList = this.state.loaded ? (
      <div>
        <p className="xsmall">{changeNews.title}</p>
        {console.log(news)}
      </div>
    ) : (
      <div>No New Yet</div>
    );
    return <div>{newsList}</div>;
  }
}

export default News;
