/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import {useStaticQuery, graphql, Link} from "gatsby"

import Header from "./header"
import Head from "./head"
import Footer from './footer';

// import "./layout.css"
// import "./style.scss"
// import "./govuk-frontend-3.6.0.min.css"
// <link rel="stylesheet" href="govuk-frontend-3.6.0.min.css">
import "./lgfl.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Head/>

      <div jsname="tiN4bf">
        <div className="M63kCb"></div>
        <div className="fktJzd AKpWA fOU46b yMcSQd Ly6Unf G9Qloe XeSM4" jsname="UzWXSb" jscontroller="Md9ENb"
             jsaction="gsiSmd:Ffcznf;yj5fUd:cpPetb;HNXL3:q0Vyke;rcuQ6b:WYd;">

      <Header siteTitle={data.site.siteMetadata.title} />

{/*      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>*/}
{/*GATSBY footer*/}
   {/*   </div>*/}
          <main>{children}</main>

          <div className="Xpil1b"></div>

          {/*FOOTER*/}
          <Footer/>


          <div jscontroller="j1RDQb" jsaction="rcuQ6b:rcuQ6b;MxH79b:JdcaS;FaOgy:XuHpsb;" className="dZA9kd ynRLnc"
               data-last-updated-at-time="1588003201986">
            <div role="button" className="U26fgb JRtysb WzwrXb I12f0b K2mXPb zXBiaf ynRLnc" jscontroller="iSvg6e"
                 jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventMouseEvents=true|preventDefault=true); touchcancel:JMtRjd;;keydown:I481le;"
                 jsshadow jsname="Bg3gkf" aria-label="Site actions" aria-disabled="false" tabIndex="0"
                 aria-haspopup="true" aria-expanded="false" data-menu-corner="bottom-start"
                 data-anchor-corner="top-start">
              <div className="NWlf3e MbhUzd" jsname="ksKsZd"></div>
              <span jsslot className="MhXXcc oJeWuf"><span className="Lw7GHd snByac"><svg width="24" height="24"
                                                                                          viewBox="0 0 24 24"
                                                                                          focusable="false"
                                                                                          className=" NMm5M"><path
                d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z"/></svg></span></span>
              <div jsname="xl07Ob" style={{'display':'none'}} aria-hidden="true">
                <div className="JPdR6b hVNH5c" jscontroller="uY3Nvd"
                     jsaction="IpSVtb:TvD9Pc;fEN2Ze:xzS4ub;frq95c:LNeFm;cFpp9e:J9oOtd; click:H8nU8b; mouseup:H8nU8b; keydown:I481le; keypress:Kr2w4b; blur:O22p3e; focus:H8nU8b"
                     role="menu" tabIndex="0" style={{'position':'fixed'}}>
                  <div className="XvhY1d" jsaction="mousedown:p8EH2c; touchstart:p8EH2c;">
                    <div className="JAPqpe K0NPx"><span jsslot className="z80M1 FeRvI"
                                                        jsaction="click:o6ZaF(preventDefault=true); mousedown:lAhnzb; mouseup:Osgxgf; mouseenter:SKyDAe; mouseleave:xq3APb;touchstart:jJiBRc; touchmove:kZeBdd; touchend:VfAz8(preventMouseEvents=true)"
                                                        jsname="j7LFlb"
                                                        data-disabled-tooltip="Report abuse is not available in preview mode"
                                                        aria-label="Report abuse" role="menuitem"
                                                        tabIndex="-1"><div className="aBBjbd MbhUzd"
                                                                           jsname="ksKsZd"></div><div
                      className="uyYuVb oJeWuf" jscontroller="HYv29e" jsaction="JIbuQc:dQ6O0c;"
                      jsname="xx9PJb"
                      data-abuse-proto="%.@.null,null,&quot;https://sites.google.com/lgfl.net/coronavirus/home&quot;,null,null,[]
,[]
]
"><div className="jO7h3c">Report abuse</div></div></span><span jsslot className="z80M1 FeRvI"
                                                               jsaction="click:o6ZaF(preventDefault=true); mousedown:lAhnzb; mouseup:Osgxgf; mouseenter:SKyDAe; mouseleave:xq3APb;touchstart:jJiBRc; touchmove:kZeBdd; touchend:VfAz8(preventMouseEvents=true)"
                                                               jsname="j7LFlb" aria-label="Page details" role="menuitem"
                                                               tabIndex="-1"><div className="aBBjbd MbhUzd"
                                                                                  jsname="ksKsZd"></div><div
                      className="uyYuVb oJeWuf" jsaction="JIbuQc:hriXLd;" jsname="Rg8K2c"><div
                      className="jO7h3c">Page details</div></div></span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div jscontroller="j1RDQb"
               jsaction="focusin:gBxDVb(srlkmf); focusout:zvXhGb(srlkmf); click:ro2KTd(psdQ5e),Toy3n(V2zOu);JIbuQc:DSypkd(Bg3gkf);MxH79b:JdcaS;rcuQ6b:rcuQ6b;"
               className="LqzjUe ynRLnc" data-last-updated-at-time="1588003201986">
            <div jsname="psdQ5e" className="Q0cSn"></div>
            <div jsname="bN97Pc" className="hBW7Hb">
              <div role="button" className="U26fgb mUbCce fKz7Od kpPxtd QMuaBc" jscontroller="VXdfxd"
                   jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventMouseEvents=true|preventDefault=true); touchcancel:JMtRjd;"
                   jsshadow jsname="Bg3gkf" aria-label="Site actions" aria-disabled="false" tabIndex="-1"
                   aria-hidden="true">
                <div className="VTBa7b MbhUzd" jsname="ksKsZd"></div>
                <span jsslot className="xjKiLb"><span className="Ce1Y1c" style={{'top': '-12px'}}><svg width="24"
                                                                                                       height="24"
                                                                                                       viewBox="0 0 24 24"
                                                                                                       focusable="false"
                                                                                                       className=" NMm5M"><path
                  d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z"/></svg></span></span>
              </div>
              <div jsname="srlkmf" className="hUphyc">
                <div className="YkaBSd">
                  <div className="iBkmkf"><span>Page updated</span> <span jsname="CFIm1b" className="dji00c"
                                                                          jsaction="AHmuwe:eGiyHb; mouseover:eGiyHb;"
                                                                          tabIndex="0"
                                                                          role="contentinfo"></span></div>
                </div>
                <div className="YkaBSd" jscontroller="HYv29e" jsaction="click:dQ6O0c;"
                     data-abuse-proto="%.@.null,null,&quot;https://sites.google.com/lgfl.net/coronavirus/home&quot;,null,null,[]
,[]
]
">
                  <div role="button" className="U26fgb kpPxtd J7BuEb" jsshadow aria-label="Report abuse"
                       aria-disabled="false" tabIndex="0">Report abuse
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
