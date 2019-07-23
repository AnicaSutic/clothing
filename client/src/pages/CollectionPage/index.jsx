import React from "react";
import "./index.scss";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shopSelector";
import CollectionItem from "../../components/CollectionItem";
//import { firestore } from "../../firebase/firebase.utils";

const CollectionPage = ({ collection }) => {


  // when collection changes
  // useEffect(() => {
  //   const unsubscribeFromCollections = firestore.collection('collections').onSnapshot(snapshot => console.log(snapshot))
  //   return () => {
  //     unsubscribeFromCollections()
  //   }
  // },[]);

  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state) // to pass url param
});

export default connect(
  mapStateToProps,
  null
)(CollectionPage);
