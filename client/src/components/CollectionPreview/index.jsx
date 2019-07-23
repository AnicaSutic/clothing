import React from "react";
import "./index.scss";
import CollectionItem from "../CollectionItem";
import { withRouter } from "react-router-dom";

function CollectionPreview(props) {
  const { title, items, routeName, history } = props;
  console.log(routeName);
  return (
    <div className="collection-preview">
      <h1
        className="title"
        onClick={() => history.push(`${props.match.url}/${routeName}`)}
      >
        {title.toUpperCase()}
      </h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
}

export default withRouter(CollectionPreview);
