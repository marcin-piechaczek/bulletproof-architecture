import { Button } from '@monorepo/ui';

const Page = () => (
  <div className="inline-flex flex-col gap-4">
    <Button>My default button</Button>
    <Button variant="destructive">My destructive button</Button>
    <Button variant="ghost">My ghost button</Button>
    <Button variant="link">My link button</Button>
    <Button variant="outline">My outline button</Button>
    <Button variant="secondary">My secondary button</Button>
  </div>
);

export default Page;
