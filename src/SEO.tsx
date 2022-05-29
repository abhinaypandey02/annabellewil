import * as React from "react";
import {graphql, useStaticQuery} from "gatsby";
import {Helmet} from "react-helmet"

export default function SEO(props: { title?: string }) {
    const {site} = useStaticQuery(query);
    const {
        defaultTitle, defaultDescription
    } = site.siteMetadata
    const seo = {
        title: (props.title?props.title+" | ":"")+ defaultTitle,
        description: defaultDescription,
    }
    return <Helmet title={seo.title} htmlAttributes={{
        lang: 'fr',
    }}>
        <meta name="description" content={seo.description}/>
        {seo.title && <meta property="og:title" content={seo.title}/>}
        {seo.description && (<meta property="og:description" content={seo.description}/>)}
        <meta name="keywords" content="GED Test Online, Online Ged Test, Ged Test, Ged Online, Ged from home,"/>
        <meta name="geo.region" content="FR"/>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="language" content="French"/>
        <meta charSet="UTF-8"/>
    </Helmet>
}
const query = graphql`
query {
        site
        {
            siteMetadata
            {
                defaultTitle: title
                defaultDescription: description
            }
        }
    }
`