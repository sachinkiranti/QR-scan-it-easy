import React, { useState } from 'react'
import { Button, Input, Select, SelectItem, Textarea } from "@nextui-org/react"
import QrDisplay from "../qr-display"
import icons, { wifi_encryptions } from '@/config/constants'

const WifiQrGenerator = () => {

    const TEXT_LENGTH = 1000;
    const [text, setText] = useState('');
    const [qrText, setQrText] = useState('');
    const [wifiConfig, setWifiConfig] = useState({
        ssid: '',
        password: '',
        encryption: 'WPA'
    });
    const [error, setError] = useState('');

    const handleChange = (e: { target: { name: any; value: any } }) => {
        const { name, value } = e.target;
        setWifiConfig({
            ...wifiConfig,
            [name]: value
        });
    };

    const handleGenerateQRCode = (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (wifiConfig.ssid.length === 0) {
                throw new RangeError('SSID cannot be empty.');
            }

            const wifiString = `WIFI:T:${wifiConfig.encryption};S:${wifiConfig.ssid};P:${wifiConfig.password};;`;

            setText(wifiString)

            if (text.length > 1000) {
                throw new RangeError('Input too long. Max 1000 characters.');
            }

            setError('');
            setQrText(wifiString);
        } catch (e) {
            if (e instanceof RangeError) {
                setError(e.message);
            } else {
                setError('Unexpected error occurred.');
            }
        }
    };

    return (
        <div className="mx-auto grid max-w-[1170px] gap-8 px-4 sm:px-8 lg:grid-cols-12 xl:px-0">
            <div className="gradient-box rounded-lg bg-dark-8 p-8 lg:col-span-8">
                <h2 className="flex pb-2 text-2xl font-bold text-white">
                    {icons.wifi} <span className="pl-2">WIFI</span>
                </h2>
                <p className="pb-6">Enter the WIFI data entry</p>
                <form onSubmit={handleGenerateQRCode}>
                    <div className="flex w-full flex-wrap md:flex-nowrap">
                        <Select
                            label="WIFI Type"
                            placeholder="Select a wifi Type"
                            value={wifiConfig.encryption}
                            onChange={handleChange}
                            isRequired
                        >
                            {wifi_encryptions.map((wifi_encryption) => (
                                <SelectItem key={wifi_encryption.value} value={wifi_encryption.value}>
                                    {wifi_encryption.label}
                                </SelectItem>
                            ))}
                        </Select>
                    </div>

                    <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 pt-5">
                        <Input type="text"
                            variant={'flat'}
                            label="SSID"
                            name="ssid"
                            value={wifiConfig.ssid}
                            onChange={handleChange}
                            isRequired />
                        <Input type="text"
                            variant={'flat'}
                            name="password"
                            label="Password"
                            value={wifiConfig.password}
                            onChange={handleChange}
                            isRequired />
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

export default WifiQrGenerator