import { ReactNode } from 'react';
import { DocumentTextIcon, LinkIcon, PhoneIcon, WifiIcon } from '@heroicons/react/24/outline';

type IconKeys = 'phone' | 'link' | 'wifi' | 'document';

type Icons = {
  [key in IconKeys]: ReactNode;
};

declare const icons: Icons;

export { icons };
export type { IconKeys, Icons };