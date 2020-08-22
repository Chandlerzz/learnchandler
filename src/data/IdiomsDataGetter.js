import React, { Component } from "react";
import { DataTypes } from "../data/Types";

export class IdiomsDataGetter extends Component {

    render() {
        return <React.Fragment>{ this.props.children }</React.Fragment>
    }

    componentDidUpdate = () => this.getData();
    componentDidMount = () => this.getData();

    getData = () => {
        const dsData = this.props.idioms_params || {} ;
        const rtData = {
           word: this.props.searchWord || "",
           update:this.props.updatedValue || 0 ,
        }

        if (Object.keys(rtData).find(key => dsData[key] !== rtData[key])) {
            this.props.loadDataIdioms(DataTypes.IDIOMS,rtData);
        }
    }
}
