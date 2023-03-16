import Alert from 'react-bootstrap/Alert';
import styles from '../css/NavbarCss.module.css'

function CustomAlert({showProp, setShow, textToRender, variant='success', time='3000'}) {
  if(showProp ===true) {
    setTimeout(() => {
      setShow(false);
    }, time);
  }
    return (
      <div className={styles.mobile_alert}>
      <Alert show={showProp}  variant={variant} onClick={() => setShow(false)}  >
       <p className={styles.text}>{textToRender}</p>
      </Alert>
      </div>
    );

}

export default CustomAlert;