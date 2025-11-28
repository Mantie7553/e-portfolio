/** Watermark Component - Non-permanent
 * Returns a React component containing a hard coded watermark
 * @returns {JSX.Element} - The Watermark component
 * @constructor
 */
export default function Watermark() {
    return (
        <footer className="watermark">
            <p className="watermark-text roboto small-text">
                Website built and designed by Jaden Mantie<br/>
                Last Updated: November 27, 2025
            </p>
        </footer>
    )
}