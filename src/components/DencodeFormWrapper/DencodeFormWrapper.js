import React, {useState} from "react";
import './DencodeFormWrapper.css'
import PropTypes from 'prop-types'
import DencodeForm from "../DencodeForm";

const DencodeFormWrapper = (props) => {

  const {apiBase} = props
  const [shouldDecodeMessage, setShouldDecodeMessage] = useState(false)

  const getDencodeFormUrl = () => {
    return apiBase + (shouldDecodeMessage ? '/api/decode' : '/api/encode')
  }

  const getSubmitButtonLabel = () => {
    return shouldDecodeMessage ? 'Decode message' : 'Encode message'
  }

  return (
    <div className="DencodeFormWrapper">
      <DencodeForm
        title="Encode message"
        uri={getDencodeFormUrl()}
        setShouldDecodeMessage={setShouldDecodeMessage}
        submitButtonLabel={getSubmitButtonLabel()}
      />
    </div>
  )
}

DencodeFormWrapper.propTypes = {
  apiBase: PropTypes.string
}

export default DencodeFormWrapper