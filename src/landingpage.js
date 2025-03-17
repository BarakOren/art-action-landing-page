import React from "react";
import styled from "styled-components";
import CandyMall from "./Assets/candymall.webp"
import Benefit from "./Assets/benefit.png"
import Pizza194 from "./Assets/pizza194.jpg"
import Mercaz from "./Assets/mercaz.jpg"
import FruitsCo from "./Assets/fruitsco.png"
import Carmellita from "./Assets/carmellita.jpg"
import Mp4 from "./Assets/video.mp4";

const Container = styled.div`
  background: black;
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Headline = styled.h1`
  font-size: 27px;
  text-align: center;
`;

const SubHeadline = styled.h2`
  font-size: 18px;
  text-align: center;
`;

const VideoContainer = styled.div`
  width: 100%;
  max-width: 400px;
`;

const Video = styled.video`
  width: 100%;
  border-radius: 10px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 300px;
  margin-top: 20px;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px;
  background: #fe3e3e;
  color: white;
  font-size: 16px;
  border: none;
  cursor: pointer;
`;

const CompaniesSection = styled.div`
  margin-top: 40px;
  text-align: center;
`;

const CompaniesTitle = styled.h3`
  font-size: 18px;
`;

const CompaniesLogos = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  flex-wrap: wrap;
  margin-top: 10px;
`;

const CompanyLogo = styled.img`
  width: auto;
  height: 60px;
  margin: 10px;
`;

const LandingPage = () => {
  return (
    <Container>
      <Headline>אז מה באמת קורה כשיש לך גרפיטי ואומנות בעסק שלך?</Headline>
<SubHeadline>דמיינו את עצמכם יוצאים לקנות נעליים והגעתם לשני חנויות מתחרות.
<br/>
<br/>
באחת עיצוב רגיל עם תמונה מודפסת של נייק, בשניה? קיר ענק עם גרפיטי חי ובועט, העין שלכם לא תאמין למה שהיא רואה. כל תשומת הלב שלכם נתפסת ולא תרצו לעזוב, ולמה זה? כי קיבלתם חוויה ברמה אחרת.
</SubHeadline>
      <VideoContainer>
        <Video controls>
          <source src={Mp4} type="video/mp4" />
          Your browser does not support the video tag.
        </Video>
      </VideoContainer>
      <Form action="/thank-you">
        <Input type="text" placeholder="שם מלא" required />
        <Input type="number" placeholder="מספר פלאפון" required />
        <Button type="submit">שליחה</Button>
      </Form>
      <CompaniesSection>
        <CompaniesTitle>לקוחותינו</CompaniesTitle>
        <CompaniesLogos>
          <CompanyLogo src={CandyMall} alt="Company 1" />
          <CompanyLogo src={Pizza194} alt="Company 2" />
          <CompanyLogo src={Benefit} alt="Company 3" />
          <CompanyLogo src={Mercaz} alt="Company 4" />
          <CompanyLogo src={FruitsCo} alt="Company 5" />
          <CompanyLogo src={Carmellita} alt="Company 6" />
          
        </CompaniesLogos>
      </CompaniesSection>
    </Container>
  );
};

export default LandingPage;