const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main>
      Left Sidebar
      {children}
      Right Sidebar
    </main>
  );
};

export default RootLayout;
