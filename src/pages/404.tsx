import * as React from 'react';
import { Link } from '../components';

const NotFoundPage: React.FC = () => {
  return (
    <div>
      <div>404</div>
      <Link to="/">Go to home</Link>
    </div>
  );
};

export default NotFoundPage;
