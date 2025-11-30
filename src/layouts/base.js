/* eslint-disable max-len */
import Head from 'next/head';
import PropTypes from 'prop-types';

const BaseLayout = ({ children }) => {
  return (
    <div id="main">
      <Head>
        <title>Patrick | Web Developer</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#181818" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <meta
          name="viewport"
          key="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        {/*<meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@patrick94xd" />
        <meta property="og:site_name" content="Patrick | Web Developer" />**/}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Patrick | Web Developer" />
        <meta property="og:locale" content="es" />
        <meta property="og:url" content="#" />
        <meta
          name="description"
          content="Buenas! Mi nombre es Patrick y soy un desarrollador Web orientado a ciberseguridad, automatización y administración de sistemas
          Linux.<br></br><br></br> Apasionado del aprendizaje continuo, la optimización de procesos, la creación de
          plataformas útiles y los proyectos donde pueda combinar tecnología y creatividad."
        />
        <meta
          name="keywords"
          content="Developer, Javascript, Freelancer, React, React native, PHP, Laravel Developer, Vue JS Developer, React Developer"
        />
        <meta property="og:image" content="https://jrgarciadev.com/avatar.png" />
        <meta property="twitter:image" content="https://jrgarciadev.com/avatar.png" />
      </Head>
      {children}
    </div>
  );
};

BaseLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default BaseLayout;
