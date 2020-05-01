import React from "react"
import {Link} from "gatsby"
import {graphql, StaticQuery} from 'gatsby';

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
// import "../components/govuk-frontend-3.6.0.min.css"

export const query = graphql`
  query allNodeArticle {
    allNodeArticle {
      edges {
        node {
          id
          title
          body {
            value
            format
            processed
            summary
          }
        }
      }
    }
  }
`

const IndexPage = ({data}) => (
  <Layout>

    <div role="main" className="UtePc RCETm" dir="ltr">
      <section id="h.INITIAL_GRID.16u21t8drtdf" className="yaqOZd LB7kq cJgDec nyKByd O13XJf" style={{}}>
        <div className="Nu95r">
          <div className="yaqOZd IFuOkc"
               style={{'backgroundSize': `cover`, 'backgroundPosition': `center center`, 'backgroundImage': `url(images/banner.png)`}}
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

      {data.allNodeArticle.edges.map(({node}) => (
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
                                    style={{'margin-left': '0', 'marginRight': '0', 'padding-left': '0', 'text-align': 'left', 'text-indent': '0'}}
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
                                      style={{'font-family': 'Lato'}}><strong>{node.title}</strong></span>
                                  </div>
                                </h2>
                                <div className="" dangerouslySetInnerHTML={{__html: node.body.value}}/>
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
      ))}




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
             style={{'backgroundSize': 'cover', 'backgroundPosition': 'center center', 'backgroundImage': 'url(images/background.png)'}}></div>
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
                            src="images/homelearning.png"
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
                            src="images/safeguarding.png"
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
                            src="images/inclusion.png"
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
                            src="images/digital.png"
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




{/*    <br/><br/>
    <div className="govuk-width-container">
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]}/>
      <div>
        <h2 className={"govuk-heading-l"}>Articles from drupal:</h2>
        {data.allNodeArticle.edges.map(({node}) => (
          <div>
            <h3 className={""}>{node.title}</h3>
            <div className="" dangerouslySetInnerHTML={{__html: node.body.value}}/>
          </div>
        ))}
      </div>*/}

{/*      <h1 className={"govuk-heading-xl"}>Hi people</h1>
      <p className="govuk-body">Welcome to your new Gatsby site.</p>
      <p className="govuk-body">Now go build something great.</p>
      <div style={{maxWidth: `300px`, marginBottom: `1.45rem`}}>
        <Image/>
      </div>
      <div className="govuk-grid-row">
        <div className="govuk-grid-column-one-half">
          <Link to="/page-2/" class="govuk-link">Go to page 2</Link>
          <br/><br/><br/>
          <Link to="/page-3" class="govuk-link">London Learning</Link>
          <br/><br/><br/>
          <Link to="/article/first" class="govuk-link">Drupal article 1</Link>
          <br/><br/><br/>
          <Link to="/article/second" class="govuk-link">Drupal article 2</Link>
          <br/><br/><br/>
          <Link to="/article/third" class="govuk-link">Drupal article 3</Link>
          <br/><br/><br/><br/>
        </div>
      </div>*/}


  </Layout>
)
/* GOVUK
const IndexPage = ({data}) => (
  <Layout>
    <br/><br/>
    <div className="govuk-width-container">
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]}/>
      <div>
        <h2 className={"govuk-heading-l"}>Articles from drupal:</h2>
        {data.allNodeArticle.edges.map(({node}) => (
          <div>
            <h3 className={"govuk-heading-m"}>{node.title}</h3>
            <div className="govuk-body" dangerouslySetInnerHTML={{__html: node.body.value}}/>
          </div>
        ))}
      </div>

      <h1 className={"govuk-heading-xl"}>Hi people</h1>
      <p className="govuk-body">Welcome to your new Gatsby site.</p>
      <p className="govuk-body">Now go build something great.</p>
      <div style={{maxWidth: `300px`, marginBottom: `1.45rem`}}>
        <Image/>
      </div>
      <div className="govuk-grid-row">
        <div className="govuk-grid-column-one-half">
          <Link to="/page-2/" class="govuk-link">Go to page 2</Link>
          <br/><br/><br/>
          <Link to="/page-3" class="govuk-link">London Learning</Link>
          <br/><br/><br/>
          <Link to="/article/first" class="govuk-link">Drupal article 1</Link>
          <br/><br/><br/>
          <Link to="/article/second" class="govuk-link">Drupal article 2</Link>
          <br/><br/><br/>
          <Link to="/article/third" class="govuk-link">Drupal article 3</Link>
          <br/><br/><br/><br/>
        </div>
      </div>
    </div>
  </Layout>
)
*/

export default IndexPage
