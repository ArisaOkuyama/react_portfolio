import React, { useContext } from "react";
import "../stylesheets/AboutMe.css";
import StateContext from "../store";
import resume from "../img/resume202009.pdf";
import jpResume from "../img/jpresume.pdf";

const AboutMe = () => {
  const { store, dispatch } = useContext(StateContext);

  function onClick() {
    if (store.language) {
      dispatch({ type: "setLanguage", data: false });
    } else {
      dispatch({ type: "setLanguage", data: true });
    }
  }

  return (
    <>
      <div className="aboutme-wrapper" id="aboutme">
        <div className="aboutme-header">
          <div className="button" onClick={onClick}></div>
          <div className="button2" onClick={onClick}></div>
          <h2>{store.language ? "ABOUT ME" : "自己紹介"}</h2>
          <div className="image-deco">
            <div className="deco"></div>
            <img
              className="profile-photo"
              alt="me"
              src={require("../img/profile.jpg")}
            />
          </div>
        </div>
        <div className="aboutme-body">
          <div className="profile-1">
            <h5>
              {store.language ? "MY NAME IS ARISA." : "奥山　有彩と申します。"}
            </h5>
            <span>
              {store.language
                ? `I enjoy the process of progressing and overcoming challenges, then moving onto the next one.
                 The more I learn about coding, the more fascinating it gets and more motivated I feel to get better at it.`
                : "オーストラリアのプログラミングスクールCoder Academy今年卒業しました。現在はオーストラリアに住んでいますが、２０２０年内に日本（北海道）への帰国予定です。リモートプログラマーとしてフルタイムの仕事を探しています。"}
              <br></br>
              {store.language
                ? `Ideally I would love to be a part of a company/team that is improving the worlds environmental issues.
                I am passionate about our world becoming more sustainable for the future generations. 
                I feel the tech industry is diverse, and we can help through many ways to promote environmental efficiency.`
                : `７年間オーストラリア在住で身に付けたビジネス英語、
                 英語を生かしたプログラミング用語のドキュメンテーションの読解力、
                 ４年間カフェ経営から得たコミュニケーション力、
                これら私の強みを生かして今後プログラマーとしてのキャリアを積みたい と思っています。`}
            </span>
            <br></br>
            <span>
              {store.language
                ? `I have had my own business running a cafe from 2014 to 2018, so I am no stranger to dedication.
            I chose to change my career into Tech not only because of the challenge, but also the diversity and endless possibilities of the industry.`
                : ""}
            </span>
          </div>
          <div className="profile-1">
            <div className="profilesection">
              <a href={`${store.language ? resume : jpResume}`} target="_blank">
                <h5>{store.language ? "RESUME" : "履歴書"}</h5>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
