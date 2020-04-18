import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MaskImg from "../images/croppedmask.jpg"

const faq = () => (
  <Layout>
    <SEO title="FAQ" />
    <BannerImg src={MaskImg} alt="masks" />
    <Content>
      <h2>Frequently Asked Mask Questions</h2>
      <div>
        <h3>What kind of mask should I wear / make?</h3>
        <p>
          There are many patterns available. Not all offer the same level of
          protection. Several studies show that different fabrics filter for
          viruses at different levels. Having a mask with multiple layers helps.
          Any mask is better than no mask, of course. That being said, you
          should make sure you know what level of protection you are getting
          from your mask. Does your mask:
        </p>
        <ul>
          <li>Have multiple layers?</li>
          <li>Have a pocket for a filter?</li>
          <li>Cover your nose?</li>
          <li>
            Have a “nose wire” to fit against your nose and force air through
            the cloth?
          </li>
          <li>Use effective fabric?</li>
        </ul>
        <p>
          Note: Some masks are not necessarily meant to be worn for protection
          by themselves. Some are meant to cover medical-grade masks to extend
          their lives. All patterns are useful!
        </p>
      </div>
      <div>
        <h3>Are filter layers necessary?</h3>
        <p>
          It depends. Depending on the mask material, a filter may be necessary
          to capture as many particles as possible. If your mask only uses thin
          cotton laters, you should definitely consider using a filter layer in
          your mask.{" "}
        </p>
        <p>
          <a href="https://smartairfilters.com/en/blog/best-materials-make-diy-face-mask-virus/">
            This blog post
          </a>{" "}
          covers some DIY mask materials you can use.
        </p>
        <p>
          <a href="https://academic.oup.com/annweh/article/54/7/789/202744">
            Here's a useful academic study
          </a>{" "}
          of how various materials filtered small particles.{" "}
        </p>
        <p>
          Reddit user{" "}
          <a href="https://www.reddit.com/u/bigfootshairyhole">
            u/bigfootshairyhole
          </a>{" "}
          suggested using a piece of a reusable shopping bag.
        </p>
      </div>
      <div>
        <h3>My mask isn’t very comfortable…</h3>
        <p>
          Yeah...that’s the thing. The mask should be comfortable against your
          face and be nice and snug. However, the goal is to filter everything
          you are breathing out through the cloth and filter. Therefore, it will
          feel pretty stuffy. If it’s breathing well around the outside, it’s
          not being as effective as it can be.
        </p>
      </div>
      <div>
        <h3>I want to make masks! Where can I get a pattern?</h3>
        <p>
          The “Pocket” pattern{" "}
          <a href="https://www.craftpassion.com/face-mask-sewing-pattern/">
            here
          </a>{" "}
          provides good cover and a pocket for an additional filter layer.{" "}
        </p>
        <p>
          <a href="https://covidrangers.com/assembly/stitching/">
            Covid Rangers
          </a>{" "}
          offers a great step-by-step for this type of mask.
        </p>
        <p>
          There is also a pleated pattern at{" "}
          <a href="https://www.makemaskaustin.org">www.makemaskaustin.org</a>.{" "}
          <strong>Note:</strong> These masks are meant to fit over medical masks
          to extend their lives.
        </p>
        <p>
          <a href="https://ragmask.com">https://ragmask.com</a> has a different
          pattern.{" "}
        </p>
        <a href="https://www.nytimes.com/article/how-to-make-face-mask-coronavirus.html">
          Here’s a pattern from the NYT.
        </a>
        <p>
          <a href="https://www.makemasks2020.org/mask-making-guide">
            This page
          </a>{" "}
          offers a pattern with a very useful guide on what materials work best
          both in terms of protection and durability. More importantly, it says
          what you shouldn't use for mask making.{" "}
        </p>
        <p>I will add more links as people submit them.</p>
      </div>
      <div>
        <h3>I need a mask! Where can I get a mask in Austin?</h3>
        <p>
          Check out our <Link to="/directory">mask directory!</Link> We are
          keeping a running list of all the mask providers in the area.
        </p>
      </div>
      <div style={{ marginBottom: "50px" }}>
        <h3>
          I would rather send masks directly to health care facilities, long
          term care facilities, or shelters!
        </h3>
        <p>Awesome! The following organizations are in need of masks:</p>
        <ul>
          <li>
            <a href="https://www.makeamaskaustin.org">
              www.makeamaskaustin.org
            </a>
          </li>
          <li>
            Austin State Hospital. Contact Reddit user{" "}
            <a href="https://www.reddit.com/user/spoospoop">u/spoospoop</a> for
            more information!
          </li>
        </ul>
      </div>
    </Content>
  </Layout>
)

export default faq

const BannerImg = styled.img`
  width: 100%;
  height: 200px;

  @media (min-width: 700px) {
    height: 300px;
  }
`

const Content = styled.div`
  width: 90%;
  margin: 0px auto;
  text-align: left;
  line-height: 2;

  div {
    margin-top: 75px;
  }

  h2 {
    font-size: 28px;
    margin-top: 50px;
  }

  h3 {
    font-size: 20px;
  }

  p {
    font-size: 16px;
  }

  a {
    color: black;
  }

  @media (min-width: 700px) {
    width: 60%;
    h2 {
      font-size: 35px;
    }
  }
`
