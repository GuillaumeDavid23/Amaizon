import { render, screen } from '@testing-library/react'

import { MyAgent } from './MyAgent'
import { agent } from '../../data.json'

describe('MyAgent component', () => {
	describe('with Agent not set', () => {
		test("should render 'Aucun agent'", () => {
			render(<MyAgent />)
			const no_agent = screen.getByText(/Aucun agent/)
			expect(no_agent).toBeInTheDocument()
		})
	})

	describe('with Agent set', () => {
		test('should fail to render no agent', () => {
			render(<MyAgent agent={agent} />)
			const inexist = screen.queryByText(/Aucun agent/)
			expect(inexist).not.toBeInTheDocument()
		})
		test('should render BubblePic with no image', () => {
			render(<MyAgent agent={agent} />)
			const res = screen.getAllByText(/Maurice/i)
			expect(res).toHaveLength(1)
		})
	})
})
