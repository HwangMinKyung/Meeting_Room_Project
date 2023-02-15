import a  from '../dummy/LogoSvg.json'

function Header() {
    return (
        <svg id="logo-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 349.49 123.17">
            <path d={a.cssApp.d1} />
            <path d={a.cssApp.d2} />
            <path d={a.cssApp.d3} />
            <rect x="165.91" width="13.23" height="57.16" rx="2.38" ry="2.38" />
            <path d={a.cssApp.d4} />
            <path d={a.cssApp.d5} />
            <path d={a.cssApp.d6} />
            <path d={a.cssApp.d7} />
        </svg>
    )
}

export default Header;