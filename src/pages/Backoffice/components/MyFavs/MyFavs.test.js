import { render, screen } from '@testing-library/react'

import { MyFavs } from './MyFavs'
import { favs } from '../../data.json'

describe('MyFavs component', () => {
	describe('with no favs', () => {
		it('should render empty fav message', () => {
			render(<MyFavs />)
			const el = screen.queryByText(/Pas encore de bien en favoris/)
			expect(el).toBeInTheDocument()
		})

		it('should render buttons', () => {
			render(<MyFavs />)
			const arr = screen.queryAllByText(/Retirer des favoris/)
			expect(arr).toHaveLength(0)
		})
	})

	describe('with favs', () => {
		it.skip('should not render empty fav message', () => {
			render(<MyFavs favs={favs} />)
			const el = screen.queryByText(/Pas encore de bien en favoris/)
			expect(el).not.toBeInTheDocument()
		})

		it.skip('should have 4 delete buttons when having 4 favs', () => {
			render(<MyFavs favs={favs} />)
			const arr = screen.queryAllByText(/Retirer des favoris/)
			expect(arr).toHaveLength(4)
		})
	})
})
