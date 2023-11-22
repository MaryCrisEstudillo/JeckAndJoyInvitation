
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import CardPage from './cardPage';

function Pages() {
  return (
    <Router>
      <Route path="/" component={<App/>} />
      <Route path="/main" component={<CardPage/>} />
    </Router>
  );
}

export default Pages;