import React, { Component } from 'react';
import { connect } from 'react-redux';
import {InteractiveForceGraph, ForceGraph, ForceGraphNode, ForceGraphLink, ForceGraphArrowLink} from 'react-vis-force';
import {user1} from '../constants/users';
import { user1_data_url, user2_data_url } from '../constants/ApiURLs';
import {get_graph_data} from '../actions';



class Graph extends Component {
  constructor(props, context){
    super(props, context);
    this.renderGraph = this.renderGraph.bind(this);
    this.parseData = this.parseData.bind(this);
    console.log('user'+ this.props);
  }

  parseData(data){
    var arrowList = [];
    var nodeList = [];


    data.map((mail) => {
        const msg = mail.message;
        console.log('MSG:' + msg);
        var from = msg.match(new RegExp("\nFrom: " + "(.*)" + "\nTo: "))[1];
        console.log('from:'+ from);
        if (nodeList.some(item => item === from)){
           console.log('skipping from :'+ from);
        }else{
          nodeList.push(from);
        }
        var to = msg.match(new RegExp("\nTo: " + "(.*)" + "\nSubject: "))[1];
        if (nodeList.some(item => item === to)){
          console.log('skipping to :'+ to);
        }else{
          nodeList.push(to);
        }
        if (arrowList.some(item => item[0] === from && item[1] === to)){
          console.log('skipping arrow: '+ from + '-> ' + to);
        }else{
          arrowList.push([from, to])
        }
    });
    return {
      'arrowList':arrowList,
      'nodeList': nodeList
    }
  }
  renderGraph(data){
    console.log("loding graph:"+this.props);
    // const colors = ['red', 'cyan', 'green', 'blue', 'black']
    const colors = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
		  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
    const GraphNodes = data.nodeList.map(item => {
      let color_i = colors[Math.floor(Math.random()*colors.length)];
      return <ForceGraphNode node={{ id: item, label:  item }} fill={colors[color_i]}></ForceGraphNode>
    });
    console.log('graph node'+ GraphNodes);
    return (
      <div>
        Graph
        <div>
          <InteractiveForceGraph
          simulationOptions={{ height: 300, width: 300, animate:true }}
          labelAttr="label"
          onSelectNode={(node) => console.log(node)}
          highlightDependencies
          >
            {data.nodeList.map(item => {
              var color_i = colors[Math.floor(Math.random()*colors.length)];
              console.log('color i'+ color_i);
              return <ForceGraphNode node={{ id: item, label:  item, radius:10}} fill={color_i}></ForceGraphNode>
            })}
            {data.arrowList.map(item => {
              return <ForceGraphArrowLink link={{ source: item[0], target: item[1], value:100 }} ></ForceGraphArrowLink>
            })}
          </InteractiveForceGraph>
        </div>
      </div>
    );
  }
  render() {
      console.log("props: "+ this.props);
      const {graph_data} = this.props.user;
      // get from, to, msgLength
      const parsed_data = this.parseData(graph_data);
      console.log('re deringparsed data: '+ parsed_data);
      return (
        <div>{this.renderGraph(parsed_data)}</div>
      );
    }
}
function mapStateToProps(state) {
  const { user } = state;
  return {
    user,
  };
}
export default connect(mapStateToProps,{
  get_graph_data
})(Graph);
