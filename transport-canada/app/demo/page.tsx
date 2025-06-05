import Field from "@/components/Field";
import LeftMenu from "@/components/LeftMenu";

const DemoPage = () => {
  return (
    <div className="mx-auto container">
      <h2 className="text-4xl font-bold">Test page</h2>
      <LeftMenu />

      <div className="grid grid-cols-4">
        <div>
          <Field label={"Field 1"} />
        </div>
        <div>Column 1</div>
        <div>Column 1</div>
        <div>Column 1</div>
      </div>
    </div>
  );
};

export default DemoPage;
