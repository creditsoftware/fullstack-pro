/// <reference path='../../../../../typings/index.d.ts' />

import * as React from 'react';
import serialize from 'serialize-javascript';
import { HelmetData } from 'react-helmet';
import modules from '../../modules';

/**
 * A simple herlper function to prepare the HTML markup. This loads:
 *      - Page title
 *      - SEO meta tags
 *      - Preloaded state (for Redux, Apollo, additional Environment variables) depending on the current route
 *      - Code-split script tags depending on the current route
 * @param param0
 */
const Html = ({
    content,
    state,
    reduxState,
    fela,
    env,
    assetMap,
    styleSheet,
    helmet,
}:
    { content?: any, state: any, reduxState: any, assetMap?: string[], env: any, fela?: any, styleSheet?: any[], helmet?: HelmetData }) => {
    const htmlAttrs = helmet.htmlAttributes.toComponent(); // react-helmet html document tags
    const bodyAttrs = helmet.bodyAttributes.toComponent(); // react-helmet body document tags

    return (
        <html lang="en" {...htmlAttrs}>
            <head>
                {helmet.title.toComponent()}
                {helmet.meta.toComponent()}
                {helmet.link.toComponent()}
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css" />
                <link rel="icon" type="image/png" href={`${assetMap['favicon-32x32.png']}`} sizes="32x32" />
                <link rel="icon" type="image/png" href={`${assetMap['favicon-16x16.png']}`} sizes="16x16" />
                <link rel="manifest" href={`${assetMap['manifest.xjson']}`} />
                <link rel="mask-icon" href={`${assetMap['safari-pinned-tab.svg']}`} color="#5bbad5" />
                <link rel="shortcut icon" href={`${assetMap['favicon.ico']}`} />
                <meta name="msapplication-config" content={`${assetMap['browserconfig.xml']}`} />
                {<link rel="stylesheet" type="text/css" href={`${assetMap['index.css']}`} />}
                {assetMap['vendor.css'] && <link rel="stylesheet" type="text/css" href={`${assetMap['vendor.css']}`} />}
                <style id="font-stylesheet" />
                {!!__DEV__ && (
                    <style
                        dangerouslySetInnerHTML={{
                            __html: modules.stylesInserts.map(style => style._getCss()).join(''),
                        }}
                    />
                )}
                {styleSheet.map(({ type, rehydration, css, media, support }) => (
                    <style
                        id="stylesheet"
                        dangerouslySetInnerHTML={{ __html: css }}
                        data-fela-rehydration={rehydration}
                        data-fela-type={type}
                        data-fela-support={support}
                        key={`${type}-${media}`}
                        media={media}
                    />
                ))}
                {modules.scriptsInserts.map((script, i) => {
                    if (script) {
                        return <script key={i} src={script} />;
                    }
                })}
            </head>
            <body {...bodyAttrs}>
                <div id="root"/>
                <div className="demo">
                    <div
                        id="content"
                        dangerouslySetInnerHTML={
                            {
                                __html: content ||
                                    'Try building the app:<br/> ...and refreshing this page!',
                            }}
                    />
                </div>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `window.__ENV__=${serialize(env, {
                            isJSON: true,
                        })};`,
                    }}
                    charSet="UTF-8"
                />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `window.__APOLLO_STATE__=${serialize(state, {
                            isJSON: true,
                        })};`,
                    }}
                    charSet="UTF-8"
                />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `window.__PRELOADED_STATE__=${serialize(reduxState, {
                            isJSON: true,
                        })};`,
                    }}
                    charSet="UTF-8"
                />
                {assetMap['vendor.js'] && <script src={`${assetMap['vendor.js']}`} charSet="utf-8" />}
                <script src={`${assetMap['index.js']}`} charSet="utf-8" />
            </body>
        </html>
    );
};

export { Html };
