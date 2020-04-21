import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const GalleryPage = props => {
  return (
    <>
      <GalleryDesc>
        <div>
          <h2>Austinites in Masks</h2>
          <p>
            For now, we all have to wear masks. But we don’t have to be gloomy
            about it!{" "}
          </p>

          <p>
            Wear that mask with pride! They’re good for you, they’re good for
            me, they’re good for society.{" "}
          </p>

          <p>
            Let’s show off our masks, Austin style. Send us a photo of you in
            your mask and we’ll add it to the gallery. Send photos to{" "}
            <a href="mailto:liam@austinmaskexchange.org">
              Liam@austinmaskexchange.org
            </a>
          </p>
        </div>

        <Img fluid={props.images.liam2.childImageSharp.fluid} />
        <p style={{ marginTop: `1rem` }}>
          Keep Austin Weird ... in face masks!
        </p>
      </GalleryDesc>
      <ImageDisplay>
        <ImageCard>
          <Img fluid={props.images.pic1.childImageSharp.fluid} />
        </ImageCard>
        <ImageCard>
          <Img fluid={props.images.pic2.childImageSharp.fluid} />
        </ImageCard>
        <ImageCard>
          <Img fluid={props.images.pic3.childImageSharp.fluid} />
        </ImageCard>
      </ImageDisplay>
    </>
  )
}

export default GalleryPage

const GalleryDesc = styled.section`
  padding: 2rem 2rem 0rem;
  display: block;
  text-align: left;

  @media (min-width: 855px) {
    display: flex;
  }

  div {
    text-align: left;
    margin: 0px auto;
    width: 100%;
    @media (min-width: 855px) {
      align-content: center;
      text-align: left;
      margin-right: 30px;
      width: 50%;
    }
  }

  a {
    color: black;
    word-wrap: break-word;
    text-decoration: underline;
  }
`

const ImageDisplay = styled.section`
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr;
  @media (min-width: 855px) {
    grid-template-columns: 1fr 1.68fr 1fr;
  }
`
const ImageCard = styled.div`
  padding: 20px 0px;

  img {
    width: 100%;
  }
`
