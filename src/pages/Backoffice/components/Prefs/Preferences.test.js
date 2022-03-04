import { render, screen } from '@testing-library/react'

import { Prefs } from './Preferences'
import { prefs } from '../../data.json'

describe('Prefs component', () => {
	describe('with prefs set', () => {
		it('should render without error', () => {
			render(<Prefs prefs={prefs} />)
		})
	})
	describe('with prefs not set', () => {
		it('should render without error', () => {
			render(<Prefs />)
		})

		it("should render 6 'Non défini' when no prefs", () => {
			render(<Prefs />)
			const list_dash = screen.queryAllByText(/Non défini/)
			expect(list_dash).toHaveLength(6)
		})
	})
})
