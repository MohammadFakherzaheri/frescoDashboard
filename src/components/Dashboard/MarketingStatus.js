import React,{useLayoutEffect} from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import {Row,Col} from 'antd';
import FeatherIcon from 'feather-icons-react'
import {Main} from './styled';
import {Cards} from '../CardsLayourt/cartFrames'
const MarketingStatusChart = ()=>{

    useLayoutEffect(()=>{
        let root = am5.Root.new("piechardiv");
        root.setThemes([
            am5themes_Animated.new(root)
          ]);
    
          let chart = root.container.children.push(am5percent.PieChart.new(root, {
            layout: root.verticalLayout,
            innerRadius: am5.percent(40)
          }));
          let series0 = chart.series.push(am5percent.PieSeries.new(root, {
            valueField: "bottles",
            categoryField: "comapnies",
            alignLabels: false
          }));
          let bgColor = root.interfaceColors.get("background");
    
    series0.ticks.template.setAll({ forceHidden: true });
    series0.labels.template.setAll({ forceHidden: true });
    series0.slices.template.setAll({
      stroke: bgColor,
      strokeWidth: 2,
      
    });
    series0.slices.template.states.create("hover", { scale: 0.95 });
    
    let series1 = chart.series.push(am5percent.PieSeries.new(root, {
      valueField: "litres",
      categoryField: "comapnies",
      alignLabels: true
    }));
    
    series1.slices.template.setAll({
        stroke: bgColor,
        strokeWidth: 2,
       
      });
      
      let current = [{
        comapnies: "Aspiring Bankers",
        litres: 50.9,
        bottles: 100
      }, {
        comapnies: "Punjabi Unversity",
        litres: 301.9,
        bottles: 90
      }, {
        comapnies: "Medioks ",
        litres: 201.1,
        bottles: 78
      }, {
        comapnies: "CareMust",
        litres: 15.8,
        bottles: 25
      }, {
        comapnies: "HeartsnHands",
        litres: 139.9,
        bottles: 45
      }, {
        comapnies: "Khalkat Designs",
        litres: 18.3,
        bottles: 32
      }, {
        comapnies: "Hartek Group",
        litres: 99,
        bottles: 150
      }, {
        comapnies: "Getwork Traning UK",
        litres: 60,
        bottles: 178
      }, {
        comapnies: "Fresco Web Services Pvt. Ltd.",
        litres: 50,
        bottles: 50
      }];
      
      let closed = [{
        comapnies: "NIMIMS",
        litres: 501.9,
        bottles: 1500
      }, {
        comapnies: "NVP ",
        litres: 301.9,
        bottles: 990
      }];
      let cancelled = [{
        comapnies: "Khalkat Designs",
        litres: 501.9,
        bottles: 1500
      }, {
        comapnies: "Czech Republic",
        litres: 301.9,
        bottles: 990
      }, {
        comapnies: "Ireland",
        litres: 201.1,
        bottles: 785
      }, {
        comapnies: "Germany",
        litres: 165.8,
        bottles: 255
      }, {
        comapnies: "Australia",
        litres: 139.9,
        bottles: 452
      }];
      // Set data





          series0.data.setAll(current);
          series1.data.setAll(closed);
          // series2.data.setAll(cancelled);
     

      // Play initial series animation
      series0.appear(1000, 100);
      series1.appear(1000, 100);
      // series2.appear(1000, 100);
    })
   



    return(
        <Main>
            <Row gutter={25} >
            <Col xxl={24} xs={24} >
                        <Cards style={{paddingTop:7}} title={(<div className="totalprojectMenu">
                            <div className="totalproject-submenu" >
                            <FeatherIcon icon="check-circle" size={24} color="red"/>
                                <span>Current</span>
                            </div>
                            <div className="totalproject-submenu" >
                            <FeatherIcon icon="check" size={24} color="green"/>
                                <span>Closed</span>
                            </div>
                            <div className="totalproject-submenu" >
                            <FeatherIcon icon="x" size={24} color="orange"/>
                                <span>Cancelled</span>
                            </div>
                        </div>)}>
                        <div id="piechardiv" style={{ width: "100%", height: "200px" }} className="positionrelative heightdesign"></div>
                        </Cards>
                    </Col>
            </Row>
        </Main>
    )
}
export default MarketingStatusChart;