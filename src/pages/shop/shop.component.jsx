import React, { useEffect } from "react";
import CollectionsOverview from "../../Components/collections-overview/collections-overview.component";

import { connect } from "react-redux";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

import { Route } from "react-router-dom";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionPageContainer from "../collection/collection.container";

const ShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className="shop-page">
      {/*we put match.path (as a variable) in route, because in this way we make it
    more flexible if we wnt to reuse it in onother place. but we can put
    (/shop/...)*/}
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      {/*the following expression allows us to access the categoryId as a parameter on the match object */}
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
