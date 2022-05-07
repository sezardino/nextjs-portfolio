import type { GetStaticProps, GetStaticPropsResult, NextPage } from "next";

import { apiClient } from "@/common/clients";

import {
  About,
  Contact,
  Footer,
  Header,
  Hero,
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
        <Hero
          contentHTML={props.authors.heroText.html}
          socialLinks={socialLinks}
        />

        <About contentHTML={props.authors.aboutText.html} />
        <Skills
          skills={props.skills}
          contentHTML={props.authors.skillsText.html}
        />
        <Works repoLink={socials.github} works={props.projects} />
        <Contact />
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
