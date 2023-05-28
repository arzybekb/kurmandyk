import React from "react";
import styles from "./AboutVideoPlayer.module.css";
import styled from "@emotion/styled";
import VideoCard from "./VideoCard";
import { useTranslation } from "react-i18next";

const AboutVideoPlayer = ({ refOf }) => {
  const { t } = useTranslation();
  const videos = [
    {
      videoId: "r_Az_VdTt20",
      title:
        "Нурлан устаз. Пайгамбарыбыз (сав) Айша (р.а) энебизге курмандык тууралуу эмне деген?",
    },
    { videoId: "NvIOqX921CA", title: "Адал жүрүп малың бак." },
    { videoId: "DkEkPAMRVjQ", title: "Садыр устаз Курман айт." },
    { videoId: "Mbcuvk9VYPo", title: "Нурлан устаз. Курмандык тууралу далил." },
    {
      videoId: "8vEDVmP9HmA",
      title:
        "Нурлан устаз. Пайгамбарыбыз (сав) курбандыгыңарды чонойткула деген.",
    },
    {
      videoId: "r_Az_VdTt20",
      title: "Нурлан устаз  курбан деген эмне?",
    },
    {
      videoId: "kUqi8AaKhYA",
      title: "Курман айттын дагы бир жөрөлгөсү - курмандык чалуу.",
    },
  ];
  return (
    <div ref={refOf} className={styles.container}>
      <h3>{t("nav.video")}</h3>
      <div className={styles.wrap}>
        {videos.map((video) => (
          <Card>
            <VideoCard
              key={video.videoId}
              videoId={video.videoId}
              title={video.title}
            />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AboutVideoPlayer;

const Card = styled.div`
  width: 25rem;
  padding: 15px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px,
    rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
`;
