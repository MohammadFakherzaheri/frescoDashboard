import React, { useLayoutEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5radar from "@amcharts/amcharts5/radar";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import { Main } from "./styled";
import {Row,Col} from 'antd';
import { Cards } from "../CardsLayourt/cartFrames";

const GPA_1 = ()=>{

useLayoutEffect(()=>{
    let root = am5.Root.new("GPA_3");
    root.setThemes([
        am5themes_Animated.new(root)
      ]);
      
      // Create chart
      // https://www.amcharts.com/docs/v5/charts/radar-chart/
      let chart = root.container.children.push(am5radar.RadarChart.new(root, {
        panX: false,
        panY: false,
        wheelX: "panX",
        wheelY: "zoomX",
        innerRadius: am5.percent(80),
        startAngle: -90,
        endAngle: 180
      }));
      
      
      // Data
      let data = [{
     
        category: "GPA 3",
        value: 35,
        full: 100,
        columnSettings: {
          fill: chart.get("colors").getIndex(1)
        }
      }];
      
      // Add cursor
      // https://www.amcharts.com/docs/v5/charts/radar-chart/#Cursor
      let cursor = chart.set("cursor", am5radar.RadarCursor.new(root, {
        behavior: "zoomX"
      }));
      
      cursor.lineY.set("visible", false);
      
      // Create axes and their renderers
      // https://www.amcharts.com/docs/v5/charts/radar-chart/#Adding_axes
      let xRenderer = am5radar.AxisRendererCircular.new(root, {
        //minGridDistance: 50
      });
      
      xRenderer.labels.template.setAll({
        radius: 10
      });
      
      xRenderer.grid.template.setAll({
        forceHidden: true
      });
      
      let xAxis = chart.xAxes.push(am5xy.ValueAxis.new(root, {
        renderer: xRenderer,
        min: 0,
        max: 100,
        strictMinMax: true,
        numberFormat: "#'%'",
        tooltip: am5.Tooltip.new(root, {})
      }));
      
      
      let yRenderer = am5radar.AxisRendererRadial.new(root, {
        minGridDistance: 20
      });
      
      yRenderer.labels.template.setAll({
        centerX: am5.p100,
        fontWeight: "500",
        fontSize: 18,
        templateField: "columnSettings"
      });
      
      yRenderer.grid.template.setAll({
        forceHidden: true
      });
      
      let yAxis = chart.yAxes.push(am5xy.CategoryAxis.new(root, {
        categoryField: "category",
        renderer: yRenderer
      }));
      
      yAxis.data.setAll(data);
      
      
      // Create series
      // https://www.amcharts.com/docs/v5/charts/radar-chart/#Adding_series
      let series1 = chart.series.push(am5radar.RadarColumnSeries.new(root, {
        xAxis: xAxis,
        yAxis: yAxis,
        clustered: false,
        valueXField: "full",
        categoryYField: "category",
        fill: root.interfaceColors.get("alternativeBackground")
      }));
      
      series1.columns.template.setAll({
        width: am5.p100,
        fillOpacity: 0.08,
        strokeOpacity: 0,
        cornerRadius: 20
      });
      
      series1.data.setAll(data);
      
      
      let series2 = chart.series.push(am5radar.RadarColumnSeries.new(root, {
        xAxis: xAxis,
        yAxis: yAxis,
        clustered: false,
        valueXField: "value",
        categoryYField: "category"
      }));
      
      series2.columns.template.setAll({
        width: am5.p100,
        strokeOpacity: 0,
        tooltipText: "{category}: {valueX}%",
        cornerRadius: 20,
        templateField: "columnSettings"
      });
      
      series2.data.setAll(data);
      
      // Animate chart and series in
      // https://www.amcharts.com/docs/v5/concepts/animations/#Initial_animation
      series1.appear(1000);
      series2.appear(1000);
      chart.appear(1000, 100);
      
    
})


    return(
        <Main>
            <Row>
                <Col xxl={24} xs={24} className="card_gpa">
                    <Cards>
                    <div className="gpas_title">
                            <div id="GPA_3" style={{ width: "100%", height: "200px" }} className="positionrelative heightdesign"></div>
                            <div>
                                <span>GPA 3</span>
                                <h5>MRP vs Built</h5>
                                <h4>-27,315,350</h4>
                            </div>
                        </div>
                    </Cards>
                </Col>
            </Row>
        </Main>
    )
}
export default GPA_1;