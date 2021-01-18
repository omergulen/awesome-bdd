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

const Card = ({ site }: Props) => (
  <div key={site.netlify_id} sx={{ variant: `cards.dashboard` }}>
    <div data-name="card-top" sx={{ display: `flex`, justifyContent: `space-between`, alignItems: `center` }}>
      <Link href={site.url}>{site.name}</Link>
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
      <a href={`https://app.netlify.com/sites/${site.name}/deploys`}>
       
      </a>
    </div>
  </div>
)

export default Card
