const Footer = () => {
  return (
    <footer className="border-t py-12 px-4 lg:px-6">
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-bold">🎅 SecretSanta</h3>
          <p className="text-sm text-muted-foreground">
            Making gift exchanges magical since 2024.
          </p>
        </div>
        <div className="size-2 rounded-full bg-muted" />
        <p className="text-center text-sm text-muted-foreground">
          © 2024 SecretSanta. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
