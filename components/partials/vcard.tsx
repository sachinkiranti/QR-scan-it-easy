import React, { useState } from 'react'
import { Button, Input, Textarea } from "@nextui-org/react"
import QrDisplay from "../qr-display"
import icons from '@/config/constants'

const VCardQrGenerator = () => {

    const TEXT_LENGTH = 1000;
    const [text, setText] = useState('');
    const [qrText, setQrText] = useState('');
    const [vCardConfig, setVCardConfig] = useState({
        name: '',
        company: '',
        website: '',
        position: '',
        phoneMobile: '',
        phoneWork: '',
        phonePrivate: '',
        fax: '',
        email: '',
        country: '',
        state: '',
        street: '',
        city: '',
        zipcode: '',
        bio: ''
    });

    const [error, setError] = useState('');

    const handleChange = (e: { target: { name: any; value: any } }) => {
        const { name, value } = e.target;
        setVCardConfig({
            ...vCardConfig,
            [name]: value
        });
    };

    const handleGenerateQRCode = (e: React.FormEvent) => {
        e.preventDefault();
        try {
  
            const vCardStr = `
BEGIN:VCARD
VERSION:3.0
FN:${vCardConfig.name}
ORG:${vCardConfig.company}
URL:${vCardConfig.website}
TITLE:${vCardConfig.position}
TEL;TYPE=WORK,VOICE:${vCardConfig.phoneWork}
TEL;TYPE=CELL,VOICE:${vCardConfig.phoneMobile}
TEL;TYPE=HOME,VOICE:${vCardConfig.phonePrivate}
TEL;TYPE=FAX:${vCardConfig.fax}
EMAIL:${vCardConfig.email}
ADR;TYPE=WORK:;;${vCardConfig.street};${vCardConfig.city};${vCardConfig.state};${vCardConfig.zipcode};${vCardConfig.country}
NOTE:${vCardConfig.bio}
END:VCARD
            `.trim();

            setText(vCardStr)

            if (text.length > 1000) {
                throw new RangeError('Input too long. Max 1000 characters.');
            }

            setError('');
            setQrText(vCardStr);
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
                    {icons.phone} <span className="pl-2">VCard</span>
                </h2>
                <p className="pb-6">Enter the VCard data entry</p>
                <form onSubmit={handleGenerateQRCode}>
                    <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 pt-5">
                        <Input type="text"
                            variant={'flat'}
                            name="name"
                            value={vCardConfig.name}
                            onChange={handleChange}
                            label="Name"
                            isRequired />

                        <Input type="text"
                            variant={'flat'}
                            label="Company Name"
                            name="company"
                            value={vCardConfig.company}
                            onChange={handleChange}
                            isRequired />
                    </div>

                    <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 pt-5">
                        <Input type="url"
                            variant={'flat'}
                            name="website"
                            value={vCardConfig.website}
                            onChange={handleChange}
                            label="Website URL" />

                        <Input type="text"
                            variant={'flat'}
                            name="position"
                            value={vCardConfig.position}
                            onChange={handleChange}
                            label="Position" />
                    </div>

                    <p className="my-4">Contact Information</p>

                    <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                        <Input type="text"
                            variant={'flat'}
                            name="phoneMobile"
                            value={vCardConfig.phoneMobile}
                            onChange={handleChange}
                            label="Phone (Mobile)" />
                        <Input type="text"
                            variant={'flat'}
                            name="phoneWork"
                            value={vCardConfig.phoneWork}
                            onChange={handleChange}
                            label="Phone (Work)" />
                    </div>

                    <div className="flex w-full flex-wrap md:flex-nowrap pt-5 mb-6 md:mb-0 gap-4">
                        <Input type="text"
                            variant={'flat'}
                            name="phonePrivate"
                            value={vCardConfig.phonePrivate}
                            onChange={handleChange}
                            label="Phone (Private)" />
                        <Input type="text"
                            variant={'flat'}
                            name="fax"
                            value={vCardConfig.fax}
                            onChange={handleChange}
                            label="Fax" />
                    </div>

                    <div className="flex w-full flex-wrap md:flex-nowrap pt-5 mb-6 md:mb-0 gap-4">
                        <Input type="email"
                            variant={'flat'}
                            name="email"
                            value={vCardConfig.email}
                            onChange={handleChange}
                            label="Email Address" />
                    </div>

                    <p className="my-4">Address</p>

                    <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                        <Input type="text"
                            name="country"
                            value={vCardConfig.country}
                            onChange={handleChange}
                            variant={'flat'}
                            label="Country" />
                        <Input type="text"
                            name="state"
                            value={vCardConfig.state}
                            onChange={handleChange}
                            variant={'flat'}
                            label="State" />
                    </div>

                    <div className="flex w-full flex-wrap md:flex-nowrap pt-5 mb-6 md:mb-0 gap-4">
                        <Input type="text"
                            name="street"
                            value={vCardConfig.street}
                            onChange={handleChange}
                            variant={'flat'}
                            label="Street" />
                    </div>

                    <div className="flex w-full flex-wrap md:flex-nowrap pt-5 mb-6 md:mb-0 gap-4">
                        <Input type="text"
                            name="city"
                            value={vCardConfig.city}
                            onChange={handleChange}
                            variant={'flat'}
                            label="City" />
                        <Input type="text"
                            name="zipcode"
                            value={vCardConfig.zipcode}
                            onChange={handleChange}
                            variant={'flat'}
                            label="Zipcode" />
                    </div>

                    <p className="my-4">Personal Description</p>

                    <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                        <Textarea type="text"
                            name="bio"
                            value={vCardConfig.bio}
                            onChange={handleChange}
                            variant={'flat'}
                            label="Bio" />
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

export default VCardQrGenerator