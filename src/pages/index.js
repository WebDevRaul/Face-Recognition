import React from "react";

import Layout from "../layout/Layout";
import SEO from "../utils/seo";
import Home from "../components/home/Home";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Home />
  </Layout>
)

export default IndexPage;