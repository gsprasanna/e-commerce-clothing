import React, { Component } from "react";

import MenuItem from "../menu-item/menu-item.component";
import "./menu-container.styles.scss";

class MenuContainer extends Component {
  constructor(props) {
    super();
    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1,
          linkUrl: "Hats",
        },
        {
          title: "jackets",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 2,
          linkUrl: "",
        },
        {
          title: "sneakers",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 3,
          linkUrl: "",
        },
        {
          title: "womens",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          size: "large",
          id: 4,
          linkUrl: "",
        },
        {
          title: "mens",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          size: "large",
          id: 5,
          linkUrl: "",
        },
      ],
    };
  }

  render() {
    return (
      <div className="menu-container">
        {this.state.sections.length > 0
          ? this.state.sections.map(({ title, imageUrl, size, id }) => {
              return (
                <MenuItem
                  key={id}
                  title={title}
                  imageUrl={imageUrl}
                  size={size}
                />
              );
            })
          : null}
      </div>
    );
  }
}

export default MenuContainer;
