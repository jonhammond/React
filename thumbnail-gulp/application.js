var Badge = React.createClass({displayName: "Badge",
  render: function() {
    return React.createElement("button", {className: "btn btn-primary", type: "button"}, 
      this.props.title, " ", React.createElement("span", {className: "badge"}, this.props.number)
    );
  }
});

var Thumbnail = React.createClass({displayName: "Thumbnail",
  render: function() {
    return React.createElement("div", {className: "thumbnail"}, 
      React.createElement("img", {src: this.props.imgUrl, alt: "{this.props.alt}"}), 
      React.createElement("div", {className: "caption"}, 
        React.createElement("h3", null, this.props.label), 
        React.createElement("p", null, this.props.description), 
        React.createElement("p", null, 
          React.createElement(Badge, {title: this.props.title, number: this.props.number})
        )
      )
    )
  }
});

var Thumbnail = require('./thumbnail');

var ThumbnailList = React.createClass({displayName: "ThumbnailList",
  render: function() {
    var list = this.props.thumbnailData.map(function(thumbnailProps) {
      return React.createElement(Thumbnail, React.__spread({},  thumbnailProps));
    });
    return React.createElement("div", null, 
      list
    );
  }
});

var options = {
  thumbnailData: [{
  title: "See more sharks!",
  number: 100,
  imgUrl: "http://sharkopedia.discovery.com/wp-content/uploads/2015/06/record-breakers-3-10.jpg",
  label: "Tiger Shark!",
  description: "Tiger sharks are pretty cool!",
},{
  title: "See more elephants!",
  number: 50,
  imgUrl: "http://www.livescience.com/images/i/000/036/988/original/elephants.jpg?interpolation=lanczos-none&downsize=*:1000",
  label: "Elephants!",
  description: "Elephants are pretty big!",
},{
  title: "See more giraffes!",
  number: 25,
  imgUrl: "https://7068-presscdn-0-62-pagely.netdna-ssl.com/wp-content/uploads/2015/07/baby-giraffe-by-frontier-official-294x300.png",
  label: "Giraffes!",
  description: "Giraffes are funny looking!",
  }]
}

var element = React.createElement(ThumbnailList, options);

ReactDOM.render(element, document.querySelector('.target'));
