import {Outlet} from 'react-router-dom';
import {classes} from './layout.css';
import {Header} from './Header';

export const Layout = () => {
  return (
    <div className={classes.root}>
      <Header />
      <main className={classes.main}>
        <Outlet />
      </main>
      <footer className={classes.footer}>フッター</footer>
    </div>
  );
};
