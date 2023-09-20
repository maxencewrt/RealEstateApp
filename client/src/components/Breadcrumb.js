import React from 'react';
import { Breadcrumb } from 'flowbite-react';
import { useLocation, Link } from 'react-router-dom';
import { HiHome } from 'react-icons/hi';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <div class="gap-4 mb-4">
    <Breadcrumb>
      <Breadcrumb.Item href="/" linkAs={Link} linkProps={{ to: '/' }} icon={HiHome}>
        Home
      </Breadcrumb.Item>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;

        return isLast ? (
          <Breadcrumb.Item active key={name}>
            {name}
          </Breadcrumb.Item>
        ) : (
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: routeTo }} key={name}>
            {name}
          </Breadcrumb.Item>
        );
      })}
    </Breadcrumb>
    </div>
  );
};

export default Breadcrumbs;
