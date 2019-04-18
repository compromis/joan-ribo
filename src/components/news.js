import React from "react"
import axios from "axios"
import moment from "moment"
import { FormattedMessage, injectIntl, intlShape } from "react-intl"

const NewsStory = ({story}) => (
  <a href={story.link} target="_blank" rel="noopener noreferrer" className="news-story">
    <div className="news-story-thumbnail">
      { story.featured_image_src.large ? <img src={story.featured_image_src.large[0]} width="100%" alt={story.title.rendered} /> : '' }
    </div>
    <div className="news-story-headline">
      <h5 dangerouslySetInnerHTML={{__html: story.title.rendered}}></h5>
      <div className="news-story-readmore">{ moment(story.date).format("D/M/YYYY") }</div>
    </div>
  </a>
)

class News extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      stories: []
    }
  }

  componentDidMount () {
    this.fetchNews()
  }

  fetchNews () {
    const source = this.props.intl.locale === 'es' ? 'https://valencia-cas.compromis.net/wp-json/wp/v2/posts/?per_page=3&_embed' : 'https://valencia.compromis.net/wp-json/wp/v2/posts/?per_page=3&_embed'
    axios.get(source)
      .then(response => {
        this.setState({
          stories: response.data
        })
      })
  }

  render () {
    return (
      <div className="news container">
        <h2><FormattedMessage id="news_header" /></h2>
        <div className="news-list">
          {this.state.stories.map(story => <NewsStory key={story.id} story={story} />)}
        </div>
        <div className="news-more">
          <a href={this.props.intl.locale === 'es' ? 'https://valencia-cas.compromis.net' : 'https://valencia.compromis.net'}><FormattedMessage id="news_more_on" /></a>
        </div>
      </div>
    )
  }
}

News.propTypes = {
  intl: intlShape.isRequired
}

export default injectIntl(News)
