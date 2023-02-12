import { useState } from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button primary onClick={handleClose}>
        I Accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Please accept this agreement</p>
    </Modal>
  );

  return (
    <div className="relative">
      <Button primary onClick={handleClick}>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        ultricies, odio a malesuada aliquet, velit turpis feugiat quam, a
        gravida felis dui et tortor. Donec auctor dictum libero, eget cursus
        odio. In diam tortor, dictum sed erat non, dictum interdum est. Etiam
        fermentum mollis nisl sit amet laoreet. In vestibulum justo ex, sit amet
        accumsan enim semper et. Interdum et malesuada fames ac ante ipsum
        primis in faucibus. Integer non magna ac ante euismod fringilla ac sed
        urna. Sed mi eros, elementum sed dictum ac, pulvinar elementum turpis.
        Morbi quis ante odio. Ut lectus tortor, tempus vel justo a, feugiat
        convallis odio. Fusce eu consequat ante. Phasellus a facilisis tellus,
        ut sollicitudin metus. Donec scelerisque venenatis mi, sit amet pretium
        mi commodo vitae. Sed dapibus dui turpis, ac egestas nunc fermentum sed.
        Curabitur rutrum vitae elit eget suscipit.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        ultricies, odio a malesuada aliquet, velit turpis feugiat quam, a
        gravida felis dui et tortor. Donec auctor dictum libero, eget cursus
        odio. In diam tortor, dictum sed erat non, dictum interdum est. Etiam
        fermentum mollis nisl sit amet laoreet. In vestibulum justo ex, sit amet
        accumsan enim semper et. Interdum et malesuada fames ac ante ipsum
        primis in faucibus. Integer non magna ac ante euismod fringilla ac sed
        urna. Sed mi eros, elementum sed dictum ac, pulvinar elementum turpis.
        Morbi quis ante odio. Ut lectus tortor, tempus vel justo a, feugiat
        convallis odio. Fusce eu consequat ante. Phasellus a facilisis tellus,
        ut sollicitudin metus. Donec scelerisque venenatis mi, sit amet pretium
        mi commodo vitae. Sed dapibus dui turpis, ac egestas nunc fermentum sed.
        Curabitur rutrum vitae elit eget suscipit.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        ultricies, odio a malesuada aliquet, velit turpis feugiat quam, a
        gravida felis dui et tortor. Donec auctor dictum libero, eget cursus
        odio. In diam tortor, dictum sed erat non, dictum interdum est. Etiam
        fermentum mollis nisl sit amet laoreet. In vestibulum justo ex, sit amet
        accumsan enim semper et. Interdum et malesuada fames ac ante ipsum
        primis in faucibus. Integer non magna ac ante euismod fringilla ac sed
        urna. Sed mi eros, elementum sed dictum ac, pulvinar elementum turpis.
        Morbi quis ante odio. Ut lectus tortor, tempus vel justo a, feugiat
        convallis odio. Fusce eu consequat ante. Phasellus a facilisis tellus,
        ut sollicitudin metus. Donec scelerisque venenatis mi, sit amet pretium
        mi commodo vitae. Sed dapibus dui turpis, ac egestas nunc fermentum sed.
        Curabitur rutrum vitae elit eget suscipit.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        ultricies, odio a malesuada aliquet, velit turpis feugiat quam, a
        gravida felis dui et tortor. Donec auctor dictum libero, eget cursus
        odio. In diam tortor, dictum sed erat non, dictum interdum est. Etiam
        fermentum mollis nisl sit amet laoreet. In vestibulum justo ex, sit amet
        accumsan enim semper et. Interdum et malesuada fames ac ante ipsum
        primis in faucibus. Integer non magna ac ante euismod fringilla ac sed
        urna. Sed mi eros, elementum sed dictum ac, pulvinar elementum turpis.
        Morbi quis ante odio. Ut lectus tortor, tempus vel justo a, feugiat
        convallis odio. Fusce eu consequat ante. Phasellus a facilisis tellus,
        ut sollicitudin metus. Donec scelerisque venenatis mi, sit amet pretium
        mi commodo vitae. Sed dapibus dui turpis, ac egestas nunc fermentum sed.
        Curabitur rutrum vitae elit eget suscipit.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        ultricies, odio a malesuada aliquet, velit turpis feugiat quam, a
        gravida felis dui et tortor. Donec auctor dictum libero, eget cursus
        odio. In diam tortor, dictum sed erat non, dictum interdum est. Etiam
        fermentum mollis nisl sit amet laoreet. In vestibulum justo ex, sit amet
        accumsan enim semper et. Interdum et malesuada fames ac ante ipsum
        primis in faucibus. Integer non magna ac ante euismod fringilla ac sed
        urna. Sed mi eros, elementum sed dictum ac, pulvinar elementum turpis.
        Morbi quis ante odio. Ut lectus tortor, tempus vel justo a, feugiat
        convallis odio. Fusce eu consequat ante. Phasellus a facilisis tellus,
        ut sollicitudin metus. Donec scelerisque venenatis mi, sit amet pretium
        mi commodo vitae. Sed dapibus dui turpis, ac egestas nunc fermentum sed.
        Curabitur rutrum vitae elit eget suscipit.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        ultricies, odio a malesuada aliquet, velit turpis feugiat quam, a
        gravida felis dui et tortor. Donec auctor dictum libero, eget cursus
        odio. In diam tortor, dictum sed erat non, dictum interdum est. Etiam
        fermentum mollis nisl sit amet laoreet. In vestibulum justo ex, sit amet
        accumsan enim semper et. Interdum et malesuada fames ac ante ipsum
        primis in faucibus. Integer non magna ac ante euismod fringilla ac sed
        urna. Sed mi eros, elementum sed dictum ac, pulvinar elementum turpis.
        Morbi quis ante odio. Ut lectus tortor, tempus vel justo a, feugiat
        convallis odio. Fusce eu consequat ante. Phasellus a facilisis tellus,
        ut sollicitudin metus. Donec scelerisque venenatis mi, sit amet pretium
        mi commodo vitae. Sed dapibus dui turpis, ac egestas nunc fermentum sed.
        Curabitur rutrum vitae elit eget suscipit.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        ultricies, odio a malesuada aliquet, velit turpis feugiat quam, a
        gravida felis dui et tortor. Donec auctor dictum libero, eget cursus
        odio. In diam tortor, dictum sed erat non, dictum interdum est. Etiam
        fermentum mollis nisl sit amet laoreet. In vestibulum justo ex, sit amet
        accumsan enim semper et. Interdum et malesuada fames ac ante ipsum
        primis in faucibus. Integer non magna ac ante euismod fringilla ac sed
        urna. Sed mi eros, elementum sed dictum ac, pulvinar elementum turpis.
        Morbi quis ante odio. Ut lectus tortor, tempus vel justo a, feugiat
        convallis odio. Fusce eu consequat ante. Phasellus a facilisis tellus,
        ut sollicitudin metus. Donec scelerisque venenatis mi, sit amet pretium
        mi commodo vitae. Sed dapibus dui turpis, ac egestas nunc fermentum sed.
        Curabitur rutrum vitae elit eget suscipit.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        ultricies, odio a malesuada aliquet, velit turpis feugiat quam, a
        gravida felis dui et tortor. Donec auctor dictum libero, eget cursus
        odio. In diam tortor, dictum sed erat non, dictum interdum est. Etiam
        fermentum mollis nisl sit amet laoreet. In vestibulum justo ex, sit amet
        accumsan enim semper et. Interdum et malesuada fames ac ante ipsum
        primis in faucibus. Integer non magna ac ante euismod fringilla ac sed
        urna. Sed mi eros, elementum sed dictum ac, pulvinar elementum turpis.
        Morbi quis ante odio. Ut lectus tortor, tempus vel justo a, feugiat
        convallis odio. Fusce eu consequat ante. Phasellus a facilisis tellus,
        ut sollicitudin metus. Donec scelerisque venenatis mi, sit amet pretium
        mi commodo vitae. Sed dapibus dui turpis, ac egestas nunc fermentum sed.
        Curabitur rutrum vitae elit eget suscipit.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        ultricies, odio a malesuada aliquet, velit turpis feugiat quam, a
        gravida felis dui et tortor. Donec auctor dictum libero, eget cursus
        odio. In diam tortor, dictum sed erat non, dictum interdum est. Etiam
        fermentum mollis nisl sit amet laoreet. In vestibulum justo ex, sit amet
        accumsan enim semper et. Interdum et malesuada fames ac ante ipsum
        primis in faucibus. Integer non magna ac ante euismod fringilla ac sed
        urna. Sed mi eros, elementum sed dictum ac, pulvinar elementum turpis.
        Morbi quis ante odio. Ut lectus tortor, tempus vel justo a, feugiat
        convallis odio. Fusce eu consequat ante. Phasellus a facilisis tellus,
        ut sollicitudin metus. Donec scelerisque venenatis mi, sit amet pretium
        mi commodo vitae. Sed dapibus dui turpis, ac egestas nunc fermentum sed.
        Curabitur rutrum vitae elit eget suscipit.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        ultricies, odio a malesuada aliquet, velit turpis feugiat quam, a
        gravida felis dui et tortor. Donec auctor dictum libero, eget cursus
        odio. In diam tortor, dictum sed erat non, dictum interdum est. Etiam
        fermentum mollis nisl sit amet laoreet. In vestibulum justo ex, sit amet
        accumsan enim semper et. Interdum et malesuada fames ac ante ipsum
        primis in faucibus. Integer non magna ac ante euismod fringilla ac sed
        urna. Sed mi eros, elementum sed dictum ac, pulvinar elementum turpis.
        Morbi quis ante odio. Ut lectus tortor, tempus vel justo a, feugiat
        convallis odio. Fusce eu consequat ante. Phasellus a facilisis tellus,
        ut sollicitudin metus. Donec scelerisque venenatis mi, sit amet pretium
        mi commodo vitae. Sed dapibus dui turpis, ac egestas nunc fermentum sed.
        Curabitur rutrum vitae elit eget suscipit.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        ultricies, odio a malesuada aliquet, velit turpis feugiat quam, a
        gravida felis dui et tortor. Donec auctor dictum libero, eget cursus
        odio. In diam tortor, dictum sed erat non, dictum interdum est. Etiam
        fermentum mollis nisl sit amet laoreet. In vestibulum justo ex, sit amet
        accumsan enim semper et. Interdum et malesuada fames ac ante ipsum
        primis in faucibus. Integer non magna ac ante euismod fringilla ac sed
        urna. Sed mi eros, elementum sed dictum ac, pulvinar elementum turpis.
        Morbi quis ante odio. Ut lectus tortor, tempus vel justo a, feugiat
        convallis odio. Fusce eu consequat ante. Phasellus a facilisis tellus,
        ut sollicitudin metus. Donec scelerisque venenatis mi, sit amet pretium
        mi commodo vitae. Sed dapibus dui turpis, ac egestas nunc fermentum sed.
        Curabitur rutrum vitae elit eget suscipit.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        ultricies, odio a malesuada aliquet, velit turpis feugiat quam, a
        gravida felis dui et tortor. Donec auctor dictum libero, eget cursus
        odio. In diam tortor, dictum sed erat non, dictum interdum est. Etiam
        fermentum mollis nisl sit amet laoreet. In vestibulum justo ex, sit amet
        accumsan enim semper et. Interdum et malesuada fames ac ante ipsum
        primis in faucibus. Integer non magna ac ante euismod fringilla ac sed
        urna. Sed mi eros, elementum sed dictum ac, pulvinar elementum turpis.
        Morbi quis ante odio. Ut lectus tortor, tempus vel justo a, feugiat
        convallis odio. Fusce eu consequat ante. Phasellus a facilisis tellus,
        ut sollicitudin metus. Donec scelerisque venenatis mi, sit amet pretium
        mi commodo vitae. Sed dapibus dui turpis, ac egestas nunc fermentum sed.
        Curabitur rutrum vitae elit eget suscipit.
      </p>
    </div>
  );
}

export default ModalPage;
