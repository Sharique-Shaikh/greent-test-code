
import HomeLayout from './pageLayout';

export const metadata = {
  title: "Home | Greentern",
  description: "Welcome to Greentern, where we empower businesses with innovative technology solutions and products to help them grow, sustain, and lead in their industries.",
};

// This component having diff background image - added for demo purpose
export default function Home() {
  return (
    <>
      <HomeLayout />
    </>
  );
}
