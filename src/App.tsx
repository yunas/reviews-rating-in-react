import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import ProTip from "./ProTip";
import EssayScreen from "./Components/EssayScreen";
import BasicModal from "./Components/BasicModal";
import AlertDialog from "./Components/AlertDialog";

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
  const [shouldShowAlertDialog, setShouldShowAlertDialog] = React.useState(false);

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
          setAlertTitle(siteFeedbackTitle);
          setShouldShowStarsModal(false);
          showStarsModal();
        }
        else{
          setSiteFeedback(value);
          setShouldShowStarsModal(false);
          if (essayFeedback == 5 && value == 5){
            setShouldShowAlertDialog(true);
          }  
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
      {shouldShowAlertDialog && <AlertDialog callback={trustPilotHandler}/>}

    </Container>
  );
}
