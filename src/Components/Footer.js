const currentYear = new Date().getFullYear()

const Footer = () => {
    return (
        
        <footer className="footer">
            <p>copyright © {currentYear}</p>
        </footer>

    )
}

export default Footer