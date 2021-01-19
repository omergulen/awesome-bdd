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

const Grid = ( { children }) => {

  return (
    <div sx={{ variant: `grids.dashboard` }}>
      {children}
    </div>
  )
}

export default Grid
