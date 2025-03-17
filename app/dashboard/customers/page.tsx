import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customers",
};

export default function Page() {
  const name = "My name is emeka eziagulu and i am from the bronx nigga!";

  return (
    <div>
      <h1 className="text-black text-2xl">Customer page</h1>

      <div>
        <p>Customers details</p>
      </div>
    </div>
  );
}
