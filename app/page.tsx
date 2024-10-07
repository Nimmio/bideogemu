import BacklogEntry from "@/components/BacklogEntry";

export default function Home() {
  return (
    <main>
      <BacklogEntry name="test1" status="playing" />
      <BacklogEntry name="test2" status="dropped" />
      <BacklogEntry name="test3" status="bla" />
    </main>
  );
}
