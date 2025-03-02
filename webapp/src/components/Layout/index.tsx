/*import {Link,Outlet} from 'react-router-dom'
import { getAllIdeasRoute, getNewIdeaRoute, getSignInRoute, getSignOutRoute, getSignUpRoute } from '../../lib/routes'
import { trpc } from '../../lib/trpc'
import css from './index.module.scss'
export const Layout=()=>{
  const { data, isLoading, isFetching, isError } = trpc.getMe.useQuery()

    return (
      <div className={css.layout}>
      <div className={css.navigation}>
        <div className={css.logo}>Ideas</div>
        <ul className={css.menu}>
          <li className={css.item}>
            <Link className={css.link} to={getAllIdeasRoute()}>
              All Ideas
            </Link>
          </li>
          {isLoading || isFetching || isError ? null : data.me ? (
            <>
              <li className={css.item}>
                <Link className={css.link} to={getNewIdeaRoute()}>
                  Add Idea
                </Link>
              </li>
              <li className={css.item}>
                <Link className={css.link} to={getSignOutRoute()}>
                  Log Out ({data.me.nick})
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className={css.item}>
                <Link className={css.link} to={getSignUpRoute()}>
                  Sign Up
                </Link>
              </li>
              <li className={css.item}>
                <Link className={css.link} to={getSignInRoute()}>
                  Sign In
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className={css.content}>
                <Outlet/>
            </div>
        </div>
    )
}
*//*
import { Link, Outlet } from 'react-router-dom';
import { getAllIdeasRoute, getNewIdeaRoute, getSignInRoute, getSignOutRoute, getSignUpRoute } from '../../lib/routes';
import { trpc } from '../../lib/trpc';
import { LeftMenu } from '../LeftMenu'; // Правильный импорт LeftMenu
import css from './index.module.scss';

export const Layout = () => {
  const { data, isLoading, isError } = trpc.getMe.useQuery();
  const isAuthenticated = !isLoading && !isError && data?.me;

  return (
    <div className={css.layout}>
      <div className={css.navigation}>
        <div className={css.logo}>Ideas</div>
        <ul className={css.menu}>
          <li className={css.item}>
            <Link className={css.link} to={getAllIdeasRoute()}>
              All Ideas
            </Link>
          </li>
          {isAuthenticated ? (
            <>
              <li className={css.item}>
                <Link className={css.link} to={getNewIdeaRoute()}>
                  Add Idea
                </Link>
              </li>
              <li className={css.item}>
                <Link className={css.link} to={getSignOutRoute()}>
                  Log Out ({data.me.nick})
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className={css.item}>
                <Link className={css.link} to={getSignUpRoute()}>
                  Sign Up
                </Link>
              </li>
              <li className={css.item}>
                <Link className={css.link} to={getSignInRoute()}>
                  Sign In
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className={css.mainContent}>
        {isAuthenticated && <LeftMenu />} {}
        <div className={css.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};*/
import { Link, Outlet } from 'react-router-dom';
import { getAllIdeasRoute, getNewIdeaRoute, getSignInRoute, getSignOutRoute, getSignUpRoute } from '../../lib/routes';
import { trpc } from '../../lib/trpc';
import { LeftMenu } from '../LeftMenu';
import { Button } from '../Button';
import css from './index.module.scss';

export const Layout = () => {
  const { data, isLoading, isError } = trpc.getMe.useQuery();
  const isAuthenticated = !isLoading && !isError && data?.me;

  return (
    <div className={css.layout}>
      <div className={css.navigation}>
        <div className={css.logo}>Beauty & Health</div>
        <ul className={css.menu}>
          
          {isAuthenticated ? (
            <>
              
              <li className={css.item}>
                <Link to={getSignOutRoute()}>
                  <Button>Выйти({data.me.nick})</Button>
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className={css.item}>
                <Link to={getSignUpRoute()}>
                  <Button variant="blue">Регистрация</Button> {/* Белая кнопка с синим краем */}
                </Link>
              </li>
              <li className={css.item}>
                <Link to={getSignInRoute()}>
                  <Button variant="white-with-blue-border">Логин</Button> {/* Синяя кнопка */}
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className={css.mainContent}>
        {isAuthenticated && <LeftMenu />}
        <div className={css.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

