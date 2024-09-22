import { useEffect, useState } from 'react';
import Loader from './Loader';

function Right(props: { res: string }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(props.res === '');
  }, [props.res]);
  return (
    <div className="right-side ">
      <Loader show={show} setShow={setShow} />
      <p>{props.res}</p>
    </div>
  );
}

export default Right;
