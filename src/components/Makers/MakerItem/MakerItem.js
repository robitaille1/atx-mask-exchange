import React from "react"
import styled from "styled-components"

const MakerItem = () => (
  <MakerCard>
    <h2>Liam Kozma</h2>
    <h3>liam.kozma@me.com</h3>
    <h3>
      Reddit: <a href="https://www.reddit.com/user/kozmaniac22">kozmaniac22</a>
    </h3>
    <p>
      Reach out to Liam on Reddit or by email. Liam lives in South Austin. Liam
      is making masks by request for free - donations appreciated.{" "}
    </p>
    <p>Currently fully booked through Tuesday. </p>
  </MakerCard>
)

export default MakerItem

const MakerCard = styled.div`
  margin: 20px;
  padding: 20px;
  box-shadow: 0px 1px 2px rgba(0, 16, 75, 0.2);
  border: 1px solid lightgray;
  border-radius: 8px;
`
