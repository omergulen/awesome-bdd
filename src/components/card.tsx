/** @jsx jsx */
/* eslint-disable camelcase */
import { jsx, Link } from "theme-ui"

type Props = {
  site: {
    netlify_id: string
    url: string
    name: string
    build_settings: {
      repo_url: string
    }
  }
}

const Card = ({ url, description, text }) => {
  const isExternal = (url) => url.includes('http');

  return (
  <div key={url} sx={{ variant: `cards.dashboard` }}>
    <div data-name="card-top" sx={{ display: `flex`, justifyContent: `space-between`, alignItems: `center` }}>
      <Link href={url} target={isExternal(url) ? "_blank" : null} >{text}</Link>
      <div
        sx={{
          svg: { fill: `currentColor` },
          "a:last-of-type": {
            ml: 2,
          },
        }}
      >
      </div>
    </div>
    <div sx={{ mt: 3, a: { mr: 2 } }}>
      {description}
    </div>
  </div>)
}

export default Card
