import Image from 'next/image';

export const YourComponent = () => (
    <Image
        src="/images/mega.jpg" // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={144} // Desired size with correct aspect ratio
        alt="Your Name"
    />
);
