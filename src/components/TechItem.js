import React from 'react'
import PropTypes from "prop-types"
export default function TechItem({Delete, tech}) {
    return (
        <div>
            <li key={tech}>
                {tech}
                <button onClick={Delete} type="button">Remover</button>
            </li>
        </div>
    )
}
TechItem.defaultProps = {
    tech:"", // aparece quando um TechItem é lançado(componente...a tag <TechList />!) sem valor prévio na TechList
}

TechItem.propTypes = {
    tech: PropTypes.string
}
