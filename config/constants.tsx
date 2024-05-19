import { AdjustmentsHorizontalIcon, DocumentTextIcon, LinkIcon, PhoneIcon, QrCodeIcon, WifiIcon } from '@heroicons/react/24/outline';

const icons = {
    url: <LinkIcon className="text-blue-500" width={20} height={20} />,
    phone: <PhoneIcon className="text-danger" width={20} height={20} />,
    link: <LinkIcon className="text-warning" width={20} height={20} />,
    wifi: <WifiIcon className="text-success" width={20} height={20} />,
    document: <DocumentTextIcon className="text-secondary" width={20} height={20} />,
    resources: <AdjustmentsHorizontalIcon className="text-blue-500" width={16} height={16} />,
    qr: <QrCodeIcon className="h-6 w-6 text-yellow-500" />
};

export default icons;

export const wifi_encryptions = [
    { label: "WPA/WPA2", value: "WPA", description: "WPA/WPA2" },
    { label: "WEP", value: "WEP", description: "WEP" },
    { label: "None", value: "nopass", description: "None" },
];
