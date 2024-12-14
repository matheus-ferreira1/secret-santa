import CreateGroupForm from "./create-group-form";

const CreateGroupPage = () => {
  return (
    <div className="py-8 w-full px-4 lg:px-6">
      <div className="space-y-8">
        <h2 className="text-3xl font-bold tracking-tight">
          Create a New Secret Santa Group
        </h2>
        <CreateGroupForm />
      </div>
    </div>
  );
};

export default CreateGroupPage;
