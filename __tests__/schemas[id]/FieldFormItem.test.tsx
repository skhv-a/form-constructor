import { shallow, ShallowWrapper } from "enzyme";
import FieldFormItem from "components/schemas[id]/FieldFormItem";
import { SchemaField } from "types/schema";

type Props = { field: SchemaField };

describe("FieldFormItem", () => {
  let wrapper: ShallowWrapper<Props>;

  const renderWrapper = (props: Props): void => {
    wrapper = shallow(<FieldFormItem {...props} />);
  };

  it("string", () => {
    renderWrapper({
      field: {
        key: "string",
        label: "строка",
        type: "string",
        validation: {},
      },
    });
    expect(wrapper).toMatchSnapshot();
  });
  it("password", () => {
    renderWrapper({
      field: {
        key: "password",
        label: "пароль",
        type: "password",
        validation: {},
      },
    });
    expect(wrapper).toMatchSnapshot();
  });
  it("phone", () => {
    renderWrapper({
      field: {
        key: "phone",
        label: "телефон",
        type: "phone",
        validation: {},
      },
    });
    expect(wrapper).toMatchSnapshot();
  });
  it("number", () => {
    renderWrapper({
      field: {
        key: "number",
        label: "число",
        type: "number",
        validation: {},
      },
    });
    expect(wrapper).toMatchSnapshot();
  });
  it("select", () => {
    renderWrapper({
      field: {
        key: "select",
        label: "значение из селекта",
        type: "select",
        options: [
          {
            key: "foo",
            value: "Первое значение",
          },
          {
            key: "bar",
            value: "Второе значение",
          },
        ],
        validation: {},
      },
    });
    expect(wrapper).toMatchSnapshot();
  });
  it("checkbox", () => {
    renderWrapper({
      field: {
        key: "checkbox",
        label: "чекбокс",
        type: "checkbox",
        validation: {},
      },
    });
    expect(wrapper).toMatchSnapshot();
  });
  it("validation passed", () => {
    renderWrapper({
      field: {
        key: "string",
        label: "строка",
        type: "string",
        validation: {
          required: true,
          min: 5,
          max: 10,
          pattern: "\\d+",
        },
      },
    });
    expect(wrapper).toMatchSnapshot();
  });
});
