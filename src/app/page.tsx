"use client";
import {
  ColumnDirective,
  ColumnsDirective,
  GridComponent,
  Inject,
  Page,
  Sort,
  Filter,
  Group,
} from "@syncfusion/ej2-react-grids";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { data } from "./datasource";
import { useEffect, useState } from "react";

export default function Home() {
  const pageSettings: object = { pageSize: 6 };
  const filterSettings: object = { type: "Excel" };

  const [dataList, setDataList] = useState<any[]>([]);
  const [search, setSearch] = useState<string>("");

  const searchHandler = () => {
    const filteredSearchData = dataList.filter((item) => {
      return Object.values(item).some((value) =>
        String(value).toLowerCase().includes(search.toLowerCase())
      );
    });
    setDataList(filteredSearchData);
  };

  useEffect(() => {
    return setDataList(data);
  }, []);

  return (
    <>
      <div style={{ marginTop: 100, width: 300 }}>
        <input
          className="e-input"
          type="text"
          placeholder="Content to search"
          value={search}
          onChange={(e) => {
            if (e.target.value.trim() === "") {
              setDataList(data);
            }
            setSearch(e.target.value);
          }}
        />
        <ButtonComponent onClick={searchHandler}>Search</ButtonComponent>
      </div>
      <h2>Syncfusion React Grid Component</h2>
      <GridComponent
        dataSource={dataList}
        allowGrouping={true}
        allowSorting={true}
        allowFiltering={true}
        allowPaging={true}
        pageSettings={pageSettings}
        filterSettings={filterSettings}
        height={180}
      >
        <ColumnsDirective>
          <ColumnDirective field="OrderID" width="100" textAlign="Right" />
          <ColumnDirective field="CustomerID" width="100" />
          <ColumnDirective field="EmployeeID" width="100" textAlign="Right" />
          <ColumnDirective
            field="Freight"
            width="100"
            format="C2"
            textAlign="Right"
          />
          <ColumnDirective field="ShipCountry" width="100" />
        </ColumnsDirective>
        <Inject services={[Page, Sort, Filter, Group]} />
      </GridComponent>
    </>
  );
}
