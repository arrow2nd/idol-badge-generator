import { site } from '../../data/site'

const Header = () => (
  <div className="w-full mb-12 text-center">
    <div className="text-4xl tracking-wider">{site.title}</div>
    <div className="mt-2 text-md text-gray-500">{site.desc}</div>
  </div>
)

export default Header
