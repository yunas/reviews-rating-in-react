import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import ProTip from "./ProTip";
import EssayScreen from "./Components/EssayScreen";
import BasicModal from "./Components/BasicModal";

const starRatingsUpdatedHandler = (value: number) => {
  console.log(value);
}

export default function App() {
  const [shouldShowStarsModal, setShouldShowStarsModal] = React.useState(false);
  const [essayFeedback, setEssayFeedback] = React.useState(0);
  const [siteFeedback, setSiteFeedback] = React.useState(0);
  const essayFeedbackTitle: string = 'Please provide your feedback on auto-generated Essay';
  const siteFeedbackTitle: string = 'How satisfied are you with Smodin services?';
  const [alertTitle, setAlertTitle] = React.useState(essayFeedbackTitle);

  const showStarsModal = () => {
    setTimeout(() => {
      setShouldShowStarsModal(true);
    }, 700);
   }
  
    React.useEffect(() => {
      showStarsModal();
    }, []);

    const starRatingsUpdatedHandler = (value: number) => {
      if (value > 0){
        if (essayFeedback == 0){
          setEssayFeedback(value);
          console.log('essayFeedback => ', essayFeedback);
  
          setAlertTitle(siteFeedbackTitle);
          setShouldShowStarsModal(false);
          showStarsModal();
        }
        else{
          setSiteFeedback(value);
          setShouldShowStarsModal(false);
        }
      }
    };
  
    const trustPilotHandler = () => {
        console.log('Please hit the api here');
    }


  return (
    <Container maxWidth="sm">
      <EssayScreen />
      {shouldShowStarsModal && <BasicModal title={alertTitle} callback={starRatingsUpdatedHandler} />}

    </Container>
  );
}
