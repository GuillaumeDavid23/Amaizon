import { render, screen } from '@testing-library/react'

import { MyInfo } from './MyInfo'
import { user } from '../../data.json'

describe('MyInfo component', () => {
	describe('with user set', () => {
		it('should render without error', () => {
			render(<MyInfo user={user} />)
		})

		it("should render 'Benjamin' with test user", () => {
			render(<MyInfo user={user} />)
			const ben = screen.queryByText(/Benjamin/)
			expect(ben).toBeInTheDocument()
		})
	})

	it("should not render 'undefined' without user props", () => {
		render(<MyInfo />)
		const list_undefined = screen.queryAllByText(/undefined/)
		expect(list_undefined).toHaveLength(0)
	})
})
