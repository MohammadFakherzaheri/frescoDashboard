import { Col, Row } from "antd";
import React, { useLayoutEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import {Main} from './styled'
import {Cards} from '../CardsLayourt/cartFrames'
const LOIStatus = ()=>{

    useLayoutEffect(()=>{
        let root = am5.Root.new("LOIStatus");
        root.resize();
        root.setThemes([
            am5themes_Animated.new(root)
          ]);
          let chart = root.container.children.push(am5xy.XYChart.new(root, {
            panX: true,
            panY: true,
            wheelX: "none",
            wheelY: "none"
          }))
          chart.zoomOutButton.set("forceHidden", true);
          let xRenderer = am5xy.AxisRendererX.new(root, {
            minGridDistance: 30
          });
          xRenderer.labels.template.setAll({
            rotation: -90,
            centerY: am5.p50,
            centerX: 0,
            paddingRight: 15
          });
          xRenderer.grid.template.set("visible", false);
          
          let xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
            maxDeviation: 0.10,
            categoryField: "companies",
            renderer: xRenderer,
            oversizedBehavior: "truncate",
            maxWidth: "100%",
            height:"100px",
            ellipsis: "...",
          }));
          
          let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
            maxDeviation: 0.3,
            min: 0,
            renderer: am5xy.AxisRendererY.new(root, {})
          }));

          let series = chart.series.push(am5xy.ColumnSeries.new(root, {
            name: "Series 1",
            xAxis: xAxis,
            yAxis: yAxis,
            valueYField: "value",
            categoryXField: "companies",
          
          }));

          series.columns.template.setAll({
            cornerRadiusTL: 5,
            cornerRadiusTR: 5
          });
     
          series.columns.template.adapters.add("fill", function (fill, target) {
            return chart.get("colors").getIndex(series.columns.indexOf(target ));
          });
          
          series.columns.template.adapters.add("stroke", function (stroke, target) {
            return chart.get("colors").getIndex(series.columns.indexOf(target ));
          });
          
          series.bullets.push(function () {
            return am5.Bullet.new(root, {
              locationY: 1,
              sprite: am5.Label.new(root, {
                text: "{valueYWorking.formatNumber('#.')} ",
                fill: root.interfaceColors.get("alternativeText"),
                centerY: 0,
                centerX: am5.p50,
                populateText: true
              })
            });
          });
          
          // Set data
          let data = [{
            "companies": "Aspiring Bankers",
            "value": 2022
          }, {
            "companies": "Punjabi Unversity",
            "value": 1882
          }, {
            "companies": "Medioks",
            "value": 1809
          }, {
            "companies": "CareMust",
            "value": 1322
          }, {
            "companies": "HeartsnHands",
            "value": 1122
          }, {
            "companies": "Khalkat Designs",
            "value": 1114
          }, {
            "companies": "Hartek Group",
            "value": 984
          }, {
            "companies": "Getwork Traning UK",
            "value": 711
          }, {
            "companies": "Fresco Web Services",
            "value": 665
          }];
          
        // Add legend
var legend = chart.children.push(am5.Legend.new(root, {
  nameField: "companiesX",
  centerX: am5.percent(50),
  x: am5.percent(50)
}));

legend.data.setAll(series.dataItems);
          
          legend.data.setAll(series.dataItems);

          xAxis.data.setAll(data);
          series.data.setAll(data);
          
          // update data with random values each 1.5 sec
          setInterval(function () {
            updateData();
          }, 3500)
          
          function updateData() {
            am5.array.each(series.dataItems, function (dataItem) {
              let value = dataItem.get("valueY") + Math.round(Math.random() * 300 - 150);
              if (value < 0) {
                value = 10;
              }
              // both valueY and workingValueY should be changed, we only animate workingValueY 
              dataItem.set("valueY", value);
              dataItem.animate({
                key: "valueYWorking",
                to: value,
                duration: 3500,
                easing: am5.ease.out(am5.ease.cubic)
              });
            })
          
            sortCategoryAxis();
          }
          
          
          // Get series item by category
          function getSeriesItem(category) {
            for (var i = 0; i < series.dataItems.length; i++) {
              let dataItem = series.dataItems[i];
              if (dataItem.get("categoryX") == category) {
                return dataItem;
              }
            }
          }
          
          function sortCategoryAxis() {
          
            series.dataItems.sort(function (x, y) {
              return y.get("valueY") - x.get("valueY");
            })
          

            am5.array.each(xAxis.dataItems, function (dataItem) {

              let seriesDataItem = getSeriesItem(dataItem.get("category"));
          
              if (seriesDataItem) {

                let index = series.dataItems.indexOf(seriesDataItem);

                let deltaPosition = (index - dataItem.get("index", 0)) / series.dataItems.length;

                dataItem.set("index", index);

                dataItem.set("deltaPosition", -deltaPosition);

                dataItem.animate({
                  key: "deltaPosition",
                  to: 0,
                  duration: 1000,
                  easing: am5.ease.out(am5.ease.cubic)
                })
              }
            });
          
            xAxis.dataItems.sort(function (x, y) {
              return x.get("index") - y.get("index");
            });
          }
          series.appear(1000);
          chart.appear(1000, 100);
    })

    return(
    <Main>
        <Row gutter={25}>
            <Col xxl={24} xs={24}>
            <Cards title="LOI Issued By Deprtement">
                <div id="LOIStatus" style={{ width: "100%", height: "224px" }} className="positionrelative heightdesign"></div>
            </Cards>
            </Col>
        </Row>
    </Main>
    )
}
export default LOIStatus;