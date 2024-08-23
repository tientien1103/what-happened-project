import Container from "@/components/common/container";

export default function SubPagesLayout({ children }) {
  return (
    <main className="h-full w-full bg-white pb-24 pt-44">
      <Container>
        <div className="flex-col w-full items-center justify-center flex">
          {children}
        </div>
      </Container>
    </main>
  );
}
