import type { GetStaticProps, GetStaticPropsResult, NextPage } from "next";

import { apiClient } from "@/common/clients";

import {
  About,
  Contact,
  Footer,
  Header,
  Hero,
  IndexWrapper,
  Skills,
  Works,
} from "@/components";
import { IndexPageData, SocialNames } from "@/common/types";
import Head from "next/head";
import { socialIcons } from "@/common/const";

const Home: NextPage<IndexPageData> = (props) => {
  const { metas, socials } = props;

  const socialLinks = Object.entries(socialIcons).map(([name, icon]) => ({
    name: name as SocialNames,
    icon,
    href: socials[name as SocialNames],
  }));

  const indexPageProps = {
    projects: props.projects,
    skills: props.skills,
    socialLinks: socialLinks,
    repoLink: socials.github,
    texts: {
      about: props.authors.aboutText.html,
      hero: props.authors.heroText.html,
      skills: props.authors.skillsText.html,
    },
  };

  return (
    <>
      <Head>
        <title>{metas.name}</title>
        <meta name="description" content={metas.description} />
        <meta name="name" content={metas.name} />
        <meta name="siteUrl" content={metas.siteUrl} />
        <meta name="og:title" content={metas.name} />
        <meta name="og:description" content={metas.description} />
        <meta name="og:image" content={metas.ogImage.url} />
      </Head>
      <Header />
      <main>
        <IndexWrapper {...indexPageProps} />
      </main>
      <Footer socialLinks={socialLinks} />
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<IndexPageData> = async () => {
  const response = await apiClient.getIndexPageData();

  if (!response) {
    return {
      redirect: {
        destination: "/404",
      },
      props: {} as IndexPageData,
    };
  }

  return { props: response };
};
