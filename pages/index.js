import styled from 'styled-components'
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiMongodb,
  SiElectron,
} from 'react-icons/si'
import { FaNodeJs } from 'react-icons/fa'
import { GrMysql } from 'react-icons/gr'
import { BiGitBranch } from 'react-icons/bi'
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
    text-align: right;
    font-size: 0.8rem;
  }
  strong {
    padding-right: 1rem;
  }
`

const Education = () => (
  <Table>
    <h3>Education</h3>
    <ul>
      <li>
        <div>
          <strong>Universidade de Santiago de Compostela</strong>
          <span>2011-2015</span>
        </div>
        <div>
          <span>Computer Science</span>
        </div>
      </li>
      <li>
        <div>
          <strong>KeepCoding</strong>
          <span>2017-2018</span>
        </div>
        <div>
          <span>Full Stack Javascript</span>
        </div>
      </li>
    </ul>
  </Table>
)

const Experience = () => (
  <Table>
    <h3>Experience</h3>
    <ul>
      <li>
        <div>
          <strong>
            Full Stack Web Developer, <i>Stang Decision Systems</i>
          </strong>
          <span>2016-2018</span>
        </div>
        <div>
          <span>Marquette, Michigan (U.S.A) and remote</span>
          <span>
            <i>2 years</i>
          </span>
        </div>
      </li>
      <li>
        <div>
          <strong>
            Full Stack Web Developer, <i>Sourcefabric</i>
          </strong>
          <span>2018-Today</span>
        </div>
        <div>
          <span>100% Remote</span>
          <span>
            <i>{new Date().getFullYear() - 2018 + 1} years</i>
          </span>
        </div>
      </li>
    </ul>
  </Table>
)

const Skill = ({ text, Icon }) => (
  <div>
    <div className="skill">
      <Icon />
      <span>{text}</span>
    </div>
    <style jsx>{`
      div {
        display: inline-block;
      }
      .skill {
        display: flex;
        justify-content: space-between;
        align-items: center;

        border: 1px solid var(--color-accent);
        border-radius: 3px;
        margin-right: 1rem;
        margin-bottom: 0.5rem;
        padding: 0.2rem 0.5rem;
      }
      .skill span {
        margin-left: 0.4rem;
      }
    `}</style>
  </div>
)

const Skills = () => (
  <Table>
    <h3>Skills</h3>
    <Skill text="Javascript" Icon={SiJavascript} />
    <Skill text="Typescript" Icon={SiTypescript} />
    <Skill text="ReactJS" Icon={SiReact} />
    <Skill text="NodeJS" Icon={FaNodeJs} />
    <Skill text="Mysql" Icon={GrMysql} />
    <Skill text="MongoDB" Icon={SiMongodb} />
    <Skill text="Git" Icon={BiGitBranch} />
    <Skill text="GitHub" Icon={AiFillGithub} />
    <Skill text="macOS" Icon={AiFillApple} />
    <Skill text="Linux" Icon={DiLinux} />
    <Skill text="Electron" Icon={SiElectron} />
  </Table>
)

const Other = () => (
  <>
    <h3>Other</h3>
    <p>
      Two native languages (<strong>Spanish</strong> and{' '}
      <strong>Galician</strong>) and advanced <strong>English</strong>.
    </p>
    <p>
      Comfortable with <strong>graphic design tools</strong> (Photoshop,
      Inkscape, Pixelmator, FCPX...).
    </p>
    <p>
      <strong>Currenly working remotely</strong>
    </p>
  </>
)

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-top: 4px solid var(--color-accent);
  color: var(--color-accent);
  padding: 0 0.4rem 1rem;
  cursor: pointer;
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
    <p>Galiza, Spain 🇪🇸</p>
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
  }
`

const FlexColumns = styled.div`
  display: flex;
  flex-direction: column;
`

export default function Index() {
  return (
    <>
      <main>
        <Header
          onClick={
            typeof window !== 'undefined' ? window['__toggleDarkMode'] : null
          }
        >
          <h1>Pablo P Varela</h1>
          <h2>Javascript Developer</h2>
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
        <style global jsx>{`
          * {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
              Helvetica, Arial, sans-serif, 'Apple Color Emoji',
              'Segoe UI Emoji', 'Segoe UI Symbol';
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
          h3 {
            color: var(--color-accent2);
          }
          main {
            max-width: 1000px;
            margin: 2rem auto;
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
        `}</style>
      </main>
    </>
  )
}
