import styled from 'styled-components'

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
  span:first-child {
    font-weight: bold;
  }
`

const Education = () => (
  <Table>
    <h2>Education</h2>
    <ul>
      <li>
        <div>
          <span>
            Universidade de Santiago de Compostela - <i>Computer Science</i>
          </span>
          <span>2011-2015</span>
        </div>
      </li>
      <li>
        <div>
          <span>Master in Full Stack Javascript</span>
          <span>2017-2018</span>
        </div>
      </li>
    </ul>
  </Table>
)

const Experience = () => (
  <Table>
    <h2>Experience</h2>
    <ul>
      <li>
        <div>
          <span>
            Full Stack Web Developer, <i>Stang Decision Systems</i>
          </span>
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
          <span>
            Full Stack Web Developer, <i>Sourcefabric</i>
          </span>
          <span>2018-Today</span>
        </div>
        <div>
          <span>100% Remote</span>
          <span>
            <i>3 years</i>
          </span>
        </div>
      </li>
    </ul>
  </Table>
)

export default function Index() {
  return (
    <>
      <h1>Pablo P Varela</h1>
      <Experience />
      <Education />
      <style global jsx>{`
        * {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
            'Segoe UI Symbol';
          box-sizing: border-box;
        }
      `}</style>
    </>
  )
}
