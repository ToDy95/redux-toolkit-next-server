import { ReduxShell } from '@/components/ReduxShell';
import ClientOnlyFeature from '@/components/ClientOnlyFeature';

export default async function ProtectedPage() {
  // Simulating fetching user data
  // In a real application, this could be from an API or database
  // Here we are hardcoding for demonstration purposes
  // You can replace this with actual user data fetching logic
  // For this example, we will use a static user object
  // This is just a placeholder; replace it with actual user data fetching logic
  // const user = await getUserFromDatabase();
  const user = { name: 'Alice', email: 'a@b.com' };

  const preloadedState = {
    user: {
      name: user.name,
      email: user.email,
    },
  };

  return (
    <ReduxShell preloadedState={preloadedState}>
      <ClientOnlyFeature />
    </ReduxShell>
  );
}
