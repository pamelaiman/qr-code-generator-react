import { useState } from "react";
import QRCode from "qrcode";

export default function QRCodeGenerator() {
    const [qrCodeUrl, setQrCodeUrl] = useState("");
    const [userInput, setUserInput] = useState("");
    const [allQRCodes, setAllQRCodes] = useState([]);

    const generateQRCode = async () => {
        try {
            const url = await QRCode.toDataURL(userInput);
            setQrCodeUrl(url);
            setAllQRCodes((prevAllQRCodes) => [...prevAllQRCodes, url]);
        } catch (err) {
            console.error(err);
        }
    };

    if (!qrCodeUrl) {
        generateQRCode();
    }

    return (
        <div>
            <input
                type="text"
                placeholder="What would you like a QR for?"
                value={userInput}
                onChange={(event) => setUserInput(event.target.value)}
            />
            <button onClick={generateQRCode}>Generate QR Code</button>
            <div>
                {qrCodeUrl && <img src={qrCodeUrl} alt="QR Code Generated" />}
            </div>
        </div>
    );
}
