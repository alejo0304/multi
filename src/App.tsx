import classes from './App.module.css';
import { PantallaDeInicio1 } from './components/PantallaDeInicio1/PantallaDeInicio1';

export function App() {
  return (
    <div className={classes.root}>
      <PantallaDeInicio1 />
    </div>
  );
}
