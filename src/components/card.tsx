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
        <Link aria-label={`View ${site.name} source on GitHub`} href={site.build_settings.repo_url}>
          <div>GitHub</div>
        </Link>
      </div>
    </div>
    <div sx={{ mt: 3, a: { mr: 2 } }}>
      <a href={`https://app.netlify.com/sites/${site.name}/deploys`}>
        <img
          alt={`Netlify Deploy status of ${site.name}`}
          src={`${site.netlify_id}`}
        />
      </a>
    </div>
  </div>
)

export default Card
