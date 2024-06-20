import { useState, useEffect, useMemo } from "react";
import { Combobox } from "@headlessui/react";

const MyCombobox = ({ listCategories, id, onCategoryChange }) => {
  const [selected, setSelected] = useState(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const category = listCategories.find((value) => value.id === id);
    setSelected(category);
  }, [listCategories, id]);

  const filteredCategories = useMemo(() => {
    return query.trim() === ""
      ? listCategories
      : listCategories.filter((category) =>
          category.name.toLowerCase().includes(query.trim().toLowerCase())
        );
  }, [query, listCategories]);

  const handleCategoryChange = (category) => {
    if (category) {
      setSelected(category);
      onCategoryChange(category.id);
    } else {
      setQuery("");
    }
  };
  const handleKeyDown = (event) => {
    console.log(event.key);
    if (event.key === "Backspace") {
      setQuery("");
      setSelected(null);
      onCategoryChange(null);
    }
  };
  return (
    <Combobox value={selected} onChange={handleCategoryChange}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Combobox.Input
          style={{
            marginLeft: "10px",
            display: "inline",
            width: "80%",
          }}
          placeholder="Chọn loại"
          onKeyDown={(event) => handleKeyDown(event)}
          onChange={(event) => setQuery(event.target.value)}
          displayValue={(category) => (category ? category.name : "")}
        />
        {filteredCategories.length > 0 && (
          <Combobox.Options>
            {filteredCategories.map((category) => (
              <Combobox.Option key={category.id} value={category}>
                {({ active, selected }) => (
                  <div
                    style={{
                      backgroundColor: active ? "#f0f0f0" : "transparent",
                      fontWeight: selected ? "bold" : "normal",
                    }}
                  >
                    {category.name}
                  </div>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  );
};

export default MyCombobox;
