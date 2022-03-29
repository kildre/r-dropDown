import { Link } from 'react-router-dom';
import './Button.scss';

export default function Button() {
  return (
    <Link to="sign-up">
      <button className="btn">Sign Up</button>
    </Link>
  );
}
