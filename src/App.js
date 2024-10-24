import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react';

import Form from './Form';
import GreetingCard from './GreetingCard';

function App() {
  const [cardInfo, setCardInfo] = useState(null);

  function handleSubmission(cardInfoFromFormComponent) {
    setCardInfo(cardInfoFromFormComponent);
  }

  return (
    <div className="App">
      <Form onDone={handleSubmission} />
      {cardInfo && <GreetingCard card={cardInfo} />}
    </div>
  );
}

export default App;
