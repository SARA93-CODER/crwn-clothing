import React from "react";
import CollectionsOverview from "../../Components/collections-overview/collections-overview.component";

import { Route } from "react-router-dom";
import CollectionPage from "../collection/collection.component";

const ShopPage = ({ match }) => {
  <div className="shop-page">
    {/*we put match.path (as a variable) in route, because in this way we make it
    more flexible if we wnt to reuse it in onother place. but we can put
    (/shop/...)*/}
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    {/*the following expression allows us to access the categoryId as a parameter on the match object */}
    <Route
      exact
      path={`${match.path}/:collectionId`}
      component={CollectionPage}
    />
  </div>;
};

export default ShopPage;
