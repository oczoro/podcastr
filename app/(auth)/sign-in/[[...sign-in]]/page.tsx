import { SignIn } from '@clerk/nextjs';

const Page = () => {
  return (
    <div className="flex-center glassmorphism-auth h-screen">
      <SignIn />
    </div>
  );
};

export default Page;
