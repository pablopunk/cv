import React from 'react'
import { useRouter } from 'next/router'
import { _, init } from '../translations/index'
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
import { LazyLoadImage } from 'react-lazy-load-image-component'
import classNames from 'classnames'

const Education = () => (
  <div>
    <h3 className={sectionTitleStyles}>
      <span>{_('Education')}</span>
    </h3>
    <ul className="border-l border-accent2 p-3">
      <li className="">
        <div className="w-full flex justify-between">
          <strong>{_('KeepCoding')}</strong>
          <span>2017-2018</span>
        </div>
        <div>
          <span className="text-accent">
            <i>{_('Full Stack Javascript')}</i>
          </span>
          <span></span>
        </div>
      </li>
      <li>
        <div className="w-full flex justify-between">
          <strong>Universidade de Santiago de Compostela</strong>
          <span>2011-2015</span>
        </div>
        <div>
          <span className="text-accent">
            <i>{_('Computer Science')}</i>
          </span>
          <span></span>
        </div>
      </li>
    </ul>
  </div>
)

const sectionTitleStyles =
  'mt-2 border-b border-accent2 p-1 font-semibold text-lg uppercase text-right'

const Experience = () => {
  const jobs = [
    {
      position: _('Senior Full Stack Developer'),
      company: _('Maze'),
      url: 'https://www.maze.co/',
      period: 'Aug 2021-' + _('Today'),
      time: _('New!'),
      location: '100% ' + _('Remote'),
      description: _('Fuel decision-making with rapid, remote testing'),
      tech: _('TS, ReactJS, GraphQL, NodeJS, Neo4J'),
    },
    {
      position: _('Senior Frontend Developer'),
      company: _('Prezly'),
      url: 'https://www.prezly.com/',
      period: 'Mar 2021-Jul 2021',
      time: '5 ' + _('months'),
      location: '100% ' + _('Remote'),
      description: _(
        'Prezly helps you tell your brand stories through an advanced CRM, CMS, and campaign software'
      ),
      tech: _('Typescript, ReactJS, NextJS'),
    },
    {
      position: _('Senior Frontend Developer'),
      company: _('Sourcefabric'),
      url: 'https://www.superdesk.org/',
      period: '2018-2020',
      time: '3 ' + _('years'),
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
      tech: _('PHP, JS, HTML/CSS, MySQL'),
    },
  ]
  return (
    <div>
      <h3 className={sectionTitleStyles}>{_('Experience')}</h3>
      <ul className="py-3 border-l border-accent2 pl-4">
        {jobs.map((job) => (
          <li
            key={job.period}
            className="border my-2 p-2 rounded-md border-accent border-dashed"
          >
            <div className="flex w-full justify-between">
              <strong>
                <span className="text-accent italic">{job.position}</span>,{' '}
                <a href={job.url}>
                  <i>{job.company}</i>
                </a>
              </strong>
              <span>{job.period}</span>
            </div>
            <div className="flex w-full justify-between">
              <span>
                <i>{job.location}</i>
              </span>
              <span>
                <i>{job.time}</i>
              </span>
            </div>
            <div className="flex w-full justify-between mt-1 text-sm">
              <span>{job.description}.</span>
              <span className="font-semibold text-accent text-right">
                {job.tech}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

const Skill = ({ text, Icon }) => (
  <>
    <span className="mr-3 flex items-center flex-col justify-center text-accent">
      <Icon size="1.5rem" />
      <span>{_(text)}</span>
    </span>
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
    <h3 className={sectionTitleStyles}>{_('Skills')}</h3>
    <div className="border-l border-accent2 p-3">
      <h4 className="font-semibold text-lg">{_('Core')}</h4>
      <article className="flex flex-wrap">
        {mainSkills.map((s) => (
          <div key={s.name} className="my-2">
            <Skill text={s.name} Icon={s.icon} />
          </div>
        ))}
      </article>
      <h4 className="font-semibold text-lg my-2">{_('Secondary')}</h4>
      <article className="flex flex-wrap">
        {secondarySkills.map((s) => (
          <div key={s.name} className="my-2">
            <Skill text={s.name} Icon={s.icon} />
          </div>
        ))}
      </article>
    </div>
  </div>
)

const Other = () => (
  <>
    <h3 className={sectionTitleStyles}>
      <span>{_('Other')}</span>
    </h3>
    <div className="border-l border-accent2 p-3">
      <div className="">
        {_('Two native languages')} (<strong>{_('Spanish')}</strong> {_('and')}{' '}
        <strong>{_('Galician')}</strong>) {_('and advanced')}{' '}
        <strong>{_('English')}</strong>.
      </div>
      <div>
        {_('Comfortable with')} <strong>{_('graphic design tools')}</strong>{' '}
        (Figma, Photoshop, Inkscape, Pixelmator, FCPX...).
      </div>
      <div>
        <strong>{_('Currently working remotely')}.</strong>
      </div>
    </div>
  </>
)

const Side = () => (
  <>
    <div className="my-4">
      <LazyLoadImage
        src="/profile.jpg"
        width={158}
        height={158}
        alt="Profile pic"
        className="rounded-full border-4 border-accent2"
        placeholder={
          <img
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABISEhITEhQWFhQcHhseHCkmIiImKT4sMCwwLD5eO0U7O0U7XlNlUk1SZVOWdmhodpatkYqRrdK8vNL/+///////2wBDARISEhITEhQWFhQcHhseHCkmIiImKT4sMCwwLD5eO0U7O0U7XlNlUk1SZVOWdmhodpatkYqRrdK8vNL/+///////wAARCACWAJYDASIAAhEBAxEB/8QAGgAAAwEBAQEAAAAAAAAAAAAAAQIDAAQFBv/EABgQAQEBAQEAAAAAAAAAAAAAAAABERIC/8QAFwEBAQEBAAAAAAAAAAAAAAAAAQACA//EABgRAQEBAQEAAAAAAAAAAAAAAAARARIC/9oADAMBAAIRAxEAPwD1PDo8oeXR5YbWh04cI2hpdLaia0ultJoKmtqWtoS2mlRlPKkvKeIyqShKwycPEDCUUjMDJPE8xeJ+YrGweCAItaW1rU7QWtLoWl1lqG0dT0dRisp5UpTygRaVSVCVSUhaU8qMp5UFdHU9HUFNZPWScEh40hsbDBTEoaJU6epVlrMClalDeYIlEGKQ0qejqEWlPKhptLMdEpunP0PRZjo6Hpz9N0k6emc/bJKSCbGbZJSVSp1lrEqlVPSVZ10zCUutS6y6ZhtHU9bUYro6lrahuLa3SPTdNMbi/TdOfpuizHR2Pbl7btCOrtnL2yT3AOWtMEqXpWpeg3iPpD0t6R9MuvnEqS01TtZdcwdDSaGpqKa2paGljcV6DpLQ0sar0HSXQdFjVem6R6DUyt0yPTIPrS0S1pjC1L0pUvQdMR9Iel/SHpl18o+kqp6SodcLS6NIjW0NACzo6XQAuejoaUNLGm0NKyZNrEZB9lpbQ0tpYa1K01qdobxP0j6UtSodM1KpVWkqjpmpUlVpbFF0kB7C2GM7qdKewtLG6UBBMgzMgDCyD6not9JdF6ajCl9EtJfRL6EOaa1O0LS6o3mtSswjXRcLigYYukrC2LYSxQVGwli1hLDGalgHsDDBSAfAwRUjGxlE9fsOkOy9NxhfovSPQdKKq9BqXQ6oaropaaURVRgFQ0C05aYKnYSxWkpiqdhcULigpMDFMDBDSYymMoq3QazNMNoazJNo6zInlPKzJHlMzJMDMQWlrMUAMwQY2MyI4zMC/9k="
            alt="Profile pic"
            width={158}
            height={158}
          />
        }
      />
    </div>
    <a className="text-accent my-1" href="mailto:pablo@pablopunk.com">
      pablo@pablopunk.com
    </a>
    <a className="text-accent my-1" href="https://pablopunk.com">
      pablopunk.com
    </a>
    <div className="my-1">
      {_('Galiza')}, {_('Spain')} 🇪🇸
    </div>
  </>
)

const toggleTheme = () =>
  typeof window !== 'undefined' ? window['__toggleDarkMode']() : null

const Button = ({ children, type, ...props }) => (
  <button
    {...props}
    className={classNames(
      'flex outline-none border bg-accent text-bg items-center px-2 py-1 rounded-md shadow-md m-1 hover:bg-bg hover:text-fg transition-colors',
      {
        'bg-accent': type === 'primary' || type == null,
        'bg-accent2': type === 'secondary',
      },
      props.className
    )}
  >
    {children}
  </button>
)

const TopButtons = () => (
  <nav className="flex w-full items-center justify-center mt-4 print:hidden">
    <Button type="secondary">
      <a href="/en">English</a>
    </Button>
    <span style={{ margin: '0 .3rem' }}>/</span>
    <Button type="secondary" className="mr-4">
      <a href="/es">Spanish</a>
    </Button>
    <Button onClick={toggleTheme} className="light-hidden">
      <BiSun /> {_('Light theme')}
    </Button>
    <Button onClick={toggleTheme} className="dark-hidden">
      <BiMoon /> {_('Dark theme')}
    </Button>
    <Button onClick={() => print()}>
      <BiPrinter /> {_('Print')}
    </Button>
  </nav>
)

function Index() {
  init(useRouter().locale)

  return (
    <>
      <TopButtons />
      <main className="mx-auto max-w-4xl p-5">
        <div className="flex items-center justify-between border-t-4 border-accent px-2 py-1 text-xl font-semibold text-accent">
          <h1>{_('Pablo P Varela')}</h1>
          <h2 className="italic">{_('Javascript Developer')}</h2>
        </div>
        <div className="flex mt-4">
          <div className="flex flex-col">
            <Side />
          </div>
          <div className="flex flex-col pl-4">
            <Experience />
            <Education />
            <Skills />
            <Other />
          </div>
        </div>
      </main>
      <footer className="absolute bottom-2 right-3">
        <div> </div>
        <p className="">
          {_('This CV is live on') + ' '}
          <a className="text-accent" href="https://cv.pablopunk.com">
            cv.pablopunk.com
          </a>
        </p>
      </footer>
    </>
  )
}

export default Index
