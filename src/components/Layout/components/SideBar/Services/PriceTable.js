import React, { Component, Fragment } from "react"
import DatePickerComponent from '../DatePicker/DatePicker'
import './PriceTable.scss'
import Select from 'react-select';
import { Redirect } from "react-router-dom"
import { Link } from "react-router-dom";
import convertBase64 from "../../../../../utils/ImageBase64"


class PriceTable extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }


    handleUpLoadImg = (e) => {
        console.log(e.target.files[0])
        // let image = convertBase64(e)

    }
    render() {
        return (
            <>
                <div className="price_wrapper">
                    <div className="price_table">


                    </div>
                    <div className="price_model_AI">
                        <div>
                            <label className='load_image' for="file">
                                <div className="main_text">
                                    AI nè mấy con chó

                                </div>
                            </label>
                            <input
                                onChange={(e) => this.handleUpLoadImg(e)}
                                name="file" id="file" type="file" className="price_input_file" />

                        </div>

                    </div>

                </div>
            </>
        )
    }

}




export default PriceTable
