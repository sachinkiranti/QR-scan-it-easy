import React, { useState } from 'react'
import { Button, Textarea } from "@nextui-org/react"
import QrDisplay from "../qr-display"
import icons from '@/config/constants'

const TextQrGenerator = () => {
    const [text, setText] = useState('');
    const [qrText, setQrText] = useState('');
    const [error, setError] = useState('');

    const TEXT_LENGTH = 1000;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (text.length > TEXT_LENGTH) {
                throw new RangeError('Input too long. Max 1000 characters.');
            }
            setError('')
            setQrText(text);
        } catch(e) {
            if (e instanceof RangeError) {
                setError('Input too long. Max 1000 characters.');
            } else {
                setError('An unexpected error occurred.');
            }
        }
    };

    return (
        <div className="mx-auto grid max-w-[1170px] gap-8 px-4 sm:px-8 lg:grid-cols-12 xl:px-0">
            <div className="gradient-box rounded-lg bg-dark-8 p-8 lg:col-span-8">
                <h2 className="flex pb-2 text-2xl font-bold text-white">
                    {icons.document} <span className="pl-2">Text</span>
                </h2>
                <p className="pb-6">Enter the text & Generate QR Code</p>
                <form onSubmit={handleSubmit}>

                    <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                        <Textarea
                            type="text"
                            variant={'flat'}
                            label="Enter the text"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                    </div>

                    <Button type="submit" className="hero-button-gradient mt-5 w-50 rounded-lg px-7 py-3 text-center font-medium text-white duration-300 ease-in hover:opacity-80 ">
                        {icons.qr} Generate QR Code
                    </Button>

                    {" "}<span className='text-gray-500'>{text.length}/<span className='text-red-500 text-bold-200'>{TEXT_LENGTH}</span></span>
                </form>
                {error && <div className='text-red-500 py-2'>{error}</div>}
            </div>
            <div className="gradient-box rounded-lg bg-dark-8 px-8 pb-8 pt-5 lg:col-span-4">
                <QrDisplay text={qrText} />
            </div>
        </div>
    )
}

export default TextQrGenerator