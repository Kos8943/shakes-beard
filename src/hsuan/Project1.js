import React from "react";
import "./Project1.css";
import Sid from "../Sid";
import Script from "react-load-script";
import search from "./icon/search.svg";
// import original from './icon/original.jpg';
// import Breadcrumb from './component/Breadcrumb'
import Pagination from "./component/Pagination";
import CatesAside from "./component/CatesAside";
import Cards from "./component/Cards";
import Sorts from "./component/Sorts";
import Cates from "./component/Cates";
import Banner from "./component/Banner";

import {
  Container,
  Row,
  Breadcrumb,
  Col,
  Button,
  Navbar,
  Form,
  FormControl,
  Accordion,
  Card,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Project1() {
  return (
    <>
      {/* <Sid/> */}
      <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
          Library
        </Breadcrumb.Item>
        <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
          Data
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Data</Breadcrumb.Item>
      </Breadcrumb>

      <Row></Row>
      <div className="PgaeWraper">
        <div className="background">
          <section class="SectionTile brand-SectionCover">
            <div class="SectionTile__container">
              <div
                class="brand-SectionCover__mainfinished"
                data-anime="fadeInRight"
                data-anime-trigger=".brand-SectionCover__main"
              >
                <img
                  src={require("./icon/original.jpg")}
                  className="card-img-top"
                  alt="..."
                ></img>
              </div>
              <div class="brand-SectionCover__layout">
                <div
                  class="brand-SectionCover__titlefinished"
                  data-anime="fadeInLeft"
                  data-anime-trigger=".brand-SectionCover__main"
                  data-anime-delay="0.3"
                >
                  <div class="_card">
                    <div class="_wrap">
                      <h1 class="_inner">
                        <div class="_title1">BRAND</div>
                        <div class="_title2">
                          <div class="_b">Pole Pole</div>
                        </div>
                      </h1>
                    </div>
                  </div>
                </div>
                <div class="brand-SectionCover__body">
                  <div
                    class="_text2-typesquare_optionfinished"
                    data-anime="fadeInRight"
                    data-anime-trigger=".brand-SectionCover__main"
                    data-anime-delay="0.9"
                  >
                    革メーカーと度重なる試行の末、開発したオイルを効かせた姫路レザーを贅沢に使用し、日本生産にこだわり、熟練の職人が最新の技術で縫製しております。使い込むほどに革本来の味わいを愛着を持って楽しんでいただけ、時代を問わずカジュアルなスタイリングにマッチするアイテムになっております。
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <section class="SectionTile brand-SectionProduct">
          <div class="SectionTile__container">
            <div class="brand-ProductItems">
              <div class="brand-ProductItems__items">
                <div
                  class="brand-ProductItems__itemfinished"
                  data-anime="fadeInUp"
                  data-anime-trigger=".brand-ProductItems"
                  data-anime-delay="0"
                >
                  <div class="brand-ProductItems__card">
                    <a href="../product/1" class="brand-ProductItems__image">
                      <div class="_image">
                        {/* <img
          src={require("./icon/original.jpg")}
          className="card-img-top"
          alt="..."></img> */}
                      </div>
                    </a>
                    <div class="brand-ProductItems__body">
                      <div class="_no">
                        <span class="_code">614028</span>
                        <span class="_series">ジョラス</span>
                      </div>
                      <div class="_name typesquare_option">
                        姫路レザー角型リュック
                      </div>
                      <div class="_price">¥25,000</div>
                    </div>
                  </div>
                </div>
                <div
                  class="brand-ProductItems__item finished"
                  data-anime="fadeInUp"
                  data-anime-trigger=".brand-ProductItems"
                  data-anime-delay="0.2">
                  <div class="brand-ProductItems__card">
                    <a href="../product/2" class="brand-ProductItems__image">
                      <div class="_image">
                        <img
                          src={require("./icon/original.jpg")}
                          className="card-img-top"
                          alt="..."
                        ></img>
                      </div>
                    </a>
                    <div class="brand-ProductItems__body">
                      <div class="_no">
                        <span class="_code">614079</span>
                        <span class="_series">ジョラス</span>
                      </div>
                      <div class="_name typesquare_option">
                        姫路レザー手提げバッグ
                      </div>
                      <div class="_price">¥19,000</div>
                    </div>
                  </div>
                </div>
                <div
                  class="brand-ProductItems__item finished"
                  data-anime="fadeInUp"
                  data-anime-trigger=".brand-ProductItems"
                  data-anime-delay="0.4">
                  <div class="brand-ProductItems__card">
                    <a href="../product/3" class="brand-ProductItems__image">
                      <div class="_image">
                        <img
                          src={require("./icon/original.jpg")}
                          className="card-img-top"
                          alt="..."
                        ></img>
                      </div>
                    </a>
                    <div class="brand-ProductItems__body">
                      <div class="_no">
                        <span class="_code">614077</span>
                        <span class="_series">アラスカ</span>
                      </div>
                      <div class="_name typesquare_option">
                        ハードレザーショルダー
                      </div>
                      <div class="_price">¥15,000</div>
                    </div>
                  </div>
                </div>
                <div
                  class="brand-ProductItems__item finished"
                  data-anime="fadeInUp"
                  data-anime-trigger=".brand-ProductItems"
                  data-anime-delay="0.6000000000000001">
                  <div class="brand-ProductItems__card">
                    <a href="../product/4" class="brand-ProductItems__image">
                      <div class="_image">
                        <img
                          src={require("./icon/original.jpg")}
                          className="card-img-top"
                          alt="..."
                        ></img>
                      </div>
                    </a>
                    <div class="brand-ProductItems__body">
                      <div class="_no">
                        <span class="_code">614078</span>
                        <span class="_series">アラスカ</span>
                      </div>
                      <div class="_name typesquare_option">
                        ハードレザーリュック
                      </div>
                      <div class="_price">¥20,000</div>
                    </div>
                  </div>
                </div>
                <div
                  class="brand-ProductItems__item finished"
                  data-anime="fadeInUp"
                  data-anime-trigger=".brand-ProductItems"
                  data-anime-delay="0.8">
                  <div class="brand-ProductItems__card">
                    <a href="../product/11" class="brand-ProductItems__image">
                      <div class="_image">
                        <img
                          src={require("./icon/original.jpg")}
                          className="card-img-top"
                          alt="..."
                        ></img>
                      </div>
                    </a>
                    <div class="brand-ProductItems__body">
                      <div class="_no">
                        <span class="_code">720013</span>
                        <span class="_series">ソンティール</span>
                      </div>
                      <div class="_name typesquare_option">
                        姫路レザー手提げバッグ
                      </div>
                      <div class="_price">¥14,800</div>
                    </div>
                  </div>
                </div>
                <div
                  class="brand-ProductItems__item finished"
                  data-anime="fadeInUp"
                  data-anime-trigger=".brand-ProductItems"
                  data-anime-delay="1">
                  <div class="brand-ProductItems__card">
                    <a href="../product/12" class="brand-ProductItems__image">
                      <div class="_image">
                        <img
                          src={require("./icon/original.jpg")}
                          className="card-img-top"
                          alt="..."
                        ></img>
                      </div>
                    </a>
                    <div class="brand-ProductItems__body">
                      <div class="_no">
                        <span class="_code">771295</span>
                        <span class="_series">ソンティール</span>
                      </div>
                      <div class="_name typesquare_option">
                        姫路レザー筒型ショルダー
                      </div>
                      <div class="_price">¥15,000</div>
                    </div>
                  </div>
                </div>
                <div class="brand-ProductItems__item finished"
                  data-anime="fadeInUp"
                  data-anime-trigger=".brand-ProductItems"
                  data-anime-delay="1.2000000000000002">
                  <div class="brand-ProductItems__card">
                    <a href="../product/13" class="brand-ProductItems__image">
                      <div class="_image">
                        <img
                          src={require("./icon/original.jpg")}
                          className="card-img-top"
                          alt="..."
                        ></img>
                      </div>
                    </a>
                    <div class="brand-ProductItems__body">
                      <div class="_no">
                        <span class="_code">771302</span>
                        <span class="_series">ソンティール</span>
                      </div>
                      <div class="_name typesquare_option">
                        姫路レザーリュック
                      </div>
                      <div class="_price">¥24,000</div>
                    </div>
                  </div>
                </div>
                <div class="brand-ProductItems__item finished"
                  data-anime="fadeInUp"
                  data-anime-trigger=".brand-ProductItems"
                  data-anime-delay="1.4000000000000001">
                  <div class="brand-ProductItems__card">
                    <a href="../product/77" class="brand-ProductItems__image">
                      <div class="_image">
                        <img
                          src={require("./icon/original.jpg")}
                          className="card-img-top"
                          alt="..."
                        ></img>
                      </div>
                    </a>
                    <div class="brand-ProductItems__body">
                      <div class="_no">
                        <span class="_code">610202</span>
                        <span class="_series">トロス</span>
                      </div>
                      <div class="_name typesquare_option">
                        姫路レザー抗菌長サイフ
                      </div>
                      <div class="_price">¥16,000</div>
                    </div>
                  </div>
                </div>
                <div class="brand-ProductItems__item finished"
                  data-anime="fadeInUp"
                  data-anime-trigger=".brand-ProductItems"
                  data-anime-delay="1.6">
                  <div class="brand-ProductItems__card">
                    <a href="../product/78" class="brand-ProductItems__image">
                      <div class="_image">
                        <img
                          src={require("./icon/original.jpg")}
                          className="card-img-top"
                          alt="..."
                        ></img>
                      </div>
                    </a>
                    <div class="brand-ProductItems__body">
                      <div class="_no">
                        <span class="_code">610203</span>
                        <span class="_series">トロス</span>
                      </div>
                      <div class="_name typesquare_option">
                        姫路レザー抗菌サイフ
                      </div>
                      <div class="_price">¥12,800</div>
                    </div>
                  </div>
                </div>
              </div>
              <section class="SectionTile brand-SectionOtherBrands">
                <div class="SectionTile__container">
                  <h2 class="TitleA">Other Brands</h2>
                  <div class="brand-BrandCardItems">
                    <div class="brand-BrandCardItems__items">
                      <div class="brand-BrandCardItems__itemfinished"
                        data-anime="fadeInUp"
                        data-anime-trigger=".brand-BrandCardItems"
                        data-anime-delay="0">
                        <a href=".." class="brand-BrandCardItems__card">
                          <div class="brand-BrandCardItems__inner">
                            <div class="brand-BrandCardItems__image">
                              <img
                                src={require("./icon/horizontal.jpg")}
                                className="card-img-top"
                                alt="..."
                              ></img>
                            </div>
                            <div class="brand-BrandCardItems__title">
                              <div class="_inner">
                                <div>A.motion</div>
                              </div>
                            </div>
                          </div>
                        </a>
                        <div class="brand-BrandCardItems__body typesquare_option">
                          革バック、合成皮革バック、パーティー＆フォーマルバックなどを揃えたレディースバッグブランド。
                        </div>
                      </div>
                      <div class="brand-BrandCardItems__itemfinished"
                        data-anime="fadeInUp"
                        data-anime-trigger=".brand-BrandCardItems"
                        data-anime-delay="0.2">
                        <a href=".." class="brand-BrandCardItems__card">
                          <div class="brand-BrandCardItems__inner">
                            <div class="brand-BrandCardItems__image">
                              <img
                                src={require("./icon/horizontal.jpg")}
                                className="card-img-top"
                                alt="..."
                              ></img>
                            </div>
                            <div class="brand-BrandCardItems__title">
                              <div class="_inner">
                                <div>A.motion</div>
                                <div class="_s">made in Japan</div>
                              </div>
                            </div>
                          </div>
                        </a>
                        <div class="brand-BrandCardItems__body typesquare_option">
                          上質な品質の革の風合いを大切にした、日本の熟練の職人によってのみ作り出されるレディースバッグブランド。
                        </div>
                      </div>
                      <div class="brand-BrandCardItems__itemfinished"
                        data-anime="fadeInUp"
                        data-anime-trigger=".brand-BrandCardItems"
                        data-anime-delay="0.4">
                        <a href=".." class="brand-BrandCardItems__card">
                          <div class="brand-BrandCardItems__inner">
                            <div class="brand-BrandCardItems__image">
                              <img
                                src={require("./icon/horizontal.jpg")}
                                className="card-img-top"
                                alt="..."
                              ></img>
                            </div>
                            <div class="brand-BrandCardItems__title">
                              <div class="_inner">
                                <div>Be moved</div>
                              </div>
                            </div>
                          </div>
                        </a>
                        <div class="brand-BrandCardItems__body typesquare_option">
                          日本製にこだわって厳選した素材を用い、デザインパーツに特徴のあるレディースバッグブランド。
                        </div>
                      </div>
                      <div class="brand-BrandCardItems__itemfinished"
                        data-anime="fadeInUp"
                        data-anime-trigger=".brand-BrandCardItems"
                        data-anime-delay="0.6000000000000001">
                        <a href=".." class="brand-BrandCardItems__card">
                          <div class="brand-BrandCardItems__inner">
                            <div class="brand-BrandCardItems__image">
                              <img src={require("./icon/horizontal.jpg")}
                                className="card-img-top"
                                alt="..."></img>
                            </div>
                            <div class="brand-BrandCardItems__title">
                              <div class="_inner">
                                <div>b.v</div>
                              </div>
                            </div>
                          </div>
                        </a>
                        <div class="brand-BrandCardItems__body typesquare_option">
                          ベジタブルタンニン鞣しの本革の素材感を生かすデザインに限定したレディースバッグブランド。
                        </div>
                      </div>
                      <div class="brand-BrandCardItems__itemfinished"
                        data-anime="fadeInUp"
                        data-anime-trigger=".brand-BrandCardItems"
                        data-anime-delay="0.8">
                        <a href=".." class="brand-BrandCardItems__card">
                          <div class="brand-BrandCardItems__inner">
                            <div class="brand-BrandCardItems__image">
                              <img src={require("./icon/horizontal.jpg")}
                                className="card-img-top"
                                alt="..."></img>
                            </div>
                            <div class="brand-BrandCardItems__title">
                              <div class="_inner">
                                <div>NIVAL</div>
                              </div>
                            </div>
                          </div>
                        </a>
                        <div class="brand-BrandCardItems__body typesquare_option">
                          機能性を重視し異素材を組み合わせシーンに適したカジュアルなスタイリングのレディースバッグブランド。
                        </div>
                      </div>
                      <div class="brand-BrandCardItems__itemfinished"
                        data-anime="fadeInUp"
                        data-anime-trigger=".brand-BrandCardItems"
                        data-anime-delay="1">
                        <a href=".." class="brand-BrandCardItems__card">
                          <div class="brand-BrandCardItems__inner">
                            <div class="brand-BrandCardItems__image">
                              <img src={require("./icon/horizontal.jpg")}
                                className="card-img-top"
                                alt="..."></img>
                            </div>
                            <div class="brand-BrandCardItems__title">
                              <div class="_inner">
                                <div>SIMBOLO</div>
                              </div>
                            </div>
                          </div>
                        </a>
                        <div class="brand-BrandCardItems__body typesquare_option">
                          本格レザーを使用したシンプルなデザインを提案。老若男女に幅広く受け入れられるレディースバッグブランド。
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
      </div>
      <a href=".." class="brand-BrandCardItems__card">
        <div class="brand-BrandCardItems__inner">
          <div class="brand-BrandCardItems__image">
            <img src={require("./icon/horizontal2.jpg")}
              className="card-img-top"
              alt="...">
            </img>
          </div>
          <div class="brand-BrandCardItems__title">
            <div class="_inner">
              <div>A.motion</div>
            </div>
          </div>
        </div>
      </a>

      <Container></Container>
    </>
  );
}

export default Project1;
