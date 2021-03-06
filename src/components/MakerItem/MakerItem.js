import React from "react"
import styled from "styled-components"

const MakerItem = props => (
  <MakerCard>
    <h4>{props.maker.name}</h4>
    {props.maker.links ? (
      <>
        <p>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={props.maker.links.mag}
          >
            Magellan School
          </a>
        </p>
        <p>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={props.maker.links.colab}
          >
            co.lab
          </a>
        </p>
      </>
    ) : null}
    {props.maker.contact.email ? (
      <h4 style={{ fontSize: `16px`, wordWrap: `break-word` }}>
        {props.maker.contact.email}
      </h4>
    ) : null}
    {props.maker.contact.reddit ? (
      <h5>
        Reddit:{" "}
        <a
          rel="noopener noreferrer"
          target="_blank"
          style={{ wordWrap: `break-word` }}
          href={"https://www.reddit.com/user" + props.maker.contact.reddit}
        >
          {props.maker.contact.reddit}
        </a>
      </h5>
    ) : null}

    {props.maker.contact.twitter ? (
      <h5>Twitter: @{props.maker.contact.twitter}</h5>
    ) : null}
    {props.maker.description ? (
      <p style={{ wordWrap: `break-word` }}>{props.maker.description}</p>
    ) : null}
  </MakerCard>
)

export default MakerItem

const MakerCard = styled.div`
  text-align: left;
  margin-bottom: 30px;
  padding: 20px;
  /* box-shadow: 0px 1px 2px rgba(0, 16, 75, 0.2); */
  border-radius: 8px;

  @media (min-width: 700px) {
    margin: 10px;
  }

  a {
    color: black;
    text-decoration: underline;
    word-wrap: break-word;
  }
`
