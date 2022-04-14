import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Layout } from "antd";
import HeaderMain from "../components/HeaderMain";
import FullpageBG from "../components/main/FullpageBG";
import MainText from "../components/main/MainText";
const { Footer, Sider, Content } = Layout;

export default function Home() {
  return (
    <Layout className="fullpage">
      <FullpageBG />
      <HeaderMain />
      <Content
        style={{
          padding: "0 20px",
          marginTop: 20,
          maxWidth: 1190,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          margin: "20px auto",
        }}
      >
        <MainText />
      </Content>
    </Layout>
  );
}
