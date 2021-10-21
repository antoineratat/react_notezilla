import React from 'react'
import ScratchAddForm from '../../forms/scratchAddForm/ScratchAddForm'
import './ScratchPadComponent.css'

export default function ScratchPadComponent(props) {
	const {
		scratch_title,
		scratch_content,
		isLoadingScratch,
		handleAddScratch,
		handleDeleteScratch,
		isLoadingDeleteScratch,
		handleScratchToNote,
	} = props

	return (
		<ScratchAddForm
			scratch_title={scratch_title}
			scratch_content={scratch_content}
			isLoadingScratch={isLoadingScratch}
			isLoadingDeleteScratch={isLoadingDeleteScratch}
			handleAddScratch={handleAddScratch}
			handleDeleteScratch={handleDeleteScratch}
			handleScratchToNote={handleScratchToNote}
		/>
	)
}
