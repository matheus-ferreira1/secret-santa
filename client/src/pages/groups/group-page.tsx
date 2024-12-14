import GroupDetails from "./group-details";

const mockGroup = {
  id: "1",
  name: "Family Christmas",
  description: "Annual family Secret Santa gift exchange",
  drawDate: "2023-12-01",
  isDrawComplete: false,
  participants: [
    {
      id: "1",
      name: "Alice Smith",
      email: "alice@example.com",
      isModerator: true,
    },
    {
      id: "3",
      name: "Bob Johnson",
      email: "bob@example.com",
      isModerator: false,
    },
    {
      id: "4",
      name: "Charlie Brown",
      email: "charlie@example.com",
      isModerator: false,
    },
  ],
  currentUserId: "1",
};

const GroupPage = () => {
  return (
    <div className="py-8 w-full px-4 lg:px-6">
      <div className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">
          Group Details: {mockGroup.name}
        </h2>
        <GroupDetails group={mockGroup} />
      </div>
    </div>
  );
};

export default GroupPage;
