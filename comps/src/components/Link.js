import classNames from 'classnames';
import { useContext } from 'react';
import NavigationContext from '../context/navigation';

function Link({ to, children }) {
  const { navigate } = useContext(NavigationContext);

  const classes = classNames('text-blue-500');

  const handleClick = (event) => {
    // Para permitir el comportamiento por defecto del
    // navegador si el usuario mantiene pulsada la tecla
    // ctrl o meta(Mac) al pulsar en un enlace
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();

    navigate(to);
  };

  return (
    <a className={classes} href={to} onClick={handleClick}>
      {children}
    </a>
  );
}

export default Link;
