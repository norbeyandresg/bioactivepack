import React from "react";
import Head from "next/head";
import Script from "next/script";
const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>{props.pageTitle}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      </Head>
      <div>{props.children}</div>
      <div className="text-center lh-1">
        <p>
          {" "}
          <span className="fw-bold">© 2021 Copyright:</span> Proyecto de grado
          Ingenieria Bioquimica
        </p>
        <p>Isabella Bedoya - Isabella Munera</p>
      </div>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossOrigin="anonymous"
      ></Script>
    </div>
  );
};
export default Layout;
