import {Link} from 'react-router-dom';
import {classes} from './header.css';
import {useLanguage} from '@/Provider/hooks';

const links = [
  {path: '/', name: 'Home'},
  {path: 'about', name: 'About'},
];

export const Header = () => {
  const {language, translate, setLanguage} = useLanguage();

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setLanguage(event.target.value);
  };

  return (
    <header className={classes.header}>
      <div className={classes.top}>
        <div className={classes.logo}>
          <div>logo</div>
          <div className={classes.title_container}>
            <p className={classes.title}>{translate('header_title')}</p>
            <small>{translate('header_sub_title')}</small>
          </div>
        </div>
        <select
          name="lang"
          id="lang-select"
          onChange={e => handleLanguageChange(e)}
          value={language}
        >
          <option value="jp">日本語</option>
          <option value="ko">한국어</option>
        </select>
      </div>
      <div className={classes.bottom}>
        {links.map((link, index) => (
          <Link key={`${index + 1}`} to={link.path}>
            {link.name}
          </Link>
        ))}
      </div>
    </header>
  );
};
