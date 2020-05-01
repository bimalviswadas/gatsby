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


          <div role="main" className="UtePc RCETm" dir="ltr">
            <section id="h.INITIAL_GRID.16u21t8drtdf" className="yaqOZd LB7kq cJgDec nyKByd O13XJf" style={{}}>
              <div className="Nu95r">
                <div className="yaqOZd IFuOkc"
                     style={{'background-size': `cover`, 'background-position': `center center`, 'background-image': `url(https://lh3.googleusercontent.com/sFc2v4zY8IBHZLLb8WYsrmv5NLc5BpUrMm59hsC28B0Trtdrl4P2EIsk9-imnFKXFyeCVuv1=w16383)`}}
                     jsname="LQX2Vd"></div>
              </div>
              <div className="mYVXT">
                <div className="LS81yb VICjCf" tabIndex="-1">
                  <div className="hJDwNd-AhqUyc-OiUrBf purZT-AhqUyc-II5mzb pSzOP-AhqUyc-qWD73c JNdkSc">
                    <div className="JNdkSc-SmKAyb">
                      <div className="" jscontroller="sGwD4d" jsaction="zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;"
                           jsname="F57UId">
                        <div className="oKdM2c Kzv0Me">
                          <div id="h.INITIAL_GRID.9q3zh5ky46u"
                               className="hJDwNd-AhqUyc-OiUrBf jXK9ad D2fZ2 OjCsFc wHaque GNzUNc">
                            <div className="jXK9ad-SmKAyb">
                              <div className="tyJCtd mGzaTb baZpAe lkHyyc"><h1 id="h.g530fyo91jg"
                                                                               dir="ltr"
                                                                               className="zfr3Q duRjpb"
                                                                               style={{'text-align': `left`}}>
                                <span style={{'font-family': `Lato`}}><strong>Coronavirus </strong></span>
                              </h1>
                                <h2 id="h.ppy0n38ay94j" dir="ltr" className="zfr3Q JYVBee"
                                    style={{'text-align': `left`}}><span
                                  style={{'font-family': `Lato`, 'font-size': `34px`, 'font-style': `normal`, 'font-weight': `300`, 'text-decoration': `normal`, 'vertical-align': `baseline`}}>Advice and Guidance for School Communities</span></h2></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hJDwNd-AhqUyc-II5mzb JNdkSc L6cTce-purZT L6cTce-pSzOP">
                    <div className="JNdkSc-SmKAyb">
                      <div className="" jscontroller="sGwD4d" jsaction="zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;"
                           jsname="F57UId"></div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

{/*
            <section id="h.2d526fa59647530e_237" className="yaqOZd" style={{}}>
              <div className="yaqOZd IFuOkc"></div>
              <div className="mYVXT">
                <div className="LS81yb VICjCf" tabIndex="-1">
                  <div className="hJDwNd-AhqUyc-qWD73c purZT-AhqUyc-II5mzb pSzOP-AhqUyc-qWD73c JNdkSc yYI8W ">
                    <div className="JNdkSc-SmKAyb">
                      <div className="" jscontroller="sGwD4d" jsaction="zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;"
                           jsname="F57UId">
                        <div className="oKdM2c Kzv0Me">
                          <div id="h.2d526fa59647530e_247"
                               className="hJDwNd-AhqUyc-qWD73c jXK9ad D2fZ2 OjCsFc">
                            <div className="jXK9ad-SmKAyb">
                              <div className="tyJCtd OWlOyc baZpAe">
                                <div jscontroller="VYKRW" jsaction="rcuQ6b:rcuQ6b;">
                                  <div className="WIdY2d M1aSXe">
                                    <div jsname="WXxXjd"
                                         style={{'padding-top': '56.3549160671%'}}></div>
                                    <iframe jsname="L5Fo6c" className="YMEQtf"
                                            sandbox="allow-scripts allow-popups allow-forms allow-same-origin allow-popups-to-escape-sandbox"
                                            frameBorder="0"
                                            aria-label="YouTube Video, John Jackson Schools Announcement v2"
                                            src="https://www.youtube.com/embed/WTgQ6keprSw"
                                            allowFullScreen></iframe>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="oKdM2c">
                          <div id="h.2d526fa59647530e_251"
                               className="hJDwNd-AhqUyc-qWD73c jXK9ad D2fZ2 wHaque QaN0Zc">
                            <div className="jXK9ad-SmKAyb">
                              <div className="tyJCtd N0neUc baZpAe">
                                <div role="presentation" className="U26fgb L7IXhc QmpIrf"
                                     jscontroller="VXdfxd"
                                     jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;"
                                     jsshadow
                                     aria-label="Alternative video link for the above clip"
                                     aria-disabled="false"
                                     data-tooltip="Alternative video link for the above clip"
                                     data-tooltip-vertical-offset="-12"
                                     data-tooltip-horizontal-offset="0"><a
                                  className="FKF6mc TpQm9d QmpIrf"
                                  href="https://www.google.com/url?q=https%3A%2F%2Flgfl.planetestream.com%2FView.aspx%3Fid%3D4052~4l~LsqgFjRc&amp;sa=D&amp;sntz=1&amp;usg=AFQjCNEoJwZtb-groTVXyt--3Uf3Q6N8wQ"
                                  target="_blank"
                                  aria-label="Alternative video link for the above clip">
                                  <div className="NsaAfc"><p>Alternative video link for the
                                    above clip</p></div>
                                  <div className="wvnY3c" jsname="ksKsZd"></div>
                                </a></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hJDwNd-AhqUyc-qWD73c purZT-AhqUyc-II5mzb pSzOP-AhqUyc-qWD73c JNdkSc">
                    <div className="JNdkSc-SmKAyb">
                      <div className="" jscontroller="sGwD4d" jsaction="zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;"
                           jsname="F57UId">
                        <div className="oKdM2c Kzv0Me">
                          <div id="h.2d526fa59647530e_243"
                               className="hJDwNd-AhqUyc-qWD73c jXK9ad D2fZ2 OjCsFc wHaque GNzUNc">
                            <div className="jXK9ad-SmKAyb">
                              <div className="tyJCtd mGzaTb baZpAe">
                                <h2 id="h.ybbbvt3udg2w" dir="ltr" className="zfr3Q JYVBee"
                                    style={{'margin-left': '0', 'margin-right': '0', 'padding-left': '0', 'text-align': 'left', 'text-indent': '0'}}
                                    tabIndex="-1">
                                  <div jscontroller="Ae65rd"
                                       jsaction="touchstart:UrsOsc; click:KjsqPd; focusout:QZoaZ; mouseover:y0pDld; mouseout:dq0hvd;fv1Rjc:jbFSOd;CrfLRd:SzACGe;"
                                       className="CjVfdc">
                                    <div className="PPhIP rviiZ" jsname="haAclf">
                                      <div role="presentation"
                                           className="U26fgb mUbCce fKz7Od LRAOtb rm120e"
                                           jscontroller="mxS5xe"
                                           jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;"
                                           jsshadow aria-describedby="h.ybbbvt3udg2w"
                                           aria-label="Copy heading link"
                                           aria-disabled="false"
                                           data-tooltip="Copy heading link"
                                           aria-hidden="true"
                                           data-tooltip-position="top"
                                           data-tooltip-vertical-offset="12"
                                           data-tooltip-horizontal-offset="0"><a
                                        className="FKF6mc TpQm9d"
                                        href="#h.ybbbvt3udg2w"
                                        aria-label="Copy heading link"
                                        jsname="hiK3ld" role="button"
                                        aria-describedby="h.ybbbvt3udg2w">
                                        <div className="VTBa7b MbhUzd"
                                             jsname="ksKsZd"></div>
                                        <span jsslot className="xjKiLb"><span
                                          className="Ce1Y1c" style={{'top': '-11px'}}><svg
                                          className="OUGEr uav4k" width="22px"
                                          height="22px" viewBox="0 0 24 24"
                                          fill="currentColor"
                                          focusable="false"><path
                                          d="M0 0h24v24H0z" fill="none"/><path
                                          d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/></svg></span></span></a>
                                      </div>
                                    </div>
                                    <span
                                      style={{'font-family': 'Lato'}}><strong>LGfL CEO John Jackson explains how </strong></span><span
                                    style={{'font-family': 'Lato'}}><strong>LGfL is helping schools during school closures</strong></span>
                                  </div>
                                </h2>
                                <p dir="ltr" className="zfr3Q"
                                   style={{'margin-left': '0', 'margin-right': '0', 'padding-left': '0', 'text-align': 'left', 'text-indent': '0'}}>
                                  During this challenging time, LGfL is working hard to
                                  provide support for schools. We created this website to
                                  provide guidance and resources for those supporting
                                  school communities through the current Covid‑ 19
                                  outbreak. </p>
                                <p dir="ltr" className="zfr3Q"
                                   style={{'margin-left': '0', 'margin-right': '0', 'padding-left': '0', 'text-align': 'left', 'text-indent': '0'}}>
                                  Read an overview of LGfL&#39;s support for schools
                                  below, and use the menu to find dedicated sections for
                                  different groups within the school community. The pages
                                  will be updated regularly, so check back frequently for
                                  the latest information.</p>
                                <p dir="ltr" className="zfr3Q"
                                   style={{'margin-left': '0', 'margin-right': '0', 'padding-left': '0', 'text-align': 'left', 'text-indent': '0'}}>
                                  Click here for more information about the ways in which
                                  LGfL is supporting schools and families. </p></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

*/}

              <main>{children}</main>

            <section id="h.487011c73f25af95_0" className="yaqOZd lQAHbd" style={{}}>
              <div className="yaqOZd IFuOkc"></div>
              <div className="mYVXT">
                <div className="LS81yb VICjCf" tabIndex="-1">
                  <div className="hJDwNd-AhqUyc-uQSCkd purZT-AhqUyc-II5mzb pSzOP-AhqUyc-qWD73c JNdkSc">
                    <div className="JNdkSc-SmKAyb">
                      <div className="" jscontroller="sGwD4d" jsaction="zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;"
                           jsname="F57UId">
                        <div className="oKdM2c Kzv0Me">
                          <div id="h.487011c73f25af95_3"
                               className="hJDwNd-AhqUyc-uQSCkd jXK9ad D2fZ2 OjCsFc wHaque GNzUNc">
                            <div className="jXK9ad-SmKAyb">
                              <div className="tyJCtd mGzaTb baZpAe">
                                <h2 id="h.3l6ebfmwqtn" dir="ltr" className="zfr3Q JYVBee"
                                    tabIndex="-1">
                                  <div jscontroller="Ae65rd"
                                       jsaction="touchstart:UrsOsc; click:KjsqPd; focusout:QZoaZ; mouseover:y0pDld; mouseout:dq0hvd;fv1Rjc:jbFSOd;CrfLRd:SzACGe;"
                                       className="CjVfdc">
                                    <div className="PPhIP rviiZ" jsname="haAclf">
                                      <div role="presentation"
                                           className="U26fgb mUbCce fKz7Od LRAOtb rm120e"
                                           jscontroller="mxS5xe"
                                           jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;"
                                           jsshadow aria-describedby="h.3l6ebfmwqtn"
                                           aria-label="Copy heading link"
                                           aria-disabled="false"
                                           data-tooltip="Copy heading link"
                                           aria-hidden="true"
                                           data-tooltip-position="top"
                                           data-tooltip-vertical-offset="12"
                                           data-tooltip-horizontal-offset="0"><a
                                        className="FKF6mc TpQm9d"
                                        href="#h.3l6ebfmwqtn"
                                        aria-label="Copy heading link"
                                        jsname="hiK3ld" role="button"
                                        aria-describedby="h.3l6ebfmwqtn">
                                        <div className="VTBa7b MbhUzd"
                                             jsname="ksKsZd"></div>
                                        <span jsslot className="xjKiLb"><span
                                          className="Ce1Y1c" style={{'top': '-11px'}}><svg
                                          className="OUGEr uav4k" width="22px"
                                          height="22px" viewBox="0 0 24 24"
                                          fill="currentColor"
                                          focusable="false"><path
                                          d="M0 0h24v24H0z" fill="none"/><path
                                          d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/></svg></span></span></a>
                                      </div>
                                    </div>
                                    Support from LGfL
                                  </div>
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="h.3f1ae9d5eaf7e1f7_50" className="yaqOZd cJgDec nyKByd" style={{}}>
              <div className="yaqOZd IFuOkc"
                   style={{'background-size': 'cover', 'background-position': 'center center', 'background-image': 'url(https://lh3.googleusercontent.com/MShta9awZQ-KAD4DG2KPahMJTR-3R3eIF0irc7XoN1nL81CWfbTc-oUdXkMVlzVr2ObHLBI=w16383)'}}></div>
              <div className="mYVXT">
                <div className="LS81yb VICjCf" tabIndex="-1">
                  <div className="hJDwNd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf JNdkSc yYI8W ">
                    <div className="JNdkSc-SmKAyb">
                      <div className="" jscontroller="sGwD4d" jsaction="zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;"
                           jsname="F57UId">
                        <div className="oKdM2c Kzv0Me">
                          <div id="h.5a8fbabe4df29a7d_15"
                               className="hJDwNd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf jXK9ad D2fZ2 OjCsFc GNzUNc">
                            <div className="jXK9ad-SmKAyb">
                              <div className="tyJCtd mGzaTb baZpAe">
                                <h2 id="h.px1paqq7nphd" dir="ltr" className="zfr3Q JYVBee"
                                    style={{'text-align': 'center'}} tabIndex="-1">
                                  <div jscontroller="Ae65rd"
                                       jsaction="touchstart:UrsOsc; click:KjsqPd; focusout:QZoaZ; mouseover:y0pDld; mouseout:dq0hvd;fv1Rjc:jbFSOd;CrfLRd:SzACGe;"
                                       className="CjVfdc">
                                    <div className="PPhIP rviiZ" jsname="haAclf">
                                      <div role="presentation"
                                           className="U26fgb mUbCce fKz7Od LRAOtb rm120e"
                                           jscontroller="mxS5xe"
                                           jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;"
                                           jsshadow aria-describedby="h.px1paqq7nphd"
                                           aria-label="Copy heading link"
                                           aria-disabled="false"
                                           data-tooltip="Copy heading link"
                                           aria-hidden="true"
                                           data-tooltip-position="top"
                                           data-tooltip-vertical-offset="12"
                                           data-tooltip-horizontal-offset="0"><a
                                        className="FKF6mc TpQm9d"
                                        href="#h.px1paqq7nphd"
                                        aria-label="Copy heading link"
                                        jsname="hiK3ld" role="button"
                                        aria-describedby="h.px1paqq7nphd">
                                        <div className="VTBa7b MbhUzd"
                                             jsname="ksKsZd"></div>
                                        <span jsslot className="xjKiLb"><span
                                          className="Ce1Y1c" style={{'top': '-11px'}}><svg
                                          className="OUGEr uav4k" width="22px"
                                          height="22px" viewBox="0 0 24 24"
                                          fill="currentColor"
                                          focusable="false"><path
                                          d="M0 0h24v24H0z" fill="none"/><path
                                          d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/></svg></span></span></a>
                                      </div>
                                    </div>
                                    <span style={{'font-family': 'Lato'}}><strong>Inspire</strong></span>
                                  </div>
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="oKdM2c">
                          <div id="h.3f1ae9d5eaf7e1f7_71"
                               className="hJDwNd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf jXK9ad D2fZ2">
                            <div className="jXK9ad-SmKAyb">
                              <div className="tyJCtd baZpAe">
                                <div className="t3iYD"><a href="/homelearning"><img
                                  src="https://lh3.googleusercontent.com/Yuh6LwzOFlEASpbSw9sxeoKXZIUOnLh-oBdHNLBBdJE1qGTkrlx6vjxo04EQnzE78y__Q5PaX7BRPujNIWtK-9RwSLK-YbcuUfvSagEb0clHj3c70No=w1280"
                                  className="CENy8b"/></a></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="oKdM2c">
                          <div id="h.3f1ae9d5eaf7e1f7_55"
                               className="hJDwNd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf jXK9ad D2fZ2 wHaque GNzUNc">
                            <div className="jXK9ad-SmKAyb">
                              <div className="tyJCtd mGzaTb baZpAe">
                                <h3 id="h.wrbx6y9iyk1s" dir="ltr" className="zfr3Q OmQG5e"
                                    style={{'text-align': 'center'}} tabIndex="-1">
                                  <div jscontroller="Ae65rd"
                                       jsaction="touchstart:UrsOsc; click:KjsqPd; focusout:QZoaZ; mouseover:y0pDld; mouseout:dq0hvd;fv1Rjc:jbFSOd;CrfLRd:SzACGe;"
                                       className="CjVfdc">
                                    <div className="PPhIP rviiZ" jsname="haAclf">
                                      <div role="presentation"
                                           className="U26fgb mUbCce fKz7Od LRAOtb rm120e"
                                           jscontroller="mxS5xe"
                                           jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;"
                                           jsshadow aria-describedby="h.wrbx6y9iyk1s"
                                           aria-label="Copy heading link"
                                           aria-disabled="false"
                                           data-tooltip="Copy heading link"
                                           aria-hidden="true"
                                           data-tooltip-position="top"
                                           data-tooltip-vertical-offset="12"
                                           data-tooltip-horizontal-offset="0"><a
                                        className="FKF6mc TpQm9d"
                                        href="#h.wrbx6y9iyk1s"
                                        aria-label="Copy heading link"
                                        jsname="hiK3ld" role="button"
                                        aria-describedby="h.wrbx6y9iyk1s">
                                        <div className="VTBa7b MbhUzd"
                                             jsname="ksKsZd"></div>
                                        <span jsslot className="xjKiLb"><span
                                          className="Ce1Y1c" style={{'top': '-11px'}}><svg
                                          className="OUGEr uav4k" width="22px"
                                          height="22px" viewBox="0 0 24 24"
                                          fill="currentColor"
                                          focusable="false"><path
                                          d="M0 0h24v24H0z" fill="none"/><path
                                          d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/></svg></span></span></a>
                                      </div>
                                    </div>
                                    <span className="aw5Odc"
                                          style={{'text-decoration': 'underline'}}><a
                                      className="XqQF9c" href="/homelearning">Home Learning</a></span>
                                  </div>
                                </h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hJDwNd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf JNdkSc yYI8W ">
                    <div className="JNdkSc-SmKAyb">
                      <div className="" jscontroller="sGwD4d" jsaction="zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;"
                           jsname="F57UId">
                        <div className="oKdM2c Kzv0Me">
                          <div id="h.5a8fbabe4df29a7d_3"
                               className="hJDwNd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf jXK9ad D2fZ2 OjCsFc GNzUNc">
                            <div className="jXK9ad-SmKAyb">
                              <div className="tyJCtd mGzaTb baZpAe">
                                <h2 id="h.91owqfxo36j0" dir="ltr" className="zfr3Q JYVBee"
                                    style={{'text-align': 'center'}} tabIndex="-1">
                                  <div jscontroller="Ae65rd"
                                       jsaction="touchstart:UrsOsc; click:KjsqPd; focusout:QZoaZ; mouseover:y0pDld; mouseout:dq0hvd;fv1Rjc:jbFSOd;CrfLRd:SzACGe;"
                                       className="CjVfdc">
                                    <div className="PPhIP rviiZ" jsname="haAclf">
                                      <div role="presentation"
                                           className="U26fgb mUbCce fKz7Od LRAOtb rm120e"
                                           jscontroller="mxS5xe"
                                           jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;"
                                           jsshadow aria-describedby="h.91owqfxo36j0"
                                           aria-label="Copy heading link"
                                           aria-disabled="false"
                                           data-tooltip="Copy heading link"
                                           aria-hidden="true"
                                           data-tooltip-position="top"
                                           data-tooltip-vertical-offset="12"
                                           data-tooltip-horizontal-offset="0"><a
                                        className="FKF6mc TpQm9d"
                                        href="#h.91owqfxo36j0"
                                        aria-label="Copy heading link"
                                        jsname="hiK3ld" role="button"
                                        aria-describedby="h.91owqfxo36j0">
                                        <div className="VTBa7b MbhUzd"
                                             jsname="ksKsZd"></div>
                                        <span jsslot className="xjKiLb"><span
                                          className="Ce1Y1c" style={{'top': '-11px'}}><svg
                                          className="OUGEr uav4k" width="22px"
                                          height="22px" viewBox="0 0 24 24"
                                          fill="currentColor"
                                          focusable="false"><path
                                          d="M0 0h24v24H0z" fill="none"/><path
                                          d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/></svg></span></span></a>
                                      </div>
                                    </div>
                                    <span style={{'font-family': 'Lato'}}><strong>DigiSafe</strong></span>
                                  </div>
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="oKdM2c">
                          <div id="h.3f1ae9d5eaf7e1f7_72"
                               className="hJDwNd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf jXK9ad D2fZ2">
                            <div className="jXK9ad-SmKAyb">
                              <div className="tyJCtd baZpAe">
                                <div className="t3iYD"><a href="/safeguarding"><img
                                  src="https://lh4.googleusercontent.com/Um4agYnRr1XvWT9xTP4waK-t-XLa4Q_wRO-XjdgH7u6BJWAPH0Svites7lc-YqL6TmpOMg2KpBAkoWIudhwdIhSRYM0Et2qImy8lpbxqJFhAEP39Afo=w1280"
                                  className="CENy8b"/></a></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="oKdM2c">
                          <div id="h.3f1ae9d5eaf7e1f7_60"
                               className="hJDwNd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf jXK9ad D2fZ2 wHaque GNzUNc">
                            <div className="jXK9ad-SmKAyb">
                              <div className="tyJCtd mGzaTb baZpAe">
                                <h3 id="h.35r92hctutkp" dir="ltr" className="zfr3Q OmQG5e"
                                    style={{'text-align': 'center'}} tabIndex="-1">
                                  <div jscontroller="Ae65rd"
                                       jsaction="touchstart:UrsOsc; click:KjsqPd; focusout:QZoaZ; mouseover:y0pDld; mouseout:dq0hvd;fv1Rjc:jbFSOd;CrfLRd:SzACGe;"
                                       className="CjVfdc">
                                    <div className="PPhIP rviiZ" jsname="haAclf">
                                      <div role="presentation"
                                           className="U26fgb mUbCce fKz7Od LRAOtb rm120e"
                                           jscontroller="mxS5xe"
                                           jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;"
                                           jsshadow aria-describedby="h.35r92hctutkp"
                                           aria-label="Copy heading link"
                                           aria-disabled="false"
                                           data-tooltip="Copy heading link"
                                           aria-hidden="true"
                                           data-tooltip-position="top"
                                           data-tooltip-vertical-offset="12"
                                           data-tooltip-horizontal-offset="0"><a
                                        className="FKF6mc TpQm9d"
                                        href="#h.35r92hctutkp"
                                        aria-label="Copy heading link"
                                        jsname="hiK3ld" role="button"
                                        aria-describedby="h.35r92hctutkp">
                                        <div className="VTBa7b MbhUzd"
                                             jsname="ksKsZd"></div>
                                        <span jsslot className="xjKiLb"><span
                                          className="Ce1Y1c" style={{'top': '-11px'}}><svg
                                          className="OUGEr uav4k" width="22px"
                                          height="22px" viewBox="0 0 24 24"
                                          fill="currentColor"
                                          focusable="false"><path
                                          d="M0 0h24v24H0z" fill="none"/><path
                                          d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/></svg></span></span></a>
                                      </div>
                                    </div>
                                    <span className="aw5Odc"
                                          style={{'text-decoration': 'underline'}}><a
                                      className="XqQF9c" href="/safeguarding">Safeguarding</a></span>
                                  </div>
                                </h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hJDwNd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf JNdkSc yYI8W ">
                    <div className="JNdkSc-SmKAyb">
                      <div className="" jscontroller="sGwD4d" jsaction="zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;"
                           jsname="F57UId">
                        <div className="oKdM2c Kzv0Me">
                          <div id="h.5a8fbabe4df29a7d_7"
                               className="hJDwNd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf jXK9ad D2fZ2 OjCsFc GNzUNc">
                            <div className="jXK9ad-SmKAyb">
                              <div className="tyJCtd mGzaTb baZpAe">
                                <h2 id="h.cbcd23qzpadx" dir="ltr" className="zfr3Q JYVBee"
                                    style={{'text-align': 'center'}} tabIndex="-1">
                                  <div jscontroller="Ae65rd"
                                       jsaction="touchstart:UrsOsc; click:KjsqPd; focusout:QZoaZ; mouseover:y0pDld; mouseout:dq0hvd;fv1Rjc:jbFSOd;CrfLRd:SzACGe;"
                                       className="CjVfdc">
                                    <div className="PPhIP rviiZ" jsname="haAclf">
                                      <div role="presentation"
                                           className="U26fgb mUbCce fKz7Od LRAOtb rm120e"
                                           jscontroller="mxS5xe"
                                           jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;"
                                           jsshadow aria-describedby="h.cbcd23qzpadx"
                                           aria-label="Copy heading link"
                                           aria-disabled="false"
                                           data-tooltip="Copy heading link"
                                           aria-hidden="true"
                                           data-tooltip-position="top"
                                           data-tooltip-vertical-offset="12"
                                           data-tooltip-horizontal-offset="0"><a
                                        className="FKF6mc TpQm9d"
                                        href="#h.cbcd23qzpadx"
                                        aria-label="Copy heading link"
                                        jsname="hiK3ld" role="button"
                                        aria-describedby="h.cbcd23qzpadx">
                                        <div className="VTBa7b MbhUzd"
                                             jsname="ksKsZd"></div>
                                        <span jsslot className="xjKiLb"><span
                                          className="Ce1Y1c" style={{'top': '-11px'}}><svg
                                          className="OUGEr uav4k" width="22px"
                                          height="22px" viewBox="0 0 24 24"
                                          fill="currentColor"
                                          focusable="false"><path
                                          d="M0 0h24v24H0z" fill="none"/><path
                                          d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/></svg></span></span></a>
                                      </div>
                                    </div>
                                    <span style={{'font-family': 'Lato'}}><strong>IncludED</strong></span>
                                  </div>
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="oKdM2c">
                          <div id="h.3f1ae9d5eaf7e1f7_73"
                               className="hJDwNd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf jXK9ad D2fZ2">
                            <div className="jXK9ad-SmKAyb">
                              <div className="tyJCtd baZpAe">
                                <div className="t3iYD"><img
                                  src="https://lh5.googleusercontent.com/PE-Pqx82ef4th8ajbh0Pps9GcZ5FRERVySUX9Us1tg-KW0xA4BoGSObrcT0e0OMS8QJf-giT341lwzxD692m1GXSRVhFy5Afgt5OYgXW8qeXua3QHp9B=w1280"
                                  className="CENy8b" role="img"/></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="oKdM2c">
                          <div id="h.3f1ae9d5eaf7e1f7_65"
                               className="hJDwNd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf jXK9ad D2fZ2 wHaque GNzUNc">
                            <div className="jXK9ad-SmKAyb">
                              <div className="tyJCtd mGzaTb baZpAe">
                                <h3 id="h.iz46m6mxsvfx" dir="ltr" className="zfr3Q OmQG5e"
                                    style={{'text-align': 'center'}} tabIndex="-1">
                                  <div jscontroller="Ae65rd"
                                       jsaction="touchstart:UrsOsc; click:KjsqPd; focusout:QZoaZ; mouseover:y0pDld; mouseout:dq0hvd;fv1Rjc:jbFSOd;CrfLRd:SzACGe;"
                                       className="CjVfdc">
                                    <div className="PPhIP rviiZ" jsname="haAclf">
                                      <div role="presentation"
                                           className="U26fgb mUbCce fKz7Od LRAOtb rm120e"
                                           jscontroller="mxS5xe"
                                           jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;"
                                           jsshadow aria-describedby="h.iz46m6mxsvfx"
                                           aria-label="Copy heading link"
                                           aria-disabled="false"
                                           data-tooltip="Copy heading link"
                                           aria-hidden="true"
                                           data-tooltip-position="top"
                                           data-tooltip-vertical-offset="12"
                                           data-tooltip-horizontal-offset="0"><a
                                        className="FKF6mc TpQm9d"
                                        href="#h.iz46m6mxsvfx"
                                        aria-label="Copy heading link"
                                        jsname="hiK3ld" role="button"
                                        aria-describedby="h.iz46m6mxsvfx">
                                        <div className="VTBa7b MbhUzd"
                                             jsname="ksKsZd"></div>
                                        <span jsslot className="xjKiLb"><span
                                          className="Ce1Y1c" style={{'top': '-11px'}}><svg
                                          className="OUGEr uav4k" width="22px"
                                          height="22px" viewBox="0 0 24 24"
                                          fill="currentColor"
                                          focusable="false"><path
                                          d="M0 0h24v24H0z" fill="none"/><path
                                          d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/></svg></span></span></a>
                                      </div>
                                    </div>
                                    <span className="aw5Odc"
                                          style={{'text-decoration': 'underline'}}><a
                                      className="XqQF9c" href="/Inclusion">Inclusion and Wellbeing</a></span>
                                  </div>
                                </h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hJDwNd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf JNdkSc yYI8W ">
                    <div className="JNdkSc-SmKAyb">
                      <div className="" jscontroller="sGwD4d" jsaction="zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;"
                           jsname="F57UId">
                        <div className="oKdM2c Kzv0Me">
                          <div id="h.5a8fbabe4df29a7d_11"
                               className="hJDwNd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf jXK9ad D2fZ2 OjCsFc GNzUNc">
                            <div className="jXK9ad-SmKAyb">
                              <div className="tyJCtd mGzaTb baZpAe">
                                <h2 id="h.nf33k22k2doq" dir="ltr" className="zfr3Q JYVBee"
                                    style={{'text-align': 'center'}} tabIndex="-1">
                                  <div jscontroller="Ae65rd"
                                       jsaction="touchstart:UrsOsc; click:KjsqPd; focusout:QZoaZ; mouseover:y0pDld; mouseout:dq0hvd;fv1Rjc:jbFSOd;CrfLRd:SzACGe;"
                                       className="CjVfdc">
                                    <div className="PPhIP rviiZ" jsname="haAclf">
                                      <div role="presentation"
                                           className="U26fgb mUbCce fKz7Od LRAOtb rm120e"
                                           jscontroller="mxS5xe"
                                           jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;"
                                           jsshadow aria-describedby="h.nf33k22k2doq"
                                           aria-label="Copy heading link"
                                           aria-disabled="false"
                                           data-tooltip="Copy heading link"
                                           aria-hidden="true"
                                           data-tooltip-position="top"
                                           data-tooltip-vertical-offset="12"
                                           data-tooltip-horizontal-offset="0"><a
                                        className="FKF6mc TpQm9d"
                                        href="#h.nf33k22k2doq"
                                        aria-label="Copy heading link"
                                        jsname="hiK3ld" role="button"
                                        aria-describedby="h.nf33k22k2doq">
                                        <div className="VTBa7b MbhUzd"
                                             jsname="ksKsZd"></div>
                                        <span jsslot className="xjKiLb"><span
                                          className="Ce1Y1c" style={{'top': '-11px'}}><svg
                                          className="OUGEr uav4k" width="22px"
                                          height="22px" viewBox="0 0 24 24"
                                          fill="currentColor"
                                          focusable="false"><path
                                          d="M0 0h24v24H0z" fill="none"/><path
                                          d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/></svg></span></span></a>
                                      </div>
                                    </div>
                                    <span style={{'font-family': 'Lato'}}><strong>CyberCloud</strong></span>
                                  </div>
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="oKdM2c">
                          <div id="h.3f1ae9d5eaf7e1f7_74"
                               className="hJDwNd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf jXK9ad D2fZ2">
                            <div className="jXK9ad-SmKAyb">
                              <div className="tyJCtd baZpAe">
                                <div className="t3iYD"><a href="/security"><img
                                  src="https://lh5.googleusercontent.com/BBUW9yPnfW8kcuWfV1KPgdnHaRdMhEZ-Aorp4rbYLavtAoSCqwQyBJdZJEa9dV-HEbFFKivyvfNPMVJi6gzG7GqNdsBmz3EkYlH3TqrR_09YsXZzuAs=w1280"
                                  className="CENy8b"/></a></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="oKdM2c">
                          <div id="h.3f1ae9d5eaf7e1f7_70"
                               className="hJDwNd-AhqUyc-c5RTEf purZT-AhqUyc-c5RTEf pSzOP-AhqUyc-c5RTEf jXK9ad D2fZ2 wHaque GNzUNc">
                            <div className="jXK9ad-SmKAyb">
                              <div className="tyJCtd mGzaTb baZpAe">
                                <h3 id="h.w69mr8w1l8xt" dir="ltr" className="zfr3Q OmQG5e"
                                    style={{'text-align': 'center'}} tabIndex="-1">
                                  <div jscontroller="Ae65rd"
                                       jsaction="touchstart:UrsOsc; click:KjsqPd; focusout:QZoaZ; mouseover:y0pDld; mouseout:dq0hvd;fv1Rjc:jbFSOd;CrfLRd:SzACGe;"
                                       className="CjVfdc">
                                    <div className="PPhIP rviiZ" jsname="haAclf">
                                      <div role="presentation"
                                           className="U26fgb mUbCce fKz7Od LRAOtb rm120e"
                                           jscontroller="mxS5xe"
                                           jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;"
                                           jsshadow aria-describedby="h.w69mr8w1l8xt"
                                           aria-label="Copy heading link"
                                           aria-disabled="false"
                                           data-tooltip="Copy heading link"
                                           aria-hidden="true"
                                           data-tooltip-position="top"
                                           data-tooltip-vertical-offset="12"
                                           data-tooltip-horizontal-offset="0"><a
                                        className="FKF6mc TpQm9d"
                                        href="#h.w69mr8w1l8xt"
                                        aria-label="Copy heading link"
                                        jsname="hiK3ld" role="button"
                                        aria-describedby="h.w69mr8w1l8xt">
                                        <div className="VTBa7b MbhUzd"
                                             jsname="ksKsZd"></div>
                                        <span jsslot className="xjKiLb"><span
                                          className="Ce1Y1c" style={{'top': '-11px'}}><svg
                                          className="OUGEr uav4k" width="22px"
                                          height="22px" viewBox="0 0 24 24"
                                          fill="currentColor"
                                          focusable="false"><path
                                          d="M0 0h24v24H0z" fill="none"/><path
                                          d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/></svg></span></span></a>
                                      </div>
                                    </div>
                                    <span className="aw5Odc"
                                          style={{'text-decoration': 'underline'}}><a
                                      className="XqQF9c" href="/security">Digital Security</a></span>
                                  </div>
                                </h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="h.27156bb81bab0629_33" className="yaqOZd lQAHbd" style={{}}>
              <div className="yaqOZd IFuOkc"></div>
              <div className="mYVXT">
                <div className="LS81yb VICjCf" tabIndex="-1">
                  <div className="hJDwNd-AhqUyc-uQSCkd purZT-AhqUyc-II5mzb pSzOP-AhqUyc-qWD73c JNdkSc">
                    <div className="JNdkSc-SmKAyb">
                      <div className="" jscontroller="sGwD4d" jsaction="zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;"
                           jsname="F57UId">
                        <div className="oKdM2c Kzv0Me">
                          <div id="h.27156bb81bab0629_30"
                               className="hJDwNd-AhqUyc-uQSCkd jXK9ad D2fZ2 OjCsFc wHaque GNzUNc">
                            <div className="jXK9ad-SmKAyb">
                              <div className="tyJCtd mGzaTb baZpAe">
                                <h2 id="h.iacs2vtt910g" dir="ltr" className="zfr3Q JYVBee"
                                    tabIndex="-1">
                                  <div jscontroller="Ae65rd"
                                       jsaction="touchstart:UrsOsc; click:KjsqPd; focusout:QZoaZ; mouseover:y0pDld; mouseout:dq0hvd;fv1Rjc:jbFSOd;CrfLRd:SzACGe;"
                                       className="CjVfdc">
                                    <div className="PPhIP rviiZ" jsname="haAclf">
                                      <div role="presentation"
                                           className="U26fgb mUbCce fKz7Od LRAOtb rm120e"
                                           jscontroller="mxS5xe"
                                           jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;"
                                           jsshadow aria-describedby="h.iacs2vtt910g"
                                           aria-label="Copy heading link"
                                           aria-disabled="false"
                                           data-tooltip="Copy heading link"
                                           aria-hidden="true"
                                           data-tooltip-position="top"
                                           data-tooltip-vertical-offset="12"
                                           data-tooltip-horizontal-offset="0"><a
                                        className="FKF6mc TpQm9d"
                                        href="#h.iacs2vtt910g"
                                        aria-label="Copy heading link"
                                        jsname="hiK3ld" role="button"
                                        aria-describedby="h.iacs2vtt910g">
                                        <div className="VTBa7b MbhUzd"
                                             jsname="ksKsZd"></div>
                                        <span jsslot className="xjKiLb"><span
                                          className="Ce1Y1c" style={{'top': '-11px'}}><svg
                                          className="OUGEr uav4k" width="22px"
                                          height="22px" viewBox="0 0 24 24"
                                          fill="currentColor"
                                          focusable="false"><path
                                          d="M0 0h24v24H0z" fill="none"/><path
                                          d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/></svg></span></span></a>
                                      </div>
                                    </div>
                                    Top Picks and Latest Updates
                                  </div>
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/*CONTENTS FOR TOP PICKS */}
          </div>
          <div className="Xpil1b"></div>
          {/*FOOTER*/}
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


      <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
