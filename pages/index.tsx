import React from 'react'
import { useRouter } from 'next/router'
import { _, init } from '../translations/index'
import styled from 'styled-components'
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiMongodb,
  SiElectron,
  SiNextDotJs,
} from 'react-icons/si'
import { FaNodeJs } from 'react-icons/fa'
import { GrMysql } from 'react-icons/gr'
import { BiGitBranch, BiMoon, BiPrinter, BiSun } from 'react-icons/bi'
import { AiFillApple, AiFillGithub } from 'react-icons/ai'
import { DiLinux } from 'react-icons/di'

const Table = styled.section`
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    display: flex;
    flex-direction: column;
    padding: 0.5rem 1rem;
  }
  li div {
    display: flex;
    justify-content: space-between;
  }
  div > span {
    font-size: 0.8rem;
  }
  div > span:last-child {
    text-align: right;
  }
  strong {
    padding-right: 1rem;
  }
`

const Education = () => (
  <Table>
    <h3>{_('Education')}</h3>
    <ul>
      <li>
        <div>
          <strong>{_('KeepCoding')}</strong>
          <span>2017-2018</span>
        </div>
        <div>
          <span>{_('Full Stack Javascript')}</span>
        </div>
      </li>
      <li>
        <div>
          <strong>Universidade de Santiago de Compostela</strong>
          <span>2011-2015</span>
        </div>
        <div>
          <span>{_('Computer Science')}</span>
        </div>
      </li>
    </ul>
  </Table>
)

const Experience = () => {
  const jobs = [
    {
      position: _('Senior Frontend Developer'),
      company: _('Sourcefabric'),
      url: 'https://www.superdesk.org/',
      period: '2018-' + _('Today'),
      time: `${new Date().getFullYear() - 2018 + 1} ${_('years')}`,
      location: '100% ' + _('Remote'),
      description: _(
        'We build the best open source CMS for journalists trusted by national news agencies and independent organisations all around the world'
      ),
      tech: _('Typescript, ReactJS'),
    },
    {
      position: _('Full Stack Web Developer'),
      company: _('Stang Decision Systems'),
      url: 'https://stangds.com',
      period: '2016-2018',
      time: '2 ' + _('years'),
      location: _('Marquette, Michigan (U.S.A) and remote'),
      description: _(
        'Part of a team of 3 developers, we built a tool to automate anonymous hiring for companies'
      ),
      tech: _('PHP, JS, HTML/CSS'),
    },
  ]
  return (
    <Table>
      <h3>{_('Experience')}</h3>
      <ul>
        {jobs.map((job) => (
          <li key={job.period}>
            <div>
              <strong>
                {job.position},{' '}
                <a href={job.url}>
                  <i>{job.company}</i>
                </a>
              </strong>
              <span>{job.period}</span>
            </div>
            <div>
              <span>{job.location}</span>
              <span>
                <i>{job.time}</i>
              </span>
            </div>
            <div style={{ marginTop: '1rem' }}>
              <span>{job.description}.</span>
              <span
                style={{ color: 'var(--color-accent)', fontWeight: 'bold' }}
              >
                {job.tech}
              </span>
            </div>
          </li>
        ))}
      </ul>
      <style jsx>{`
        a {
          color: var(--color-fg);
          border-bottom: 1px dashed var(--color-accent);
        }
      `}</style>
    </Table>
  )
}

const Skill = ({ text, Icon }) => (
  <>
    <span className="skill">
      <Icon size="1.5rem" />
      <span>{_(text)}</span>
    </span>
    <style jsx>{`
      article {
        display: inline-block;
      }
      .skill {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0.4rem 0.6rem;
      }
      .skill > * {
        margin: 0.2rem 0;
      }
    `}</style>
  </>
)

const mainSkills = [
  { name: 'Javascript', icon: SiJavascript },
  { name: 'Typescript', icon: SiTypescript },
  { name: 'ReactJS', icon: SiReact },
  { name: 'NextJS', icon: SiNextDotJs },
  { name: 'Git', icon: BiGitBranch },
  { name: 'GitHub', icon: AiFillGithub },
  { name: 'macOS', icon: AiFillApple },
]

const secondarySkills = [
  { name: 'NodeJS', icon: FaNodeJs },
  { name: 'Mysql', icon: GrMysql },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'Linux', icon: DiLinux },
  { name: 'Electron', icon: SiElectron },
]

const Skills = () => (
  <div>
    <h3>{_('Skills')}</h3>
    <h4>{_('Core')}</h4>
    <article>
      {mainSkills.map((s) => (
        <React.Fragment key={s.name}>
          <Skill text={s.name} Icon={s.icon} />
        </React.Fragment>
      ))}
    </article>
    <h4>{_('Secondary')}</h4>
    <article>
      {secondarySkills.map((s) => (
        <React.Fragment key={s.name}>
          <Skill text={s.name} Icon={s.icon} />
        </React.Fragment>
      ))}
    </article>
    <style jsx>{`
      article {
        display: flex;
        max-width: 100%;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: flex-start;
      }
      @media (max-width: 800px) {
        article {
          justify-content: center;
        }
      }
      @media print {
        article {
          justify-content: flex-start;
        }
      }
    `}</style>
  </div>
)

const Other = () => (
  <>
    <h3>Other</h3>
    <div>
      {_('Two native languages')} (<strong>{_('Spanish')}</strong> {_('and')}{' '}
      <strong>{_('Galician')}</strong>) {_('and advanced')}{' '}
      <strong>{_('English')}</strong>.
    </div>
    <div>
      {_('Comfortable with')} <strong>{_('graphic design tools')}</strong>{' '}
      (Photoshop, Inkscape, Pixelmator, FCPX...).
    </div>
    <div>
      <strong>{_('Currently working remotely')}.</strong>
    </div>
    <style jsx>{`
      div:not(:last-child) {
        margin-bottom: 1rem;
      }
    `}</style>
  </>
)

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-top: 4px solid var(--color-accent);
  color: var(--color-accent);
  padding: 0 0.4rem 1rem;
  h1,
  h2 {
    margin: 0;
    font-size: 1.24rem;
    @media (max-width: 800px) {
      font-size: 1rem;
    }
  }
  h2 {
    font-style: italic;
  }
`

const Side = () => (
  <>
    <p>
      <img src="/profile.jpeg" />
    </p>
    <p>
      <a href="mailto:pablo@pablopunk.com">pablo@pablopunk.com</a>
    </p>
    <p>
      <a href="https://pablopunk.com">pablopunk.com</a>
    </p>
    <p>
      {_('Galiza')}, {_('Spain')} 🇪🇸
    </p>
    <style jsx>{`
      img {
        border-radius: 50%;
        border: 4px solid var(--color-accent2);
      }
      p {
        margin: 0.5rem 0;
      }
    `}</style>
  </>
)

const FlexRows = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  & > *:first-child {
    margin-right: 1rem;
  }
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    & > *:first-child {
      margin-right: 0;
    }
  }
  @media print {
    flex-direction: row;
    align-items: flex-start;
    & > *:first-child {
      margin-right: 2rem;
    }
    font-size: 90%;
  }
`

const FlexColumns = styled.div`
  display: flex;
  flex-direction: column;
`

const toggleTheme = () =>
  typeof window !== 'undefined' ? window['__toggleDarkMode']() : null

const TopButtons = () => (
  <nav>
    <div className="hide-print show-dark pointer" onClick={toggleTheme}>
      <BiSun /> {_('Light theme')}
    </div>
    <div className="hide-print show-light pointer" onClick={toggleTheme}>
      <BiMoon /> {_('Dark theme')}
    </div>
    <div className="hide-print pointer" onClick={() => print()}>
      <BiPrinter /> {_('Print')}
    </div>
    <style jsx>{`
      nav {
        padding: 0.5rem;
        display: flex;
        justify-content: center;
      }
      div {
        margin: 0.5rem;
      }
    `}</style>
  </nav>
)

export default function Index() {
  init(useRouter().locale)

  return (
    <>
      <TopButtons />
      <main>
        <Header>
          <h1>{_('Pablo P Varela')}</h1>
          <h2>{_('Javascript Developer')}</h2>
        </Header>
        <FlexRows>
          <FlexColumns>
            <Side />
          </FlexColumns>
          <FlexColumns>
            <Experience />
            <Education />
            <Skills />
            <Other />
          </FlexColumns>
        </FlexRows>
      </main>
      <footer>
        {_('This CV is live on') + ' '}
        <a href="https://cv.pablopunk.com">cv.pablopunk.com</a>
      </footer>
      <style global jsx>{`
        * {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
            'Segoe UI Symbol';
          box-sizing: border-box;
        }
        body {
          padding: 0;
          margin: 0;

          --color-bg: white;
          --color-fg: black;
          --color-accent: lightseagreen;
          --color-accent2: mediumorchid;

          color: var(--color-fg);
          background-color: var(--color-bg);
        }
        body.dark {
          --color-bg: black;
          --color-fg: white;
          --color-accent: aquamarine;
          --color-accent2: deeppink;
        }
        .show-dark,
        .show-light {
          display: none;
        }
        body.dark .show-dark {
          display: initial;
        }
        body.light .show-light {
          display: initial;
        }
        .pointer {
          cursor: pointer;
        }
        @media print {
          .hide-print {
            display: none !important;
          }
        }
        h3 {
          color: var(--color-accent2);
        }
        main {
          max-width: 850px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        a {
          color: var(--color-accent);
          text-decoration: none;
        }
        svg {
          color: var(--color-accent);
          vertical-align: middle;
        }
        footer {
          font-size: 0.75rem;
          text-align: right;
          margin: 1rem;
        }
      `}</style>
    </>
  )
}
