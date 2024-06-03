import React from 'react';
import { Metadata, Viewport } from 'next';
import LayoutClient from '@/components/layoutclient';

export const metadata: Metadata = {
  title: 'Root Layout',
  description: 'Root layout for the application',
};

export const viewport: Viewport = {
  themeColor: 'black',
  viewportFit: 'cover',
  initialScale: 1,
  width: 'device-width',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang='en'>
      <LayoutClient>{children}</LayoutClient>
    </html>
  );
}
