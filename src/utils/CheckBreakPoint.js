import React from 'react'
import { Grid, Tag } from 'antd'

export default function CheckBreakPoint() {
	const { useBreakpoint } = Grid
	const screens = useBreakpoint()

	return (
		<>
			{Object.entries(screens)
				.filter((screen) => !!screen[1])
				.map((screen) => (
					<Tag color='blue' key={screen[0]}>
						{screen[0]}
					</Tag>
				))}
		</>
	)
}
