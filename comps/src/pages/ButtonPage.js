import { GoAlert, GoCircleSlash, GoCloudDownload } from 'react-icons/go';
import Button from '../components/Button';

function ButtonPage() {
  const handleClick = () => {};

  return (
    <div>
      <div>
        <Button success rounded outline className="my-5" onClick={handleClick}>
          <GoCloudDownload />
          Button 1
        </Button>
      </div>
      <div>
        <Button danger outline onMouseEnter={handleClick}>
          <GoCircleSlash />
          Button 2
        </Button>
      </div>
      <div>
        <Button warning onMouseLeave={handleClick}>
          <GoAlert />
          Button 3
        </Button>
      </div>
      <div>
        <Button secondary outline>
          <GoCloudDownload />
          Button 4
        </Button>
      </div>
      <div>
        <Button primary rounded>
          <GoAlert />
          Button 5
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
