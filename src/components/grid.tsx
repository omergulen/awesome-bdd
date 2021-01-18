/** @jsx jsx */
import { jsx } from "theme-ui"
import Card from "./card"

const sites = [
  {
    netlify_id: 'https://github.com',
    url: 'https://github.com',
    name: 'omer',
    build_settings: {
      repo_url: 'https://github.com'
    }
  }
];

const Grid = () => {

  return (
    <div sx={{ variant: `grids.dashboard` }}>
      {sites.map(site =>  <Card key={site.name} site={site} />)}
    </div>
  )
}

export default Grid
