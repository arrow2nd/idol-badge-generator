import Link from './link'

const Footer = () => (
  <div className="w-full text-gray-500 text-center">
    <p>
      {'powered by '}
      <Link
        href="https://shields.io/"
        text="shields.io"
        hoverColor="text-green-500"
      />
      {' / '}
      <Link
        href="https://sparql.crssnky.xyz/imas/"
        text="im@sparql"
        hoverColor="text-imas"
      />
    </p>
  </div>
)

export default Footer
