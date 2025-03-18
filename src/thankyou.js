import styled from "styled-components";
import Mp4 from "./Assets/video.mp4";
import CoverPhoto from "./Assets/coverphoto.jpg"

const Container = styled.div`
  background: black;
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Logo = styled.img`
  width: 80px;
  height: auto;
`;

const Headline = styled.h1`
  font-size: 24px;
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

const ThankYouPage = () => {
  return (
    <Container>
      <Headline>תודה! צוות ארט אקשן חוזר אליך בהקדם.</Headline>
      <VideoContainer>
        <Video poster={CoverPhoto} controls>
           <source src={Mp4} type="video/mp4" />
          Your browser does not support the video tag.
        </Video>
      </VideoContainer>
    </Container>
  );
};

export default ThankYouPage;
