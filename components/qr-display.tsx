import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { Card, Image, Button } from "@nextui-org/react";
import { QRCodeCanvas } from "qrcode.react";
import React, { useRef } from "react";

type TextQRProps = {
    text?: string;
}

const QrDisplay: React.FC<TextQRProps> = ({ text }) => {
    const qrCodeRef = useRef<HTMLDivElement | null>(null);

    const handleDownload = () => {
        if (qrCodeRef.current) {
            const canvas = qrCodeRef.current.querySelector('canvas');
            if (canvas) {
                const url = canvas.toDataURL('image/png');
                const a = document.createElement('a');
                a.href = url;
                a.download = 'qr-code.png';
                a.click();
            }
        }
    };

    return (
        <>
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="pb-2 text-2xl font-bold text-white">Output Result</h2>
                    <p>Enjoy your Free QR.</p>
                </div>
                <Button color="primary" href="#" variant="flat" onClick={handleDownload}>
                    <ArrowDownTrayIcon className="h-4 w-4 text-blue-500" /> Download
                </Button>
            </div>

            <Card
                isFooterBlurred
                radius="lg"
                className="border-none mt-4 p-2"
            >
                {text ? (
                    <div ref={qrCodeRef}>
                        <QRCodeCanvas
                            // className="object-cover"
                            size={300}
                            bgColor={"#ffffff"}
                            fgColor={"#251d1d"}
                            level={"H"}
                            includeMargin={true}
                            value={text}
                        />
                    </div>
                ) : (
                    <Image
                        alt="QR"
                        className="object-cover"
                        width={'100%'}
                        isZoomed={true}
                        src="../qr.png"
                    />
                )}
            </Card>
        </>
    )
}

export default QrDisplay