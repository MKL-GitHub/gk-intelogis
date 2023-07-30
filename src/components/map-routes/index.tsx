import { FC, memo, useState } from "react";
import { Table } from "antd";

import { Point } from "@types";
import { MapRoute } from "@store/types";
import "./index.scss";

export interface MapRoutesProps {
  data: MapRoute[];
  onRouteClick: (rowData: Point[]) => void;
}

const MapRoutes: FC<MapRoutesProps> = ({ data, onRouteClick }) => {
  const [selectedRowKey, setSelectedRowKey] = useState<number | null>(null);

  const columns = [
    {
      title: "№",
      dataIndex: "id",
      key: "id",
      width: "3rem",
    },
    {
      title: "Маршруты (долгота, широта)",
      dataIndex: "points",
      key: "id",
      width: "15rem",
      render: (points: Point[]) => (
        <ul>
          {points.map((point: Point) => (
            <li key={point.join()}>{`(${point[0]}, ${point[1]})`}</li>
          ))}
        </ul>
      ),
    },
  ];

  const onRow = (route: MapRoute) => ({
    onClick: () => {
      setSelectedRowKey(route.id);
      onRouteClick(route.points);
    },
  });

  const rowClassName = (record: MapRoute) =>
    `LeafletRoutes-row ${
      record.id === selectedRowKey && "LeafletRoutes-row_selected"
    }`;

  return (
    <Table
      pagination={false}
      className="LeafletRoutes"
      columns={columns}
      dataSource={data}
      onRow={onRow}
      rowKey={(route) => route.id}
      rowClassName={rowClassName}
      scroll={{ y: "95.84603vh" }}
    />
  );
};

const MemoizedMapRoutes = memo(MapRoutes);

export { MemoizedMapRoutes as MapRoutes };
