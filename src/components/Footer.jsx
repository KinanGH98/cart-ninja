import Image from 'react-bootstrap/Image'

export default function Footer()
{
    return (
        <footer style={{marginTop: 'auto'}}>
            <div
                className="d-flex justify-content-evenly align-items-center bg-primary py-3"
                style={{
                    height: '75px',
                    right: '0',
                    bottom: '0',
                    left: '0',
                    boxShadow: '0 0.0 0.5rem rgba(0, 0, 0, 0.3)'
                }}>

                <Image src='./imgs/logo-white.svg' width='100px'></Image>
                <a href='https://kinangh98.github.io/' className="fw-medium text-white">© 2024 Ahmed Kinan Ghbash</a>
            </div>
        </footer>
    );
}