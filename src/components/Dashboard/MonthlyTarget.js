import React, { useLayoutEffect } from "react";
import { Main } from "./styled";
import {Row,Col} from 'antd';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import FeatherIcon from 'feather-icons-react'
import { Cards } from "../CardsLayourt/cartFrames";



const MonthlyTargetChart=()=>{

    useLayoutEffect(()=>{
        let root = am5.Root.new("monthlytargetchart");
        root.setThemes([
            am5themes_Animated.new(root)
          ]);
          let chart = root.container.children.push(am5xy.XYChart.new(root, {
            panX: true,
            panY: true,
            wheelX: "panX",
            wheelY: "zoomX",
            pinchZoomX:true
          }));
          let cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
cursor.lineY.set("visible", false);
let date = new Date();
date.setHours(0, 0, 0, 0);
let value = 100;

function generateData() {
  value = Math.round((Math.random() * 10 - 5) + value);

  if (value < 10) {
    value = 10;
  }

  am5.time.add(date, "day", 1);
  return { date: date.getTime(), value: value };
}

function generateDatas(count) {
  let data = [];
  for (var i = 0; i < count; ++i) {
    data.push(generateData());
  }
  return data;
}


// Create axes

let xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
  baseInterval: { timeUnit: "day", count: 1 },
  renderer: am5xy.AxisRendererX.new(root, {}),
  tooltip: am5.Tooltip.new(root, {})
}));

let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
  renderer: am5xy.AxisRendererY.new(root, {})
}));

// Add series

let series = chart.series.push(am5xy.StepLineSeries.new(root, {
  name: "Series",
  xAxis: xAxis,
  yAxis: yAxis,
  valueYField: "value",
  valueXField: "date",
  noRisers: true,
  tooltip: am5.Tooltip.new(root, {
    labelText: "{valueY}"
  })
}));

series.strokes.template.setAll({
  strokeWidth: 3
});

series.fills.template.setAll({
  fillOpacity: 0.1,
  visible: true
});


// Add scrollbar

chart.set("scrollbarX", am5.Scrollbar.new(root, {
  orientation: "horizontal"
}));

let data = generateDatas(50);
series.data.setAll(data);

// Make stuff animate on load

series.appear(1000);
chart.appear(1000, 100);

    })

    return(
        <Main>
            <Row>
                <Col xxl={24} xs={24}>
                    <Cards title={(
                        <>
                    <Row className="monthlytargetMenu">
                            <Col xxl={8} xs={8} className="monthlytarget-submenu">
                                <div>
                                    <span>Target of April 2022</span>
                                </div>
                            </Col>
                            <Col xxl={8} xs={8} className="monthlytarget-submenu">
                                <div >
                                    <span>Actual of April 2022</span>
                                </div>
                            </Col>
                            <Col xxl={8} xs={8} className="monthlytarget-submenu">
                                <div  >
                                    <span>GPA</span>
                                </div>
                            </Col>
                        </Row>
                        <Row className="monthlytargetMenu">
                            <Col xxl={8} xs={8} className="monthlytarget-submenu border_right">
                                <div >
                                <FeatherIcon icon="check-circle" size={24} color="red"/>
                                    <span>145 M</span>
                                </div>
                            </Col>
                            <Col xxl={8} xs={8} className="monthlytarget-submenu border_right">
                                <div >
                                <FeatherIcon icon="check-circle" size={24} color="red"/>
                                    <span>128 M</span>
                                </div>
                            </Col>
                            <Col xxl={8} xs={8} className="monthlytarget-submenu">
                                <div>
                                <FeatherIcon icon="check-circle" size={24} color="red"/>
                                    <span>-17 M</span>
                                </div>
                            </Col>
                        </Row>
                        
                        </>
                        )}>
                            <div id="monthlytargetchart" style={{ width: "100%", height: "200px" }} className="positionrelative heightdesign"></div>    
                    </Cards>
                </Col>
            </Row>
        </Main>
    )
}
export default MonthlyTargetChart;